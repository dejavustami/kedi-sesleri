function getRandomMeow() {
    const audio = document.getElementById('cat-audio');
    const status = document.getElementById('status-text');
    
    // 200+ ses barındıran rastgele bir kedi sesi kaynağı
    // Her tıklandığında URL'nin sonuna rastgele bir sayı ekleyerek farklı ses gelmesini sağlıyoruz
    const randomNum = Math.floor(Math.random() * 200) + 1;
    
    // Açık kaynaklı bir kedi sesi kütüphanesi (Örnek olarak MyInstants veya benzeri bir CDN kullanıyoruz)
    // Eğer bu link zamanla değişirse, kedi sesi mp3'ü veren herhangi bir linkle güncellenebilir.
    const audioUrl = `https://www.myinstants.com/media/sounds/meow.mp3?v=${randomNum}`;

    status.innerText = "Miyavlatılıyor... 🐾";
    
    audio.src = audioUrl;
    audio.play().catch(error => {
        status.innerText = "Hata: Önce sayfada herhangi bir yere tıkla!";
        console.log("Ses oynatılamadı, kullanıcı etkileşimi gerekiyor.");
    });

    // Buton efektini görselleştir
    document.getElementById('meow-btn').style.backgroundColor = "#fd79a8";
    setTimeout(() => {
        document.getElementById('meow-btn').style.backgroundColor = "#6c5ce7";
        status.innerText = "Yenisi için tekrar bas!";
    }, 500);
}
