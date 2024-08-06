document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    
    // Error handling for audio element
    audio.onerror = function() {
        console.error('Failed to load audio:', audio.error);
    };

    const playlist = document.getElementById('playlist');
    const tracks = playlist.getElementsByClassName('track');

    // Add click event listeners to each track
    for (let track of tracks) {
        track.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            audio.src = src;
            audio.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        });
    }

    // Disable right-click on the audio element
    audio.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Disable specific keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
        }
    });
});
