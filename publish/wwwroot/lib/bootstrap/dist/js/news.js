function initializeNewsFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const newsItems = document.querySelectorAll('.news-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {

            filterButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            newsItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-type') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // console.log('News filters initialized successfully');
}

function loadEmbedContent(iframeElement, embedUrl) {
    if (iframeElement && embedUrl) {
        iframeElement.src = embedUrl;
    }
}