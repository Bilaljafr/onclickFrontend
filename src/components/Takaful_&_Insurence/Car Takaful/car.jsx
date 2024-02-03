import car from '../../../assets/Takaful/car.avif'
import income from '../../../assets/About/income.png'
import Card from 'react-bootstrap/Card';
import bg from '../../../assets/Takaful/card.jpg'
import Form from './personal';
import Button from 'react-bootstrap/Button';
import Collapse from './carCollapse';
import best from '../../../assets/Takaful/best.png'
import claim from '../../../assets/Takaful/claim.png'
import Tab from './tab'
function CAR() {
    return (
        <div>
            <div className='car-takaful'>
                <div>
                    <p>Instant Car Insurance Quotes from</p>
                    <h3>Top Insurance Providers in Pakistan</h3>
                    <img src={car} style={{width: '25rem'}}/>
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
                    <Tab />
                </div>
            </div>
            <div className='card-insurance-header'>
                <Card className='card-insurance' style={{border: 'none'}}>
                    <Card.Header className='card-insurance-heading' style={{color: 'white',border:"none"}}>Car Insurance Plan</Card.Header>
                    <Card.Body>
                        <Card.Text className='card-insurance-text' style={{color: '#00bcf9'}}>
                        Welcome to OneClick Digital's Car Insurance Plan
                        </Card.Text>
                        <Card.Text style={{fontWeight: '600'}}>
                        Your ticket to a worry-free journey on the road. Our comprehensive coverage is designed to protect not just your vehicle but also your peace of mind.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-insurance' style={{border: 'none', marginTop: '3px'}}>
                    <Card.Header className='card-insurance-heading' style={{color: 'white',border:"none"}}>About Car Insurance</Card.Header>
                    <Card.Body>
                        <Card.Text className='card-insurance-text' style={{color: '#00bcf9'}}>
                        Car Insurance is a crucial aspect of responsible car ownership
                        </Card.Text>
                        <Card.Text style={{fontWeight: '600'}}>
                        It's a contract between you and the insurer, where you pay a premium, and in return, the insurer provides financial protection against various risks associated with your vehicle.
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

export default CAR;