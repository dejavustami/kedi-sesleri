// Fareyi Takip Eden Kedi
const cat = document.getElementById('cursor-cat');
document.addEventListener('mousemove', (e) => {
    cat.style.left = e.clientX + 'px';
    cat.style.top = e.clientY + 'px';
});

// Ses Çalma Fonksiyonu
function playSound(moodId) {
    const allAudios = document.querySelectorAll('audio');
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    const sound = document.getElementById(moodId);
    if (sound) {
        // Tarayıcı hatasını önlemek için promise kontrolü
        const playPromise = sound.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Ses engellendi. Lütfen 'Sesleri Aktifleştir' butonuna basın.");
            });
        }
    }
}
