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

document.getElementById('getStarted').addEventListener('click', () => {
    document.querySelector('.hero-content').classList.add('break-animation');
    setTimeout(() => {
        window.scrollTo({
            top: document.querySelector('.products').offsetTop - 100,
            behavior: 'smooth'
        });
    }, 1000);
});

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.dataset.category;
        document.querySelectorAll('.category-section').forEach(section => {
            if(category === 'all') {
                section.style.display = 'block';
            } else {
                section.style.display = section.dataset.category === category ? 'block' : 'none';
            }
        });
    });
});

window.onload = () => {
    createClouds();
};
