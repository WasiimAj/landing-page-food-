import offer from "../Images/offer.png";
import theed from "../Images/Confetti.webp";

const Offer = () => {
    return (
        <div className="offer-box">
            <img src={theed} alt="offer" />
            <div>
                <h4>
                    Come join us for a lunch this weekend and enjoy
                </h4>
                <h2>FLAT 10% OFF</h2>
                <button>Book Table</button>
            </div>
            <img src={theed} alt="offer" />
        </div>
    )
}

export default Offer;