import health from '../../../../assets/Takaful/health.png';
import income from '../../../../assets/About/income.png';
import best from '../../../../assets/Takaful/best.png'
import claim from '../../../../assets/Takaful/claim.png'
import Card from 'react-bootstrap/Card';
import bg from '../../../../assets/Takaful/card.jpg'
import Tab from './tab'
import Collapse from './healthCollapse';

function HEALTH() {
    return (
        <div>
            <div className='car-takaful'>
                <div>
                    <p>Protect your & loved ones' future</p>
                    <h3>with reliable life insurance plans</h3>
                    <img src={health} style={{width: '25rem'}}/>
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
            <div className='card-insurance-header' style={{ border: 'none' }}>
                <Card className='card-insurance' style={{ border: 'none' }}>
                    <Card.Header className='card-insurance-heading' style={{ color: 'white', border: "none" }}>Health And Accident Insurance Plan</Card.Header>
                    <Card.Body>
                        <Card.Text className='card-insurance-text' style={{ color: '#00bcf9' }}>
                        Discover the peace of mind that comes with OneClick Digital's Health and Accident Insurance Plan                        </Card.Text>
                        <Card.Text style={{ fontWeight: '600' }}>
                        We understand that life can be unpredictable, and accidents or health issues can happen when you least expect them. Our comprehensive coverage is here to ensure you and your loved ones are protected in times of need.                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-insurance' style={{ border: 'none', marginTop: '3px' }}>
                    <Card.Header className='card-insurance-heading' style={{ color: 'white', border: "none" }}>About Health And Accident Insurance</Card.Header>
                    <Card.Body>
                        <Card.Text className='card-insurance-text' style={{ color: '#00bcf9' }}>
                        Health and Accident Insurance is a Vital Component of your Financial Security
                        </Card.Text>
                        <Card.Text style={{ fontWeight: '600' }}>
                            At OneClick Digital, we understand the importance of providing for your loved ones, and our Life Insurance is designed to offer peace of mind and financial stability when it's needed the most.
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

export default HEALTH;