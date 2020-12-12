const handlePlay = (keyCode) => {
    const song = document.querySelector(`.song-${keyCode}`);
    const button = document.querySelector(`.button-${keyCode}`);
    if (song && button) {
        song.play();
        button.classList.toggle('active');
        setTimeout(() => button.classList.toggle('active'), 500);
    }

};
document.addEventListener('keydown', (e) => handlePlay(e.code));
document.addEventListener('mouseover', (e) => {
    const originalTarget = e.target.closest('div[data-keycode]');
    if (originalTarget) {
        const {
            keycode
        } = originalTarget.dataset;
        handlePlay(keycode);
    }

});