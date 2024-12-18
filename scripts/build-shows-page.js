document.addEventListener('DOMContentLoaded', () => {
    const soundcloudPlayer = document.getElementById('soundcloud-player');
    
    // Placeholder SoundCloud track (replace with actual track)
    const trackUrl = 'https://soundcloud.com/thebeesknees/stripes-of-yellow';
    
    // Create SoundCloud iframe
    const iframe = document.createElement('iframe');
    iframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}`;
    iframe.width = '100%';
    iframe.height = '166';
    iframe.scrolling = 'no';
    iframe.frameBorder = 'no';
    
    soundcloudPlayer.appendChild(iframe);
  });