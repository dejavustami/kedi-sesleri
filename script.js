function playSound(moodId) {
    // Sayfadaki tüm sesleri bul
    const allAudios = document.querySelectorAll('audio');
    
    // Eğer hali hazırda bir ses çalıyorsa onu durdur ve başa sar
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });

    // Tıklanan karta ait sesi bul ve oynat
    const sound = document.getElementById(moodId);
    if (sound) {
        sound.play().catch(error => {
            console.log("Ses oynatılamadı, kullanıcı etkileşimi gerekiyor olabilir:", error);
        });
    }
}

// Kartlara tıklandığında butonun da görsel bir tepki vermesi için küçük bir efekt
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.transform = 'scale(0.95)';
    });
    card.addEventListener('mouseup', () => {
        card.style.transform = 'translateY(-10px)';
    });
});
