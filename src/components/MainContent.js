import React from 'react';
import leipzig from '../assets/img/lei.jpg';

function MainContent({ city }) {
  return (
    <div>
      <h1>This is my website is about {city}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        ratione!
      </p>
      <img src={leipzig} alt='Leipzig' width='300px' />
      <button onClick={() => alert('I am button')}>I'm a button</button>
    </div>
  );
}

export default MainContent;
