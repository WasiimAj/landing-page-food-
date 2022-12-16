import cooking from "../Images/cooker.jpg";

const Cooking = () => {
    return (
        <div className="about-section">
            <div className='about-contnet'>
                <div className="about-text">
                    <h4>Cooking ingredients</h4>
                    <h3>
                        What goes in
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
                <img className="borderd" src={cooking} alt="about-img-1" />
            </div>
        </div>
    )
}

export default Cooking