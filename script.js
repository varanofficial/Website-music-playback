document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playlist = document.getElementById('playlist');
    const tracks = playlist.getElementsByClassName('track');

    for (let track of tracks) {
        track.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            audio.src = src;
            audio.play();
        });
    }

    // Disable right-click on the audio element
    audio.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Disable keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
        }
    });
});