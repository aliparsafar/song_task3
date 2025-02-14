async function getLyrics() {
    const singer = document.getElementById('singer').value;
    const songTitle = document.getElementById('songTitle').value;
    
    if (!singer || !songTitle) {
        alert('Please provide both singer and song title.');
        return;
    }

    try {
        const response = await fetch(`https://api.lyrics.ovh/v1/${singer}/${songTitle}`);
        const data = await response.json();

        if (data.error) {
            document.getElementById('lyrics').textContent = 'Lyrics not found!';
          
            return;
        }

        const fullLyrics = data.lyrics;

        document.getElementById('lyrics').textContent = fullLyrics;
        const verses = fullLyrics.split('\n');
        const partialVerses = verses.slice(0, 3);


    } catch (error) {
        document.getElementById('lyrics').textContent = 'Error fetching lyrics. Please try again.';
        document.getElementById('partialLyrics').textContent = '';
    }
}