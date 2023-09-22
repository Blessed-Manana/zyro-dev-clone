import '../sellOnline/SellOnline.css'
import {FaRegClock} from "react-icons/fa"
import {LuCheckCircle} from "react-icons/lu"
import {AiOutlineStock} from "react-icons/ai"
import {FiCreditCard} from "react-icons/fi"


const SellOnline = () => {
    return ( 
        <div className="sellOnline">
            <h2> Sell online with no hidden fees </h2>
            <p>Zyro's powerful eCommerce builder has everything you need to start, manage and grow your business online without taking a cut of your profits. </p>
            <div className="sellOnlineContainer">
                <div className="sellOnlineBoxes">
                    <div className="sellOnlineBlock">
                        <div className="sellOnlineicon">
                            <FaRegClock style={{width:"20px", height: "26px", color:"#ee2c60"}}/>
                        </div>
                        <div className="sellOnlineText">
                            <h3>SET UP IN MINUTES</h3>
                            <p>Use our all-in-one eCommerce platform to build your shop and start selling online today.</p>
                        </div>
                    </div>
                    <div className="sellOnlineBlock">
                        <div className="sellOnlineicon">
                            <LuCheckCircle style={{width:"20px", height: "26px", color:"#ee2c60"}}/>
                        </div>
                        <div className="sellOnlineText">
                            <h3>MANAGEMENT MADE EASY</h3>
                            <p>Whether it's inventory, shipping, or even taxes, our automatic tools will do the hard work for you.</p>
                        </div>
                    </div>
                    <div className="sellOnlineBlock">
                        <div className="sellOnlineicon">
                            <AiOutlineStock style={{width:"20px", height: "26px", color:"#ee2c60"}}/>
                        </div>
                        <div className="sellOnlineText">
                            <h3>GROW YOUR BUSINESS</h3>
                            <p>Unleash the power of our AI tools and third party marketing integrations to scale your online business.</p>
                        </div>
                    </div>
                    <div className="sellOnlineBlock">
                        <div className="sellOnlineicon">
                            <FiCreditCard style={{width:"20px", height: "26px", color:"#ee2c60"}}/>
                        </div>
                        <div className="sellOnlineText">
                            <h3>Get paid instantly</h3>
                            <p>Accept credit and debit card payments in over 40 countries with payment methods such as Google Pay, Apple Pay and many others.</p>
                        </div>
                    </div>
                    <button>START FOR FREE</button>
                </div>
                <div className="sellOnlineBoxes">
                    <img src="shopping-cart.avif" alt="shopping-cart.avif" />
                </div>
            </div>
        </div>
    );
}

export default SellOnline;