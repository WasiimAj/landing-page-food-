import info1 from '../Images/info1.png';
import info2 from '../Images/info2.png';
import info3 from '../Images/info3.png';

const Info = () => {
    return (
        <div className='info-section'>
            <div>
                <img src={info1} alt='info'/>
                <div>
                    <h1>250+</h1>
                    <p>Delicacy</p>
                </div>
            </div>

            <div>
                <img src={info2} alt='info'/>
                <div>
                    <h1>10+</h1>
                    <p>renowed chefs</p>
                </div>
            </div>

            <div>
                <img src={info3} alt='info'/>
                <div>
                    <h1>30+</h1>
                    <p>Members</p>
                </div>
            </div>
        </div>
    )
}

export default Info