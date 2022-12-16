import meal1 from "../Images/menu1.jpg";
import meal2 from "../Images/menu2.jpg";
import meal3 from "../Images/menu3.jpg";

const Blog = () => {
    return (
        <div className='blog-section'>
            <h4>Blog</h4>
            <h3>words from our food lovers</h3>
            <div className="blog-box">
                <div className="blog">
                    <img src={meal1} alt="meal" />
                    <h3>Cooking Dining Experience</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                    <a href="#3">Read more</a>
                </div>
                <div className="blog">
                    <h3>Cooking Dining Experience</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                    <a href="#4">Read more</a>
                    <img src={meal2} alt="meal" />
                </div>
                <div className="blog">
                    <img src={meal3} alt="meal" />
                    <h3>Cooking Dining Experience</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                    <a href="#5">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default Blog