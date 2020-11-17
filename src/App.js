import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
  const city = 'Leipzig';
  return (
    <div>
      <Header city={city} />
      <MainContent city={city} />
      <Footer city={city} />
    </div>
  );
};

export default App;
