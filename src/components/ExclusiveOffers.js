import React from 'react';
import img11 from '../imgs/Rectangle1.png'
import img12 from '../imgs/Rectangle2.png'
import img13 from '../imgs/Rectangle3.png'


const ExclusiveOffers = () => {

    return(
        <div className="principal-exclusiveOffers">
           <h1 className="h1-exclusive">EXCLUSIVE OFFERS</h1>
           <div className="img-rectangle">
            <div className="div-offers">
                <img src={img11} alt="" className="img-offers"/>
                <div className="text-offers">
                <p >Be Happy Flower</p>
                <p>Bouquet</p>
                <p>$30</p>
                <i class="fas fa-heart heart-offers"></i>
                <i class="fas fa-shopping-cart cart-sale"></i>
                </div>
                
            </div>
            <div className="div-offers">
                <img src={img12} alt="" className="img-offers"/>
                <div className="text-offers">
                <p >Delightfully Fresh</p>
                <p>Bouquet</p>
                <p>$42</p>
                <i class="fas fa-heart heart-offers"></i>
                <i class="fas fa-shopping-cart cart-sale"></i>
                </div>
                
            </div>
            <div className="div-offers">
                <img src={img13} alt="" className="img-offers"/>
                <div className="text-offers">
                <p >Rose and Lily</p>
                <p>Romance</p>
                <p>$37</p>
                <i class="fas fa-heart heart-offers"></i>
                <i class="fas fa-shopping-cart cart-sale"></i>
                </div>
                
            </div>
           </div>
        </div>
    )
}

export default ExclusiveOffers;