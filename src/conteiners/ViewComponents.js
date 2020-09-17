import React from 'react';
import Register from '../components/Register';
import SearchBar from '../components/SearchBar';
import Menu from '../components/Menu';
import Carousel from '../components/Carousel';
import DiscountGallery from '../components/DiscountGallery';
import BestSellingsFlowers from '../components/BestSellingsFlowers';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Brands from '../components/Brands';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ViewComponents = () => {
    return(
        <div className="container">
        <Register/>
        <SearchBar/>
        <Menu/>
        <Carousel/>
        <DiscountGallery/>
        <BestSellingsFlowers/>
        <ExclusiveOffers/>
        <Brands/>
        <Contact/>
        <Footer/>
      </div>
    )
}

export default ViewComponents;