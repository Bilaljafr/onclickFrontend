import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react';

function Collapse() {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CButton className="mr-3 ml-3 mb-3 hovering" style={{ fontSize: '1.5rem', backgroundColor: '#0163ea', width: '95%', padding: '0.5rem', fontWeight: '400', border: 'none', wordSpacing: '4px', letterSpacing: '1px' }} onClick={() => setVisible(!visible)} aria-expanded={visible} aria-controls="collapseWidthExample">{visible? `What We Are Covering In Health And Accident Insurance Plan` : `Click Me`}</CButton>
            <div>
                <CCollapse id="collapseWidthExample" vertical visible={visible}>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Unfortunate Road Accident</h1>
                            <p style={{ fontWeight: '600' }}>Accidents can happen to even the most cautious drivers. Our Car Insurance Plan ensures that you're financially protected in the event of a collision, covering damages to your vehicle and medical expenses.</p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Car Thieving</h1>
                            <p style={{ fontWeight: '600' }}>Car theft is an unfortunate reality. With OneClick Digital Car Insurance, you're covered in case your vehicle is stolen, providing you with the support you need to recover or replace your car.</p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Fire Mishap
                            </h1>
                            <p style={{ fontWeight: '600' }}>In the unfortunate event of a fire damaging your car, our insurance coverage steps in to help you get back on the road promptly.
                            </p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Natural Catastrophe

                            </h1>
                            <p style={{ fontWeight: '600' }}>Mother Nature can be unpredictable. In the event of natural disasters like floods or earthquakes, our Bike Insurance will help you repair or replace your bike, so you can continue your journey.
                            </p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Car Transportation Damages

                            </h1>
                            <p style={{ fontWeight: '600' }}>Accidents during transportation can be a nightmare. If your car sustains damage while being transported, our insurance will cover the necessary repairs or replacement.


                            </p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Rampage and Riots
                            </h1>
                            <p style={{ fontWeight: '600' }}>In times of civil unrest or public disturbances, your car may be at risk. OneClick Digital's Car Insurance provides coverage for damages incurred during such events, allowing you to navigate challenging situations with confidence.Choose OneClick Digital for your Car Insurance needs, and drive with the peace of mind that comes with comprehensive coverage. Your journey begins here.
                            </p>
                        </CCardBody>
                    </CCard>
                </CCollapse>
            </div>
        </>
    )
}

export default Collapse;