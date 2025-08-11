import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className="home-background">
        <h1>ALEXIA VENTURA</h1>
      </div>
      <div className="social-media-navigation-bar"></div>
      <a href="https://www.instagram.com/alexiaventuramusic" target="_blank" rel="noopener noreferrer" className="instagram-icon">
        <i className="bi bi-instagram" style={{ fontSize: '2rem', color: 'white' }}></i>
      </a>

      <a href="https://open.spotify.com/artist/0lYNz38JINOG3YjAX45Jg3?si=na8OUREeTNWryoxeV8rH1g" target="_blank" rel="noopener noreferrer" className="spotify-icon">
        <i className="bi bi-spotify" style={{ fontSize: '2rem', color: 'white', marginRight: '1rem' }}></i>
      </a>

      <a href="https://www.tiktok.com/@alexiaventuramusic" target="_blank" rel="noopener noreferrer" className="tiktok-icon">
        <i className="bi bi-tiktok" style={{ fontSize: '2rem', color: 'white', marginRight: '1rem' }}></i>
      </a>

      <a href="https://www.youtube.com/@alexiaventuramusic" target="_blank" rel="noopener noreferrer" className="youtube-icon">
        <i className="bi bi-youtube" style={{ fontSize: '2rem', color: 'white' }}></i>
      </a>

    </>

  );
}


export default App
