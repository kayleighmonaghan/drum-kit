window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key='${event.key}']`);
    if(!audio) return; // stop the function from running altogether
    audio.currentTime = 0; // stops waiting for sound to end before other can be played
    audio.play();
})