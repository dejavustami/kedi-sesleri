const follower = document.getElementById('follower');

// Piksel Kedi Fareyi Takip Etsin
document.addEventListener('mousemove', (e) => {
    // Hafif gecikme efekti için delay ekliyoruz
    setTimeout(() => {
        follower.style.left = (e.pageX + 15) + 'px';
        follower.style.top = (e.pageY + 15) + 'px';
    }, 50);
});

// Sesleri Aktifleştirme Fonksiyonu
function activateAudio() {
    // Tarayıcıya ses çalma yetkisi vermek için boş bir ses tetikliyoruz
    const emptyAudio = new Audio();
    emptyAudio.play().catch(() => {});
    document.getElementById('enable-audio-btn').innerText = "✅ Aktif!";
}

// Miyavlama Fonksiyonu
function playSound(id) {
    const sound = document.getElementById(id);
    if (sound) {
        sound.currentTime = 0; // Başa sar
        sound.play().catch(err => {
            alert("Lütfen önce yukarıdaki 'Sesleri Aktifleştir' butonuna basın!");
        });
    }
}
