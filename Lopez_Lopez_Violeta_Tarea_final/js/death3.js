const video = document.getElementById('quark');
const sound = new Audio('../../../../assets/sounds/kilonova-collision.mp3');

video.addEventListener('loadeddata', () => {
    video.loop = true;
   
    video.play();
    sound.play();
});

video.addEventListener('play', () => {
    sound.play();
});

video.addEventListener('pause', () => {
    sound.pause();
});