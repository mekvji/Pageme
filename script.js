// Data produk futuristik
const productsData = {
    all: [
        { 
            id: 1, 
            name: "Neuralink Pro", 
            category: "tech", 
            price: "$2,499", 
            description: "Brain-computer interface for seamless human-AI interaction. 1024-channel neural lace with quantum encryption.", 
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
            featured: true, 
            details: { 
                "Neural Channels": "1024", 
                "Latency": "< 2ms", 
                "Battery": "72hrs", 
                "Compatibility": "iOS 26+, Android Q+" 
            } 
        },
        { 
            id: 2, 
            name: "Quantum Smartwatch", 
            category: "wearables", 
            price: "$899", 
            description: "Smartwatch with quantum processor and holographic display. Monitors health at cellular level.", 
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80", 
            featured: true, 
            details: { 
                "Processor": "Quantum 1.2Ghz", 
                "Display": "Holographic 4K", 
                "Sensors": "Biometric Array", 
                "Waterproof": "100m" 
            } 
        },
        { 
            id: 3, 
            name: "Smart Home Core", 
            category: "home", 
            price: "$1,299", 
            description: "Central AI for smart homes with predictive automation and energy optimization algorithms.", 
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", 
            featured: false, 
            details: { 
                "AI Cores": "8", 
                "Connectivity": "Quantum Mesh", 
                "Power": "Solar + Fusion Cell", 
                "Automation": "Predictive AI" 
            } 
        },
        { 
            id: 4, 
            name: "Hoverboard X9", 
            category: "transport", 
            price: "$4,999", 
            description: "Anti-gravity personal transport with AI navigation and 500km range on single charge.", 
            image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80", 
            featured: true, 
            details: { 
                "Speed": "120 km/h", 
                "Range": "500 km", 
                "Charge Time": "15 min", 
                "AI Features": "Auto-Balance+" 
            } 
        },
        { 
            id: 5, 
            name: "VR Neural Suit", 
            category: "entertainment", 
            price: "$3,299", 
            description: "Full-body haptic feedback suit with neural interface for 100% immersive virtual reality.", 
            image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1178&q=80", 
            featured: false, 
            details: { 
                "Haptic Points": "10,240", 
                "Latency": "< 1ms", 
                "Battery": "48hrs VR", 
                "Compatibility": "All VR Platforms" 
            } 
        },
        { 
            id: 6, 
            name: "Quantum Laptop", 
            category: "tech", 
            price: "$5,999", 
            description: "Portable quantum computer with holographic keyboard and infinite battery technology.", 
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80", 
            featured: false, 
            details: { 
                "Processor": "128-Qubit", 
                "Memory": "1 Zettabyte", 
                "Display": "Holographic 8K", 
                "Battery": "Infinite Cell" 
            } 
        },
        { 
            id: 7, 
            name: "AI Glasses", 
            category: "wearables", 
            price: "$1,599", 
            description: "Augmented reality glasses with neural interface and real-time translation of 500+ languages.", 
            image: "https://images.unsplash.com/photo-1558618668-f5c0a15c053a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
            featured: true, 
            details: { 
                "Display": "Retinal Projection", 
                "Languages": "500+ real-time", 
                "Battery": "72hrs", 
                "Connectivity": "Neural + 8G" 
            } 
        },
        { 
            id: 8, 
            name: "Nano Drone Swarm", 
            category: "home", 
            price: "$799", 
            description: "Swarm of 100 nano drones for home security, cleaning, and automation tasks.", 
            image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
            featured: false, 
            details: { 
                "Drones": "100 units", 
                "AI": "Swarm Intelligence", 
                "Battery": "Solar + Wireless", 
                "Functions": "Security, Cleaning, Maintenance" 
            } 
        },
        { 
            id: 9, 
            name: "Teleportation Pad", 
            category: "transport", 
            price: "$49,999", 
            description: "Personal teleportation device for instant transport within 100km radius.", 
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
            featured: true, 
            details: { 
                "Range": "100 km", 
                "Travel Time": "Instant", 
                "Safety": "Quantum Entanglement", 
                "Power": "Fusion Cell" 
            } 
        },
        { 
            id: 10, 
            name: "Holographic Theater", 
            category: "entertainment", 
            price: "$8,999", 
            description: "360-degree holographic home theater with scent and tactile environmental effects.", 
            image: "https://images.unsplash.com/photo-1492684223066-dd23140edf6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 
            featured: false, 
            details: { 
                "Projection": "Full 360° Holographic", 
                "Resolution": "32K per eye", 
                "Effects": "Scent, Wind, Tactile", 
                "Immersion": "100% Reality" 
            } 
        }
    ],
    tech: [1, 6],
    wearables: [2, 7],
    home: [3, 8],
    transport: [4, 9],
    entertainment: [5, 10]
};

// Kategori produk
const categories = {
    all: "All Items",
    tech: "Tech & Gadgets",
    wearables: "Wearables",
    home: "Smart Home",
    transport: "Transport",
    entertainment: "Entertainment"
};

