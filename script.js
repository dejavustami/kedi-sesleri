const cat = document.getElementById('cursor-cat');

// Fare takibi
document.addEventListener('mousemove', (e) => {
    cat.style.left = (e.clientX - 20) + 'px';
    cat.style.top = (e.clientY - 20) + 'px';
});

// Ses çalma
function playSound(moodId) {
    const allAudios = document.querySelectorAll('audio');
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    const sound = document.getElementById(moodId);
    if (sound) {
        sound.play().catch(err => {
            alert("Lütfen önce 'Sesleri Aktifleştir' butonuna basın!");
        });
    }
}
