import health from '../../../../assets/Takaful/life-insurance.avif';
import income from '../../../../assets/About/income.png';
import best from '../../../../assets/Takaful/best.png'
import claim from '../../../../assets/Takaful/claim.png'
import Card from 'react-bootstrap/Card';
import bg from '../../../../assets/Takaful/card.jpg'
import Form from './form'
import Collapse from './lifeCollapse';

function LIFE() {
    return (
        <div>
            <div className='car-takaful'>
                <div>
                    <p>Protect your & loved ones' future</p>
                    <h3>with reliable life insurance plans</h3>
                    <img src={health} style={{width: '35rem'}}/>
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
                    <Card.Header className='card-insurance-heading' style={{color: 'white',border:"none"}}>Life Insurance Plan</Card.Header>
                    <Card.Body>
                        <Card.Text className='card-insurance-text' style={{color: '#00bcf9'}}>
                        Welcome to OneClick Digital's Life Insurance Plan
                        </Card.Text>
                        <Card.Text style={{fontWeight: '600'}}>
                        Where we make your future financial security our top priority. Life is full of uncertainties, but with our comprehensive coverage, you can ensure that your loved ones are protected and financially secure even in your absence.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='card-insurance' style={{border: 'none', marginTop: '3px'}}>
                    <Card.Header className='card-insurance-heading' style={{color: 'white',border:"none"}}>About Life Insurance</Card.Header>
                    <Card.Body>
                        <Card.Text className='card-insurance-text' style={{color: '#00bcf9'}}>
                        Life Insurance is more than just a policy; it's a promise to safeguard your family's future
                        </Card.Text>
                        <Card.Text style={{fontWeight: '600'}}>
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

export default LIFE;