// Inisialisasi aplikasi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Simulasi loading dengan progress bar
    const progressBar = document.querySelector('.progress-bar');
    let progress = 0;
    
    const loadingInterval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            
            // Sembunyikan loading screen setelah 500ms
            setTimeout(() => {
                document.getElementById('loadingScreen').style.opacity = '0';
                document.getElementById('loadingScreen').style.visibility = 'hidden';
                
                // Inisialisasi aplikasi setelah loading selesai
                initApp();
            }, 500);
        }
    }, 150);
});

// Inisialisasi aplikasi
function initApp() {
    // Inisialisasi tab kategori
    initCategoryTabs();
    
    // Inisialisasi produk unggulan
    initFeaturedProducts();
    
    // Inisialisasi event listener
    initEventListeners();
    
    // Tampilkan semua produk secara default
    filterProducts('all');
    
    // Inisialisasi efek scroll
    initScrollEffects();
}

// Inisialisasi tab kategori
function initCategoryTabs() {
    const tabButtons = document.querySelectorAll('.category-tab');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hapus class active dari semua tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Tambah class active ke tab yang diklik
            this.classList.add('active');
            
            // Filter produk berdasarkan kategori
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });
}

// Filter produk berdasarkan kategori
function filterProducts(category) {
    const productsGrid = document.querySelector('.products-grid');
    let productsToShow = [];
    
    if (category === 'all') {
        productsToShow = productsData.all;
    } else {
        // Ambil ID produk dari kategori yang dipilih
        const productIds = productsData[category];
        // Cari produk berdasarkan ID
        productsToShow = productsData.all.filter(product => productIds.includes(product.id));
    }
    
    // Kosongkan grid produk
    productsGrid.innerHTML = '';
    
    // Tambahkan produk ke grid
    productsToShow.forEach(product => {
        const productElement = createProductCard(product);
        productsGrid.appendChild(productElement);
    });
    
    // Tambahkan animasi
    animateProducts();
}

// Buat kartu produk
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);
    card.setAttribute('data-category', product.category);
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-content">
            <span class="product-category">${categories[product.category]}</span>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div class="product-price">${product.price}</div>
                <button class="buy-btn" data-id="${product.id}">
                    <i class="fab fa-telegram-plane"></i> Order via AI
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Inisialisasi produk unggulan
function initFeaturedProducts() {
    const featuredContainer = document.querySelector('.featured-container');
    const featuredProducts = productsData.all.filter(product => product.featured);
    
    featuredProducts.forEach(product => {
        const featuredCard = createFeaturedCard(product);
        featuredContainer.appendChild(featuredCard);
    });
}

