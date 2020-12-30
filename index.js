const keys = document.querySelector('.key');

window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key='${event.key}']`);
    const key = document.querySelector(`.key[data-key='${event.key}']`);

    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; // stops waiting for sound to end before other can be played
    audio.play();
    key.classList.add('playing');
});

function removeTransition(event) {
if (event.propertyName !== 'transition') return; // skip it if it's not a transform
this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));