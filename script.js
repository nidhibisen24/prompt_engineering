// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('global-search');
    const resultsDiv = document.getElementById('search-results');
    
    // Topics database for search
    const topics = [
        { name: "Introduction", url: "index.html" },
        { name: "Components of Prompt", url: "Components.html" },
        { name: "Techniques", url: "techniques.html" },
        { name: "Zero-Shot Learning", url: "zero-shot.html" },
        { name: "Few-Shot Learning", url: "few-shot.html" },
        { name: "Chain of Thought", url: "cot.html" }
    ];

    // 1. Navbar Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length < 1) {
                resultsDiv.classList.add('hidden');
                return;
            }

            const filtered = topics.filter(t => t.name.toLowerCase().includes(query));
            
            if (filtered.length > 0) {
                resultsDiv.innerHTML = filtered.map(t => 
                    `<a href="${t.url}" class="block px-4 py-2 hover:bg-gray-100 text-sm">${t.name}</a>`
                ).join('');
                resultsDiv.classList.remove('hidden');
            } else {
                resultsDiv.innerHTML = `<div class="px-4 py-2 text-sm text-gray-400">No topics found</div>`;
                resultsDiv.classList.remove('hidden');
            }
        });

        // Hide search results on click outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target)) resultsDiv.classList.add('hidden');
        });
    }

    // 2. Active Page Highlighting Logic
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const subLinks = document.querySelectorAll('.sub-nav-link');
    
    subLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});