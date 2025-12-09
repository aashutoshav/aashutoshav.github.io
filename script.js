// News data - you can easily add/remove items here
const newsData = [
    {
        date: "Dec 2025",
        content: "I will be joining <em>Dr. James Hays' Lab</em> as a Graduate Student Researcher"
    },
    {
        date: "Dec 2025",
        content: "I will be joining the C21U Lab at Georgia Tech as a Graduate Research Assistant under Dr. <em>Jeonghyun (Jonna) Lee</em>"
    },
    {
        date: "Sept 2025",
        content: "Our work <em>Narrating For You</em> is accepted at <em>WACV 2026</em>"
    },
    {
        date: "Aug 2025",
        content: "Started my MS in Computer Science at Georgia Tech"
    },
    {
        date: "Jun 2025",
        content: "Graduated from BITS Pilani with Distinction"
    },
    {
        date: "Jul 2025",
        content: "Concluded my research internship at Microsoft Research"
    },
    {
        date: "Dec 2024",
        content: "Concluded my work for my Undergraduate Thesis on learning representations for Vision-Language Models"
    },
    {
        date: "May 2024",
        content: "Our work <em>Latent Flow Diffusion for Deepfake Video Generation</em> was accepted at <em>CVPRW 2024</em>."
    },
    {
        date: "Jun 2023",
        content: "Started my Undergraduate Research Assistantship at the Machine Intelligence Group"
    },
    {
        date: "Aug 2021",
        content: "Started my Bachelors in Computer Science at BITS Pilani"
    },
];

// Pagination settings
const ITEMS_PER_PAGE = 3;
let currentPage = 1;

// Function to parse date string and return a sortable date
function parseDate(dateString) {
    const [month, year] = dateString.split(' ');
    const monthMap = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    return new Date(parseInt(year), monthMap[month]);
}

// Sort news data by date (latest first)
const sortedNewsData = [...newsData].sort((a, b) => {
    return parseDate(b.date) - parseDate(a.date);
});

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    // const body = document.body;

    const htmlElement = document.documentElement;

    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Apply the saved theme
    // if (currentTheme === 'dark') {
    //     body.setAttribute('data-theme', 'dark');
    //     themeIcon.className = 'fas fa-sun';
    // } else {
    //     body.setAttribute('data-theme', 'light');
    //     themeIcon.className = 'fas fa-moon';
    // }

    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
    }

    // Theme toggle event listener
    themeToggle.addEventListener('click', function () {
        // const currentTheme = body.getAttribute('data-theme');
        const currentTheme = htmlElement.getAttribute('data-theme');

        // if (currentTheme === 'dark') {
        //     // Switch to light mode
        //     body.setAttribute('data-theme', 'light');
        //     themeIcon.className = 'fas fa-moon';
        //     localStorage.setItem('theme', 'light');
        // } else {
        //     // Switch to dark mode
        //     body.setAttribute('data-theme', 'dark');
        //     themeIcon.className = 'fas fa-sun';
        //     localStorage.setItem('theme', 'dark');
        // }
        if (currentTheme === 'dark') {
            // Switch to light mode
            htmlElement.setAttribute('data-theme', 'light');
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            htmlElement.setAttribute('data-theme', 'dark'); 
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
    const currentNews = sortedNewsData.slice(startIndex, endIndex);

    newsContainer.innerHTML = '';

    currentNews.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        // Convert <italic> tags to proper HTML <em> tags
        const processedContent = item.content.replace(/<italic>/g, '<em>').replace(/<\/italic>/g, '</em>');

        newsItem.innerHTML = `
            <div class="news-date">${item.date}</div>
            <div class="news-content">${processedContent}</div>
        `;
        newsContainer.appendChild(newsItem);
    });
}

function renderPagination() {
    const paginationContainer = document.getElementById('news-pagination');
    const totalPages = Math.ceil(sortedNewsData.length / ITEMS_PER_PAGE);

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
    // Re-sort the data after adding new item
    sortedNewsData.length = 0; // Clear the array
    sortedNewsData.push(...newsData.sort((a, b) => parseDate(b.date) - parseDate(a.date)));
    currentPage = 1; // Reset to first page
    renderNews();
    renderPagination();
}