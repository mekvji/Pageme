document.addEventListener('DOMContentLoaded', () => {
    // Generate dynamic clouds
    const createClouds = () => {
        const cloudsContainer = document.querySelector('.clouds');
        for(let i = 0; i < 5; i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud';
            cloud.style.width = Math.random() * 100 + 150 + 'px';
            cloud.style.height = Math.random() * 30 + 40 + 'px';
            cloud.style.top = Math.random() * 80 + 10 + '%';
            cloud.style.left = Math.random() * 100 + '%';
            cloud.style.animationDelay = Math.random() * -20 + 's';
            cloudsContainer.appendChild(cloud);
        }
    }

    // Handle Get Started button click
    const initGetStartedButton = () => {
        const getStartedBtn = document.getElementById('getStarted');
        if(getStartedBtn) {
            getStartedBtn.addEventListener('click', () => {
                document.querySelector('.hero-content').classList.add('break-animation');
                setTimeout(() => {
                    window.scrollTo({
                        top: document.querySelector('.products').offsetTop - 100,
                        behavior: 'smooth'
                    });
                }, 1000);
            });
        }
    }

    // Handle category filtering
    const initCategoryFilters = () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get selected category
                const category = button.dataset.category;
                
                // Filter products
                document.querySelectorAll('.category-section').forEach(section => {
                    if(category === 'all') {
                        section.style.display = 'block';
                    } else {
                        section.style.display = 
                            section.dataset.category === category ? 'block' : 'none';
                    }
                });
            });
        });
    }

    // Initialize all features
    const initialize = () => {
        createClouds();
        initGetStartedButton();
        initCategoryFilters();
    }

    // Start the application
    initialize();
});
