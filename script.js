const button = document.getElementById('meowButton');
// Ses dosyanın yolunu buraya yaz
const audio = new Audio('2026-03-17 14-33-43 (mp3cut.net).mp3'); 

button.addEventListener('click', () => {
    // Ses zaten çalıyorsa başa sar (böylece her tıklamada tepki verir)
    audio.currentTime = 0; 
    audio.play().catch(error => {
        console.log("Ses çalma hatası:", error);
    });
});
