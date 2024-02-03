import email from '../../assets/About/email.png'
import call from '../../assets/About/call.png'
import location from '../../assets/About/location.png'

function Reach() {
    return (
        <div className="reach-us">
            <h3>Reach to us</h3>
            <p style={{margin: '1rem 0'}}>We are Pakistan's leading insurance marketplace helping individuals and businesses find the best insurance plan.</p>
            <div className="form-details">
                <img className='background-color' src={location} style={{marginTop:'0.5rem'}}/>
                <div>
                    <h3>Office Address</h3>
                    <p>R-613, Block 15, Dastagir, FB Area, Karachi - Pakistan</p>
                </div>
            </div>
            <div className="form-details">
                <img className='background-color' src={email}/>
                <div>
                    <h3>Email Us</h3>
                    <p>info@theoneclickdigital.com</p>
                </div>
            </div>
            <div className="form-details">
                <img className='background-color' src={call}/>
                <div>
                    <h3>Phone Call</h3>
                    <p>+92 319 599 5775</p>
                </div>
            </div>
        </div>
    )
}
export default Reach