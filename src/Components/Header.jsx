import './style.css';
import logo from "../Images/Logo.png";
import book from "../Images/Hero book.png";

const Header = () => {
    return (
        <>
        <div className="overlay">
            <div className='header'>
                <img src={logo} alt="logo" />
                <div className="linkes">
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#special">Special</a>
                    <a href="#menu">Menu</a>
                    <a href="#blogs">Blogs</a>
                    <a href="#search">🔍</a>
                </div>
                <img src={book} alt="logo" />
            </div>
            <div className='main-image'></div>
            <div className='main-text'>
                <h3>Welcome To Golden View Dine</h3>
                <p>Explore the authentic vegan dishes with your friends and family</p>
                <button>Read more</button>
            </div>
        </div>

        </>
    )
}

export default Header;