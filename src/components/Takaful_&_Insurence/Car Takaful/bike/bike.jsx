import bike from '../../../../assets/Takaful/bike.jpeg';
import income from '../../../../assets/About/income.png';
import Card from 'react-bootstrap/Card';
import bg from '../../../../assets/Takaful/card.jpg'
import Form from './form'
import Collapse from './bikeCollapse';
import best from '../../../../assets/Takaful/best.png'
import claim from '../../../../assets/Takaful/claim.png'
function BIKE() {
    return (
        <div>
            <div className='car-takaful'>
                <div>
                    <p>Get your Motor Bike Insured</p>
                    <h3>From Top Insurance Providers in Pakistan</h3>
                    <img src={bike} style={{width: '25rem'}}/>
                    <div className='car-card-c'>
                    <div>
                        <Card className='car-card'>
                            <Card.Body className='car-card-body'>
                                <img src={best} style={{width: '5rem'}}/>
                                <Card.Text style={{fontSize: '0.9rem', fontWeight: '700'}}>
                                    Best rates guarantee
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>

                        <Card className='car-card'>
                            <Card.Body>
                                <img src={claim} style={{width: '5rem'}}/>
                                <Card.Text style={{fontSize: '0.9rem', fontWeight: '700'}}>
                                Claim assistance complimentary
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='car-card'>
                            <Card.Body>
                                <img src={income} style={{width: '5rem'}}/>
                                <Card.Text className='card-text' style={{fontSize: '0.9rem', fontWeight: '700'}}>
                                Free of cost service
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
                <div>
                    <Form />
                </div>
                            
            </div>
                <div className='card-insurance-header' style={{border: 'none'}}>
                <Card className='card-insurance' style={{border: 'none'}}>
                    <Card.Header className='card-insurance-heading' style={{color: 'white',border:"none"}}>Bike Insurance Plan</Card.Header>
                    <Card.Body>
                        <Card.Text className='card-insurance-text' style={{color: '#00bcf9'}}>
                        Are you ready to hit the open road with peace of mind?
                        </Card.Text>
                        <Card.Text style={{fontWeight: '600'}}>
                        Look no further than OneClick Digital's Bike Insurance Plan. Our comprehensive coverage is tailored to meet all your biking needs, ensuring you're protected every time you rev up your engine.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-insurance' style={{border: 'none', marginTop: '3px'}}>
                    <Card.Header className='card-insurance-heading' style={{color: 'white',border:"none"}}>About Bike Insurance</Card.Header>
                    <Card.Body>
                        <Card.Text className='card-insurance-text' style={{color: '#00bcf9'}}>
                        Biking is not just a means of transportation; it's a passion, a lifestyle!
                        </Card.Text>
                        <Card.Text style={{fontWeight: '600'}}>
                        At OneClick Digital, we understand the thrill and freedom that comes with riding a bike. That's why we offer Bike Insurance that goes beyond just safeguarding your two-wheeler; it safeguards your dreams, your adventures, and your future.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Collapse />
            </div>
        </div>
    )
}

export default BIKE;