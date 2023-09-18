import '../websiteBuildplan/WebsiteBuildplan.css'

const WebsiteBuildplan = () => {
    return (
        <div className="websiteBuildplan">
            <h2>Choose your website builder plan</h2>
            <div className="guarantee-text">
                <p>30-day <strong>money-back guarantee</strong> with every Zyro plan.</p>
            </div>
            <div className="planContainer">
                <div className="planBlock">
                    <h3>Website</h3>
                    <p className='discrip'>Create a professional portfolio, blog, or personal website.</p>
                    <p className="price"><span className='strikPrice'>$11.99</span> <span className='offpercentage'>78% off</span></p>
                    <p className="from">From:</p>
                    <h1 className='pricePm'>$2.59 <span className='mo'>/mo</span></h1>
                    <span className='vat'>VAT may apply.</span>
                    <button>Select</button>
                    <ul>
                        <li> Free email for 3 months </li>
                        <li> Free domain for 1 year </li>
                        <li> 24/7 Customer support </li>
                        <li> Marketing integrations </li>
                    </ul>
                </div>
                <div className="planBlock">
                    <h3>Business</h3>
                    <p className='discrip'>Start selling instantly with eCommerce essentials.</p>
                    <p className="price"><span className='strikPrice'>$14.99</span> <span className='offpercentage'>76% off</span></p>
                    <p className="from">From:</p>
                    <h1 className='pricePm'>$2.59 <span className='mo'>/mo</span></h1>
                    <span className='vat'>VAT may apply.</span>
                    <button>Select</button>
                    <ul>
                        <li> Free email for 3 months </li>
                        <li> Free domain for 1 year </li>
                        <li> 24/7 Customer support </li>
                        <li> Marketing integrations </li>
                        <li> Sell up to 500 products </li>
                    </ul>
                </div>
            </div>
            <h3>+ See all features</h3>
        </div>
    );
}

export default WebsiteBuildplan;