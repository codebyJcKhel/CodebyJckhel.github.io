document.getElementById('scareButton').addEventListener('click', function() {
    const scaryMessage = document.getElementById('scaryMessage');
    const scarySound = document.getElementById('scarySound');

    scaryMessage.classList.remove('hidden');
    scaryMessage.classList.add('visible');
    scarySound.play();

    // Hide the message after 3 seconds
    setTimeout(() => {
        scaryMessage.classList.add('hidden');
    }, 3000);
});
