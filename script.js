// News data - you can easily add/remove items here
const newsData = [
    {
        date: "Dec 2024",
        content: "Started my MSCS program at Georgia Tech, specializing in Machine Learning."
    },
    {
        date: "Nov 2024",
        content: "Completed my research internship at Microsoft Research India, working on Applied ML for NoSQL Database Systems."
    },
    {
        date: "Aug 2024",
        content: "Graduated with distinction from BITS Pilani with a Bachelor's Degree in Computer Science."
    },
    {
        date: "Jul 2024",
        content: "Published paper on 'Multimodal Learning for Database Optimization' at ICML 2024."
    },
    {
        date: "Jun 2024",
        content: "Presented research on 'Generative AI for Database Systems' at SIGMOD 2024."
    },
    {
        date: "May 2024",
        content: "Started research internship at Microsoft Research India, focusing on Applied ML for database systems."
    },
    {
        date: "Apr 2024",
        content: "Completed final year project on 'Multimodal LLMs for Database Query Optimization'."
    },
    {
        date: "Mar 2024",
        content: "Won first place in the BITS Pilani TechFest AI/ML competition."
    },
    {
        date: "Feb 2024",
        content: "Published paper on 'Computer Vision for Database Indexing' at WACV 2024."
    }
];

// Pagination settings
const ITEMS_PER_PAGE = 3;
let currentPage = 1;

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
    }

    // Theme toggle event listener
    themeToggle.addEventListener('click', function () {
        const currentTheme = body.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            // Switch to light mode
            body.setAttribute('data-theme', 'light');
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            body.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Initialize news section
    initializeNews();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// News functionality
function initializeNews() {
    renderNews();
    renderPagination();
}

function renderNews() {
    const newsContainer = document.getElementById('news-container');
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentNews = newsData.slice(startIndex, endIndex);

    newsContainer.innerHTML = '';

    currentNews.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <div class="news-date">${item.date}</div>
            <div class="news-content">${item.content}</div>
        `;
        newsContainer.appendChild(newsItem);
    });
}

function renderPagination() {
    const paginationContainer = document.getElementById('news-pagination');
    const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    paginationContainer.innerHTML = '';

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderNews();
            renderPagination();
        }
    });
    paginationContainer.appendChild(prevBtn);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderNews();
            renderPagination();
        });
        paginationContainer.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderNews();
            renderPagination();
        }
    });
    paginationContainer.appendChild(nextBtn);
}

// Function to add new news items (you can call this to add news dynamically)
function addNewsItem(date, content) {
    newsData.unshift({ date, content }); // Add to beginning of array
    currentPage = 1; // Reset to first page
    renderNews();
    renderPagination();
}

// Example of how to add news dynamically:
// addNewsItem("Jan 2025", "Started new research project on Multimodal AI at Georgia Tech.");