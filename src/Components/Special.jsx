import food1 from '../Images/food1.png';
import food2 from '../Images/food2.png';
import food3 from '../Images/food3.png';


const Special = () => {
    return (
        <div className="special-section" id='special'>
            <h4>Special</h4>
            <h3>What makes us special</h3>
            <div className="special-service-box">
                <div>
                    <img src={food1} alt="food1" />
                    <h3>Fresh food</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. 
                    </p>
                </div>
                <div>
                    <img src={food2} alt="food1" />
                    <h3>Fresh food</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. 
                    </p>
                </div>
                <div>
                    <img src={food3} alt="food1" />
                    <h3>Fresh food</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. 
                    </p>
                </div>
            </div>
        </div>
    )
    }

export default Special;