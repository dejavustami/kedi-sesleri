// Fare Takibi (7 Saniye Gecikme)
const cat = document.getElementById('follower-cat');
document.addEventListener('mousemove', (e) => {
    cat.style.left = (e.clientX - 25) + 'px';
    cat.style.top = (e.clientY - 25) + 'px';
});

// Gerçek Kedi Sesleri Listesi (Doğrudan çalışan mp3'ler)
const meowSounds = [
    "https://www.soundjay.com/nature/sounds/cat-meow-01.mp3",
    "https://www.soundjay.com/nature/sounds/cat-meow-02.mp3",
    "https://www.soundjay.com/nature/sounds/cat-meow-03.mp3",
    "https://www.soundjay.com/nature/sounds/cat-meow-04.mp3",
    "https://assets.mixkit.co/active_storage/sfx/2381/2381-preview.mp3",
    "https://www.myinstants.com/media/sounds/cat-meow.mp3",
    "https://www.myinstants.com/media/sounds/short-meow.mp3"
];

function playRealMeow() {
    const audio = document.getElementById('cat-audio');
    const status = document.getElementById('status-text');
    
    // Rastgele ses seç
    const randomSound = meowSounds[Math.floor(Math.random() * meowSounds.length)];
    
    audio.src = randomSound;
    audio.volume = 0.4; // SES SEVİYESİ %40'A DÜŞÜRÜLDÜ (Rahatsız etmez)
    
    audio.play().then(() => {
        status.innerText = "Miyav! 🐾";
    }).catch(err => {
        status.innerText = "Lütfen önce sayfaya bir kez tıklayın!";
    });

    // Buton rengi değişsin
    const btn = document.getElementById('meow-btn');
    btn.style.background = "#fd79a8";
    setTimeout(() => { btn.style.background = "#6c5ce7"; }, 300);
}
