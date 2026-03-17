// 7 Saniyelik Takip Sistemi
const cat = document.getElementById('follower-cat');

document.addEventListener('mousemove', (e) => {
    // Fare koordinatlarını al ve kediye ata
    // CSS'deki 'transition: 7s' sayesinde kedi oraya 7 saniyede varacak
    cat.style.left = (e.clientX - 20) + 'px';
    cat.style.top = (e.clientY - 20) + 'px';
});

// Ses Kilidini Kökten Çözme
let audioUnlocked = false;

function unlockAudio() {
    audioUnlocked = true;
    const btn = document.getElementById('activate-btn');
    btn.style.background = "#fd79a8";
    btn.innerText = "✅ Sesler Hazır!";
    
    // Küçük bir onay sesi çal (isteğe bağlı)
    console.log("Ses sistemi kullanıcı tarafından onaylandı.");
}

function playCatSound(id) {
    if (!audioUnlocked) {
        alert("Lütfen önce sağ üstteki 'Sesleri Aktifleştir' butonuna basın!");
        return;
    }

    const sound = document.getElementById(id);
    if (sound) {
        sound.pause();
        sound.currentTime = 0;
        sound.play().catch(e => {
            console.error("Ses oynatılamadı:", e);
        });
    }
}
