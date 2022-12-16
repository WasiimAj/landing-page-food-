import logo from "../Images/Logo.png";

const Footer = () => {
    return (
        <>
        <footer className="footer"> 

            <div>
                <div className="logo-box">
                    <img src={logo} alt="logo" />
                    <h3>Golden View Dine </h3>
                </div> 
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                </p>
                <div className="social">
                    <p>
                        <img src="https://cdn-icons-png.flaticon.com/512/725/725339.png" alt="instagram" />
                    </p>
                    <p>
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="" />
                    </p>
                    <p>
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png" alt="" />
                    </p>
                </div>
            </div>
            <div>
                <h3>Other Links </h3>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Tersms & Conditions</li>
                    <li>Blogs</li>
                    <li>Our Team</li>
                    <li>Our Kitchen</li>
                </ul>
            </div>
            <div>
                <h3>Contact Us</h3>

                <div className="contact">
                    <p>
                        📧 Gogreendineservice@gmail.com
                    </p>
                    <p>
                        🗺️ AZ complex bylane3 Mandari Rd Mumbai 1100867
                    </p>
                    <p>
                        📞 +1800 287 256
                    </p>
                </div>

            </div>
        </footer>

        <div className="email">
            <p>📧 Subscribe to our Newsletter</p>
            <input type="text" placeholder="Your Email id" />
            <button>Subscribe</button>
        </div>

        <div className="copyright">
            <p>
                Copyright © 2022 Golden Dine website <br />
                All rights reserved
            </p>
        </div>


        </>
    )
}

export default Footer