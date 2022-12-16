import about from '../Images/about.png';

const About = () => {
    return (
        <div id="about" className="about-section">
            <div className='about-contnet'>
                <div className="about-text">
                    <h4>About Us</h4>
                    <h3>
                        Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. 
                        Quisque commodo mattis ornare a nec odio. 
                        Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. 
                        Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. 
                        Imperdiet aliquam quam mauris semper suscipit. 
                        Molestie maecenas interdum pharetra id velit sed nec.
                        tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.
                    </p>
                    <button>Read More</button>
                </div>
                <img src={about} alt="about-img-1" />
            </div>
        </div>
    )
}

export default About