import React from 'react';
import Header from "./Components/Header.jsx";
import About from './Components/About.jsx';
import Special from './Components/Special.jsx';
import Menu from './Components/Menu.jsx';
import Offer from './Components/Offer.jsx';
import Cooking from './Components/Cooking.jsx';
import Info from './Components/Info.jsx';
import Reviews from './Components/Reviews.jsx';
import Blog from './Components/Blog.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {

  return (
    <>
      <Header/>

      <div className='background'>
        <About />
        <Special />
        <Menu />
        <Offer />
        <Cooking />
        <Info />
        <Reviews />
        <Blog />
        <Footer />
      </div>

    </>
  );

}

export default App;