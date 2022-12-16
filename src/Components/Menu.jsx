import meal1 from "../Images/menu1.jpg";
import meal2 from "../Images/menu2.jpg";
import meal3 from "../Images/menu3.jpg";
import meal4 from "../Images/menu4.jpg";
import meal5 from "../Images/menu5.jpg";

const Menu = () => {
    return (
        <div className='menu-section'>
            <h4>Straight From Kitchen</h4>
            <h3>Our Menu</h3>

            <div className="menu-box" id="menu">
                <div>
                    <div className="meal">
                        <img src={meal1} alt='food'/>
                        <div className="meal-title">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <p>
                            Rs 190
                        </p>
                    </div>

                    <div className="meal">
                        <img src={meal2} alt='food'/>
                        <div className="meal-title">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <p>
                            Rs 300
                        </p>
                    </div>

                    <div className="meal">
                        <img src={meal3} alt='food'/>
                        <div className="meal-title">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <p>
                            Rs 160
                        </p>
                    </div>

                    <div className="meal">
                        <img src={meal4} alt='food'/>
                        <div className="meal-title">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <p>
                            Rs 215
                        </p>
                    </div>

                    <div className="meal">
                        <img src={meal5} alt='food'/>
                        <div className="meal-title">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <p>
                            Rs 90
                        </p>
                    </div>
                </div>

                <div>
                <div className="meal">
                        <img src={meal5} alt='food'/>
                        <div className="meal-title">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <p>
                            Rs 100
                        </p>
                    </div>

                    <div className="meal">
                        <img src={meal4} alt='food'/>
                        <div className="meal-title">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <p>
                            Rs 222
                        </p>
                    </div>

                    <div className="meal">
                        <img src={meal3} alt='food'/>
                        <div className="meal-title">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <p>
                            Rs 380
                        </p>
                    </div>

                    <div className="meal">
                        <img src={meal2} alt='food'/>
                        <div className="meal-title">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <p>
                            Rs 150
                        </p>
                    </div>

                    <div className="meal">
                        <img src={meal1} alt='food'/>
                        <div className="meal-title">
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <p>Lorem ipsum dolor sit amet</p>
                        </div>
                        <p>
                            Rs 200
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu