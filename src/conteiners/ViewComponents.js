import React from 'react';
import Register from '../components/Register';
import SearchBar from '../components/SearchBar';
import Menu from '../components/Menu';
import CarouselView from '../components/Carousel';
import DiscountGallery from '../components/DiscountGallery';
import BestSellingsFlowers from '../components/BestSellingsFlowers';
import ExclusiveOffers from '../components/ExclusiveOffers';
import Brands from '../components/Brands';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ViewComponents = () => {
    return(
        <div className="container-principal">
        <Register/>
        <SearchBar/>
        <Menu/>
        <CarouselView/>
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