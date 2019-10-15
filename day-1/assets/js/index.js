function playSound(e) {
    const keyCode = e.keyCode,
        audio = document.querySelector(`audio[data-key="${keyCode}"]`),
        key = document.querySelector(`div[data-key="${keyCode}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;

    e.target.classList.remove('playing');
}

const pianoKeys = Array.from(document.querySelectorAll('.key'));

pianoKeys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);