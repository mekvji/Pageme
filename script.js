document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk membuat awan
    function createClouds() {
        const cloudsContainer = document.querySelector('.clouds');
        for (let i = 0; i < 5; i++) {
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

    // Fungsi untuk tombol Get Started
    function initGetStartedButton() {
        const getStartedBtn = document.getElementById('getStarted');
        if (getStartedBtn) {
            getStartedBtn.addEventListener('click', function() {
                const heroContent = document.querySelector('.hero-content');
                heroContent.classList.add('break-animation');
                
                setTimeout(() => {
                    window.scrollTo({
                        top: document.querySelector('.products').offsetTop - 100,
                        behavior: 'smooth'
                    });
                }, 1000);
            });
        }
    }

    // Fungsi untuk filter kategori
    function initCategoryFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Hapus class active dari semua tombol
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Tambahkan class active ke tombol yang diklik
                this.classList.add('active');
                
                // Dapatkan kategori yang dipilih
                const category = this.dataset.category;
                
                // Filter produk
                document.querySelectorAll('.category-section').forEach(section => {
                    if (category === 'all') {
                        section.style.display = 'block';
                    } else {
                        section.style.display = section.dataset.category === category ? 'block' : 'none';
                    }
                });
            });
        });
    }

    // Inisialisasi semua fungsi
    function init() {
        createClouds();
        initGetStartedButton();
        initCategoryFilters();
    }

    // Jalankan inisialisasi
    init();
});
