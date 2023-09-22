import "../promo/Promo.css"

const Promo = () => {
    return ( 
        <div className="promoContainer">
            <div className="promoBlock">
                <h2>Build fast. Grow faster. Load fastest.</h2>
                <p>Get a professional website that loads at lightning speed. Convert more of your website traffic into paying customers and rank higher on search engines. </p>
                <button>START FOR FREE</button>
            </div>
            <div className="promoBlock promoImg">
                <img src="headphones.avif" alt="headphones.avif" />
            </div>
            <div className="promoBlock promoImg">
                <img src="pop-up.avif" alt="pop-up.avif" />
            </div>
            <div className="promoBlock">
                <h2>Customer support. Ready 24/7.</h2>
                <p> Stuck? Not for long. Our live support team can help, no matter the time of day (or night). </p>
                <button>START FOR FREE</button>
            </div>
        </div>

     );
}
 
export default Promo;