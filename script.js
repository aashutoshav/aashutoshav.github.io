/* ============================================================
   Site behaviour: theme, scroll reveal, news, publications.
   Depends on data.js being loaded first.
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Theme ---------- */
    const html = document.documentElement;

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        const icon = document.getElementById('theme-icon');
        if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    let stored = 'dark';
    try {
        stored = localStorage.getItem('theme') || 'dark';
    } catch (e) { /* private mode */ }
    applyTheme(stored);

    function initTheme() {
        applyTheme(html.getAttribute('data-theme') || 'dark');
        const toggle = document.getElementById('theme-toggle');
        if (!toggle) return;
        toggle.addEventListener('click', function () {
            const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
        });
    }

    /* ---------- Sticky header shadow ---------- */
    function initHeader() {
        const header = document.getElementById('header');
        if (!header) return;
        const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ---------- Scroll reveal ---------- */
    function initReveal() {
        const items = document.querySelectorAll('.reveal');
        if (!items.length) return;
        if (!('IntersectionObserver' in window)) {
            items.forEach(el => el.classList.add('in'));
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        items.forEach(el => io.observe(el));
    }

    /* ---------- Copy email ---------- */
    function toast(message) {
        const el = document.getElementById('toast');
        if (!el) return;
        el.textContent = message;
        el.classList.add('show');
        clearTimeout(el._t);
        el._t = setTimeout(() => el.classList.remove('show'), 1800);
    }

    function initCopyEmail() {
        const btn = document.getElementById('copy-email');
        if (!btn) return;
        btn.addEventListener('click', function () {
            const email = btn.dataset.email;
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email)
                    .then(() => toast('Email copied to clipboard'))
                    .catch(() => { window.location.href = 'mailto:' + email; });
            } else {
                window.location.href = 'mailto:' + email;
            }
        });
    }

    /* ---------- News ---------- */
    const MONTHS = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    function parseDate(str) {
        const [month, year] = str.split(' ');
        return new Date(parseInt(year, 10), MONTHS[month] || 0);
    }

    const INITIAL_NEWS = 5;

    function initNews() {
        const container = document.getElementById('news-container');
        if (!container || typeof newsData === 'undefined') return;

        const sorted = [...newsData].sort((a, b) => parseDate(b.date) - parseDate(a.date));
        const toggle = document.getElementById('news-toggle');
        let expanded = false;

        function render() {
            const list = expanded ? sorted : sorted.slice(0, INITIAL_NEWS);
            container.innerHTML = list.map(item => `
                <div class="news-item">
                    <div class="news-date">${item.date}</div>
                    <div class="news-content">${item.content}</div>
                </div>`).join('');
        }

        render();

        if (toggle) {
            if (sorted.length <= INITIAL_NEWS) {
                toggle.style.display = 'none';
            } else {
                toggle.addEventListener('click', function () {
                    expanded = !expanded;
                    render();
                    toggle.textContent = expanded ? 'show less \u2191' : 'show more \u2193';
                });
            }
        }
    }

    /* ---------- Publications ---------- */
    function initPublications() {
        const list = document.getElementById('all-pubs');
        if (!list || typeof publications === 'undefined') return;

        list.innerHTML = publications.map(p => `
            <article class="pub-item">
                <div class="pub-venue">${p.venue}${p.note ? `<span class="pub-status">${p.note}</span>` : ''}</div>
                <div>
                    <h3 class="pub-title">${p.title}</h3>
                    <p class="pub-desc">${p.desc}</p>
                    ${p.links.length ? `<div class="pub-links">${p.links.map(l =>
                        `<a href="${l.href}" target="_blank" rel="noopener">[${l.label}]</a>`).join('')}</div>` : ''}
                </div>
            </article>`).join('');
    }

    /* ---------- Boot ---------- */
    document.addEventListener('DOMContentLoaded', function () {
        initTheme();
        initHeader();
        initCopyEmail();
        initNews();
        initPublications();
        initReveal();

        const year = document.getElementById('year');
        if (year) year.textContent = new Date().getFullYear();
    });
})();
