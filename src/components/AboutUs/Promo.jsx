import "../../assets/sass/base.scss";
import "../../assets/sass/about.scss";

import promoItem1 from '../../assets/images/aboutImages/aboutPromo/promoItem1.svg';
import promoItem2 from '../../assets/images/aboutImages/aboutPromo/promoItem2.svg';
import promoItem3 from '../../assets/images/aboutImages/aboutPromo/promoItem3.svg';
import promoItem4 from '../../assets/images/aboutImages/aboutPromo/promoItem4.svg';

const PromoComponent = () => {
    return (
        <div className="promo-section">
            <div className="promo-left">
                <div className="promo-desc">
                    <h2 className="promo-left-title">Why We are the Best?</h2>
                    <p className="promo-left-desc">Features that we have which Lorem ipsum dolor sit amet, consectetur
                        convallis. Arcu, egestas nec scelerisque mi. Augue proin</p>
                </div>
                <div className="promo-items">
                    <div className="promo-item">
                        <img src={promoItem1} alt="promoIcon1"
                            className="promo-icon" />
                        <div className="promo-item-text">
                            <h3 className="promo-item-title">Free Shipping</h3>
                            <p className="promo-item-desc">Buy product over $100 and get free home delivery offer</p>
                        </div>
                    </div>
                    <div className="promo-item">
                        <img src={promoItem2} alt="promoIcon2"
                            className="promo-icon" />
                        <div className="promo-item-text">
                            <h3 className="promo-item-title">Easy Return Policy</h3>
                            <p className="promo-item-desc">Provide 30 day easy Return policy for all of our customer</p>
                        </div>
                    </div>
                    <div className="promo-item">
                        <img src={promoItem3} alt="promoIcon3"
                            className="promo-icon" />
                        <div className="promo-item-text">
                            <h3 className="promo-item-title">Secure Payment</h3>
                            <p className="promo-item-desc">We conform you that payment system are totally secure</p>
                        </div>
                    </div>
                    <div className="promo-item">
                        <img src={promoItem4} alt="promoIcon4"
                            className="promo-icon" />
                        <div className="promo-item-text">
                            <h3 className="promo-item-title">Best Quality</h3>
                            <p className="promo-item-desc">We never compromize about our quality and always concern</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="promo-right">
                <div className="promo-image">
                    <img src={require('../../assets/images/aboutImages/aboutPromo.jpg')} alt="aboutPromo" className="aboutPromo" />
                </div>
                <div className="promo-content">
                    <h5 className="promo-advertise">MEGA SALE
                        <span className="promo-advertise-emphasis">UPTO 75%</span>
                    </h5>
                    <h3 className="promo-title">Fancy Sofa set</h3>
                    <p className="promo-text">
                        Lorem ipsum dolor sit amet, consectetur scelerisque a tincidunt urna quam
                    </p>
                    <button className="promo-btn">shop now</button>
                </div>
            </div>
        </div>
    )
}
export default PromoComponent;