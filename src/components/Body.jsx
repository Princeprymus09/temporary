import React from 'react';
import './Body.css';
import Footer from './Footer';

function Body() {
  return (
    <div className="App">
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <div className='search-bar'>
        <input type="text" placeholder='search'  className="navbar-button"  />

        </div>
        </div>
      <section className="section-1">
        <div className="left">
          <h1>Heading</h1>
          <h3>Subheading</h3>
          <p>Description</p>
        </div>
        <div className="right">
          <img src="your-image-url" alt="image-description" />
        </div>
      </section>
      <section className="section-2">
        <div className="card">
          <img src="your-image-url" alt="image-description" />
          <h3>Card Title</h3>
          <p>Card Description</p>
        </div>
        <div className="card">
          <img src="your-image-url" alt="image-description" />
          <h3>Card Title</h3>
          <p>Card Description</p>
        </div>
        <div className="card">
          <img src="your-image-url" alt="image-description" />
          <h3>Card Title</h3>
          <p>Card Description</p>
        </div>
      </section>
      <section className="section-3">
        <h2>Section Heading</h2>
        <p>Section Description</p>
        <button>Click Me</button>
      </section>
      <Footer/>
    </div>
  );
}

export default Body;