// Buat kartu unggulan
function createFeaturedCard(product) {
    const card = document.createElement('div');
    card.className = 'featured-card';
    card.setAttribute('data-id', product.id);
    
    card.innerHTML = `
        <div class="featured-badge">Featured</div>
        <img src="${product.image}" alt="${product.name}" class="featured-image">
        <div class="featured-content">
            <span class="product-category">${categories[product.category]}</span>
            <h3 class="featured-name">${product.name}</h3>
            <p class="featured-description">${product.description}</p>
            <div class="product-footer">
                <div class="product-price">${product.price}</div>
                <button class="buy-btn" data-id="${product.id}">
                    <i class="fab fa-telegram-plane"></i> Order via AI
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Inisialisasi event listener
function initEventListeners() {
    // Event listener untuk tombol beli
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('buy-btn') || e.target.closest('.buy-btn')) {
            const btn = e.target.classList.contains('buy-btn') ? e.target : e.target.closest('.buy-btn');
            const productId = parseInt(btn.getAttribute('data-id'));
            showProductModal(productId);
        }
        
        // Event listener untuk tombol close modal
        if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close')) {
            closeModal();
        }
        
        // Event listener untuk tombol close confirmation
        if (e.target.id === 'closeConfirmation' || e.target.closest('#closeConfirmation')) {
            closeConfirmation();
        }
        
        // Event listener untuk klik di luar modal
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
        
        // Event listener untuk navigasi
        if (e.target.classList.contains('nav-link') || e.target.closest('.nav-link')) {
            const link = e.target.classList.contains('nav-link') ? e.target : e.target.closest('.nav-link');
            const targetId = link.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                link.classList.add('active');
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Scroll ke target
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        }
    });
    
    // Event listener untuk tombol telegram di modal
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('telegram-btn') || e.target.closest('.telegram-btn')) {
            const productId = parseInt(document.querySelector('.glass-modal').getAttribute('data-product-id'));
            sendTelegramOrder(productId);
        }
    });
    
    // Event listener untuk floating action button
    document.getElementById('telegramFab').addEventListener('click', function() {
        window.open('https://t.me/nexusmarket_ai', '_blank');
    });
    
    // Event listener untuk tombol AR Preview
    document.getElementById('arPreview').addEventListener('click', function() {
        showARNotification();
    });
    
    // Event listener untuk tombol Voice Search
    document.getElementById('voiceSearch').addEventListener('click', function() {
        showVoiceSearchNotification();
    });
}

// Tampilkan modal produk
function showProductModal(productId) {
    const product = productsData.all.find(product => product.id === productId);
    if (!product) return;
    
    const modalBody = document.querySelector('.modal-body');
    const modal = document.querySelector('.glass-modal');
    
    modal.setAttribute('data-product-id', productId);
    
    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="modal-image">
        <span class="modal-category">${categories[product.category]}</span>
        <h2 class="modal-title">${product.name}</h2>
        <p class="modal-description">${product.description}</p>
        
        <div class="modal-details">
            ${Object.entries(product.details).map(([key, value]) => `
                <div class="detail-item">
                    <div class="detail-label">${key}</div>
                    <div class="detail-value">${value}</div>
                </div>
            `).join('')}
        </div>
        
        <div class="modal-price">${product.price}</div>
        
        <div class="modal-actions">
            <button class="hero-btn primary-btn telegram-btn">
                <i class="fab fa-telegram-plane"></i> Order via AI Assistant
            </button>
            <button class="hero-btn secondary-btn modal-close">
                <i class="fas fa-times"></i> Close
            </button>
        </div>
    `;
    
    document.getElementById('productModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Tutup modal
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Kirim pesanan ke Telegram
function sendTelegramOrder(productId) {
    const product = productsData.all.find(product => product.id === productId);
    if (!product) return;
    
    // Tampilkan konfirmasi
    showConfirmation();
    
    // Simulasi pengiriman pesan ke Telegram AI Assistant
    const message = `Hello NexusMarket AI, I would like to purchase:\n\nProduct: ${product.name}\nCategory: ${categories[product.category]}\nPrice: ${product.price}\n\nPlease initiate the quantum transaction protocol.`;
    
    // URL untuk membuka Telegram (akan dibuka di tab baru)
    const telegramUrl = `https://t.me/nexusmarket_ai?text=${encodeURIComponent(message)}`;
    
    // Buka Telegram setelah 1.5 detik (untuk memberi waktu melihat konfirmasi)
    setTimeout(() => {
        window.open(telegramUrl, '_blank');
    }, 1500);
}

// Tampilkan konfirmasi
function showConfirmation() {
    closeModal();
    document.getElementById('confirmation').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Tutup konfirmasi
function closeConfirmation() {
    document.getElementById('confirmation').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Animasi untuk produk
function animateProducts() {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach((product, index) => {
        product.style.animationDelay = `${index * 0.1}s`;
    });
}

// Inisialisasi efek scroll
function initScrollEffects() {
    window.addEventListener('scroll', function() {
        handleScrollEffects();
    });
    
    // Panggil sekali untuk inisialisasi
    handleScrollEffects();
}

// Efek scroll
function handleScrollEffects() {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero-section');
    
    // Efek parallax untuk hero
    if (hero) {
        const heroContent = hero.querySelector('.hero-text');
        heroContent.style.transform = `translateY(${scrollY * 0.1}px)`;
    }
    
    // Efek pada header
    const header = document.querySelector('.glass-header');
    if (scrollY > 50) {
        header.style.backdropFilter = 'blur(30px)';
        header.style.backgroundColor = 'rgba(10, 10, 15, 0.8)';
    } else {
        header.style.backdropFilter = 'blur(20px)';
        header.style.backgroundColor = 'rgba(10, 10, 15, 0.5)';
    }
    
    // Efek pada kartu saat scroll
    const cards = document.querySelectorAll('.product-card, .featured-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.85) {
            card.classList.add('visible');
        }
    });
}

// Tampilkan notifikasi AR
function showARNotification() {
    createNotification('AR mode activated. Point your device at a flat surface to preview products in your space.', 'info');
}

// Tampilkan notifikasi Voice Search
function showVoiceSearchNotification() {
    createNotification('Voice search enabled. Say "Hey Nexus" followed by your search query.', 'info');
}

// Buat notifikasi
function createNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'info' ? 'info-circle' : 'check-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Animasi masuk
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Event listener untuk close button
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto-hide setelah 5 detik
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Tambahkan style untuk notifikasi
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(20, 20, 30, 0.9);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(0, 217, 255, 0.3);
        border-radius: 12px;
        padding: 15px 20px;
        color: var(--text-primary);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        max-width: 400px;
        z-index: 2000;
        transform: translateX(150%);
        transition: transform 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
    }
    
    .notification-content i {
        color: var(--primary);
        font-size: 1.2rem;
    }
    
    .notification-close {
        background: transparent;
        border: none;
        color: var(--text-tertiary);
        cursor: pointer;
        font-size: 1rem;
        transition: color 0.2s ease;
    }
    
    .notification-close:hover {
        color: var(--text-primary);
    }
    
    .notification-info {
        border-color: var(--primary);
    }
`;

document.head.appendChild(notificationStyles);
