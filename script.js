// Data barang berdasarkan kategori
const itemsData = {
    all: [
        { id: 1, name: "Kursi Antik Victoria", category: "furniture", price: "Rp 4.500.000", description: "Kursi kayu jati dengan ukiran tangan khas era Victoria. Kondisi sangat baik.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", featured: true, details: { condition: "Sangat Baik", material: "Kayu Jati", age: "50-60 tahun", origin: "Jepara" } },
        { id: 2, name: "Lukisan Pemandangan Klasik", category: "art", price: "Rp 8.200.000", description: "Lukisan minyak di kanvas dengan tema pemandangan pedesaan Eropa abad 19.", image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80", featured: true, details: { artist: "Tidak Diketahui", medium: "Minyak di Kanvas", size: "60x80 cm", year: "Circa 1890" } },
        { id: 3, name: "Kalung Mutiara Langka", category: "jewelry", price: "Rp 12.500.000", description: "Kalung mutiara air tawar dengan pengait emas 18k. Mutiara berbentuk bulat sempurna.", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", featured: false, details: { material: "Mutiara, Emas 18k", length: "45 cm", condition: "Baru", origin: "Jepang" } },
        { id: 4, name: "Patung Perunggu Abad 18", category: "collectibles", price: "Rp 25.000.000", description: "Patung perunggu dengan tema mitologi Yunani. Tinggi 35 cm dengan dasar marmer.", image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", featured: true, details: { material: "Perunggu & Marmer", height: "35 cm", age: "200+ tahun", theme: "Mitologi Yunani" } },
        { id: 5, name: "Buku Langka First Edition", category: "books", price: "Rp 6.800.000", description: "Buku pertama edisi terbatas karya sastrawan ternama. Dilengkapi dengan tanda tangan penulis.", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", featured: false, details: { author: "Pramoedya Ananta Toer", year: "1980", condition: "Baik", pages: "320 halaman" } },
        { id: 6, name: "Vas Keramik Tiongkok Kuno", category: "decor", price: "Rp 15.300.000", description: "Vas keramik biru-putih dari Dinasti Qing. Motif naga dan awan dengan warna masih cerah.", image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", featured: true, details: { dynasty: "Qing", height: "40 cm", condition: "Utuh", age: "150+ tahun" } },
        { id: 7, name: "Meja Tulis Antik", category: "furniture", price: "Rp 7.900.000", description: "Meja tulis kayu mahoni dengan laci-laci berukir. Cocok untuk ruang kerja atau perpustakaan.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80", featured: false, details: { material: "Kayu Mahoni", dimensions: "120x60x75 cm", age: "70-80 tahun", style: "Kolonial" } },
        { id: 8, name: "Lukisan Abstrak Modern", category: "art", price: "Rp 11.500.000", description: "Lukisan abstrak dengan teknik cat minyak dan akrilik. Karya seniman lokal ternama.", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80", featured: false, details: { artist: "Affandi", medium: "Cat Minyak & Akrilik", size: "80x100 cm", year: "1975" } },
        { id: 9, name: "Cincin Berlian Vintage", category: "jewelry", price: "Rp 32.000.000", description: "Cincin berlian dengan desain Art Deco. Berlian utama 1.5 karat dengan berlian kecil pendamping.", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", featured: true, details: { material: "Emas Putih 18k & Berlian", carat: "1.5 karat", style: "Art Deco", age: "1930s" } },
        { id: 10, name: "Kompas Navigasi Kuno", category: "collectibles", price: "Rp 9.500.000", description: "Kompas navigasi dari kapal dagang abad 19. Masih berfungsi dengan baik.", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80", featured: false, details: { type: "Kompas Marinir", material: "Kuningan & Kaca", age: "150+ tahun", origin: "Inggris" } },
        { id: 11, name: "Manuskrip Kuno Beraksara Jawa", category: "books", price: "Rp 18.000.000", description: "Manuskrip kuno beraksara Jawa tentang sejarah kerajaan. Ditulis di atas daun lontar.", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1198&q=80", featured: true, details: { script: "Aksara Jawa", material: "Daun Lontar", age: "200+ tahun", condition: "Rapuh" } },
        { id: 12, name: "Karpet Persia Antik", category: "decor", price: "Rp 22.500.000", description: "Karpet tangan dari Persia dengan motif tradisional yang rumit. Warna masih sangat cerah.", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", featured: false, details: { origin: "Persia", size: "200x300 cm", material: "Sutra & Wol", age: "100+ tahun" } }
    ],
    furniture: [1, 7],
    art: [2, 8],
    jewelry: [3, 9],
    collectibles: [4, 10],
    books: [5, 11],
    decor: [6, 12]
};

// Data kategori
const categories = {
    all: "Semua",
    furniture: "Furniture",
    art: "Seni & Lukisan",
    jewelry: "Perhiasan",
    collectibles: "Koleksi",
    books: "Buku Langka",
    decor: "Dekorasi"
};

// Inisialisasi aplikasi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Sembunyikan loading screen setelah 2 detik
    setTimeout(() => {
        document.getElementById('loadingScreen').style.opacity = '0';
        document.getElementById('loadingScreen').style.visibility = 'hidden';
        
        // Inisialisasi komponen setelah loading selesai
        initApp();
    }, 2000);
});

// Inisialisasi aplikasi
function initApp() {
    // Inisialisasi tab kategori
    initCategoryTabs();
    
    // Inisialisasi item unggulan
    initFeaturedItems();
    
    // Inisialisasi event listener
    initEventListeners();
    
    // Tampilkan semua item secara default
    filterItems('all');
}

// Inisialisasi tab kategori
function initCategoryTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Hapus class active dari semua tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Tambah class active ke tab yang diklik
            this.classList.add('active');
            
            // Filter item berdasarkan kategori
            const category = this.getAttribute('data-category');
            filterItems(category);
        });
    });
}

// Filter item berdasarkan kategori
function filterItems(category) {
    const tabContent = document.querySelector('.tab-content');
    let itemsToShow = [];
    
    if (category === 'all') {
        itemsToShow = itemsData.all;
    } else {
        // Ambil ID item dari kategori yang dipilih
        const itemIds = itemsData[category];
        // Cari item berdasarkan ID
        itemsToShow = itemsData.all.filter(item => itemIds.includes(item.id));
    }
    
    // Kosongkan konten tab
    tabContent.innerHTML = '';
    
    // Tambahkan item ke tab
    itemsToShow.forEach(item => {
        const itemElement = createItemCard(item);
        tabContent.appendChild(itemElement);
    });
    
    // Tambahkan animasi fade in
    animateItems();
}

// Buat kartu item
function createItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.setAttribute('data-id', item.id);
    card.setAttribute('data-category', item.category);
    
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="item-img">
        <div class="item-info">
            <span class="item-category">${categories[item.category]}</span>
            <h3 class="item-name">${item.name}</h3>
            <p class="item-desc">${item.description}</p>
            <div class="item-footer">
                <div class="item-price">${item.price}</div>
                <button class="buy-btn" data-id="${item.id}">
                    <i class="fab fa-telegram"></i> Beli via Telegram
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Inisialisasi item unggulan
function initFeaturedItems() {
    const featuredContainer = document.querySelector('.featured-items');
    const featuredItems = itemsData.all.filter(item => item.featured);
    
    featuredItems.forEach(item => {
        const featuredCard = createFeaturedCard(item);
        featuredContainer.appendChild(featuredCard);
    });
}

// Buat kartu unggulan
function createFeaturedCard(item) {
    const card = document.createElement('div');
    card.className = 'featured-card';
    card.setAttribute('data-id', item.id);
    
    card.innerHTML = `
        <div class="featured-badge">Unggulan</div>
        <img src="${item.image}" alt="${item.name}" class="featured-img">
        <div class="featured-info">
            <span class="item-category">${categories[item.category]}</span>
            <h3 class="featured-name">${item.name}</h3>
            <p class="featured-desc">${item.description}</p>
            <div class="item-footer">
                <div class="item-price">${item.price}</div>
                <button class="buy-btn" data-id="${item.id}">
                    <i class="fab fa-telegram"></i> Beli via Telegram
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
            const itemId = parseInt(btn.getAttribute('data-id'));
            showItemModal(itemId);
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
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    link.classList.add('active');
                    
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
            const itemId = parseInt(document.querySelector('.modal-content').getAttribute('data-item-id'));
            sendTelegramOrder(itemId);
        }
    });
    
    // Event listener untuk floating action button
    document.getElementById('telegramFab').addEventListener('click', function() {
        window.open('https://t.me/luxeantique_admin', '_blank');
    });
    
    // Event listener untuk scroll window (untuk efek parallax)
    window.addEventListener('scroll', function() {
        handleScrollEffects();
    });
}

// Tampilkan modal item
function showItemModal(itemId) {
    const item = itemsData.all.find(item => item.id === itemId);
    if (!item) return;
    
    const modalBody = document.querySelector('.modal-body');
    const modal = document.querySelector('.modal-content');
    
    modal.setAttribute('data-item-id', itemId);
    
    modalBody.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="modal-img">
        <h2 class="modal-title">${item.name}</h2>
        <span class="modal-category">${categories[item.category]}</span>
        <p class="modal-description">${item.description}</p>
        
        <div class="modal-details">
            ${Object.entries(item.details).map(([key, value]) => `
                <div class="detail-item">
                    <div class="detail-label">${formatLabel(key)}</div>
                    <div class="detail-value">${value}</div>
                </div>
            `).join('')}
        </div>
        
        <div class="modal-price">${item.price}</div>
        
        <div class="modal-actions">
            <button class="modal-btn telegram-btn">
                <i class="fab fa-telegram"></i> Beli via Telegram
            </button>
            <button class="modal-btn close-btn">
                <i class="fas fa-times"></i> Tutup
            </button>
        </div>
    `;
    
    document.getElementById('itemModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Format label detail
function formatLabel(label) {
    const labelMap = {
        condition: "Kondisi",
        material: "Material",
        age: "Usia",
        origin: "Asal",
        artist: "Artis",
        medium: "Medium",
        size: "Ukuran",
        year: "Tahun",
        length: "Panjang",
        height: "Tinggi",
        theme: "Tema",
        author: "Penulis",
        pages: "Halaman",
        dynasty: "Dinasti",
        dimensions: "Dimensi",
        style: "Gaya",
        carat: "Karat",
        type: "Tipe",
        script: "Aksara"
    };
    
    return labelMap[label] || label;
}

// Tutup modal
function closeModal() {
    document.getElementById('itemModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Kirim pesanan ke Telegram
function sendTelegramOrder(itemId) {
    const item = itemsData.all.find(item => item.id === itemId);
    if (!item) return;
    
    // Tampilkan konfirmasi
    showConfirmation();
    
    // Simulasi pengiriman pesan ke Telegram
    const message = `Halo admin LuxeAntique, saya ingin membeli barang:\n\nNama: ${item.name}\nKategori: ${categories[item.category]}\nHarga: ${item.price}\n\nSilakan hubungi saya untuk proses pembelian.`;
    
    // URL untuk membuka Telegram (akan dibuka di tab baru)
    const telegramUrl = `https://t.me/luxeantique_admin?text=${encodeURIComponent(message)}`;
    
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

// Animasi untuk item
function animateItems() {
    const items = document.querySelectorAll('.item-card');
    
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
    });
}

// Efek scroll
function handleScrollEffects() {
    const scrollY = window.scrollY;
    
    // Efek parallax untuk hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
    }
    
    // Efek pada header
    const header = document.querySelector('header');
    if (scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
        header.style.padding = '1rem 0';
    } else {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
        header.style.padding = '1.5rem 0';
    }
    
    // Efek pada kartu saat scroll
    const cards = document.querySelectorAll('.item-card, .featured-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight * 0.9) {
            card.classList.add('visible');
        }
    });
}
