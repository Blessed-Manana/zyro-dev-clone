import '../navbar/Navbar.css'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(scrollY)

    return (
        <nav style={scrollY > 5 ? { backgroundColor: '#ffff' } : { color: '#fff', backgroundColor: '#f5526e', boxShadow: 'none' }}>
            <div className="left">
                <div className='logo'>

                </div>
                <div className="options">
                    <div className="yZyro option">
                        <button style={scrollY > 5 ? { color: '#000' } : { color: '#fff' }}>Why Zyro</button>
                    </div>
                    <div className="products option">
                        <button style={scrollY > 5 ? { color: '#000' } : { color: '#fff' }}>Products</button>

                    </div>
                    <div className="resource option">
                        <button style={scrollY > 5 ? { color: '#000' } : { color: '#fff' }}>Resource</button>
                    </div>
                    <div className="templates option">
                        <button style={scrollY > 5 ? { color: '#000' } : { color: '#fff' }}>WebPage Templates</button>
                    </div>
                    <div className="price option">
                        <button style={scrollY > 5 ? { color: '#000' } : { color: '#fff' }}>Price</button>
                    </div>
                </div>
            </div>
            <div className="right">
                <select name="EN" id="" style={scrollY > 5 ? { color: '#000' } : { color: '#fff' }}>
                    <option value="">EN</option>
                    <option value="">home</option>
                    <option value="">home</option>
                </select>
                <a href="/" style={scrollY > 5 ? { color: '#000' } : { color: '#fff' }}>Sign In</a>
                <button style={scrollY > 5 ? { color: '#000', borderColor: '#000' } : { color: '#fff' }}>Start for free</button>
            </div>
        </nav>
    );
}

export default Navbar; 