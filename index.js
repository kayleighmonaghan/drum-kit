function playSound(event) {
    const audio = document.querySelector(`audio[data-key='${event.key}']`);
    const key = document.querySelector(`.key[data-key='${event.key}']`);
    if(!audio) return; // stops the function from running if key with no audio element is pressed
    audio.currentTime = 0; // stops waiting for sound to end before other can be played
    audio.play();
    key.classList.add('playing');
};

function removeTransition(event) {
    if(event.propertyName !== 'transform') return; // ignores all transitions except for 'transofrm'
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);