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
                            <p style={{ fontWeight: '600' }}>Accidents can happen when you least expect them. Whether it's a minor fender-bender or a major collision, our Bike Insurance provides financial support to cover damages, medical expenses, and more.</p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Bike Theft
</h1>
                            <p style={{ fontWeight: '600' }}>Don't let thieves steal your prized possession. Our Bike Insurance ensures that you're compensated for your bike's full value in case of theft, giving you the peace of mind you deserve.</p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Fire Mishap
                            </h1>
                            <p style={{ fontWeight: '600' }}>Even the most careful riders can't always prevent accidents. If your bike is damaged in a fire, our insurance has you covered, helping you get back on the road quickly.
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
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Bike Transportation Damages

                            </h1>
                            <p style={{ fontWeight: '600' }}>Accidents can happen during transportation too. Whether it's in transit or being towed, if your bike sustains damage, OneClick Digital's Bike Insurance will foot the bill for repairs or replacement.
                            </p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Rampage and Riots
                            </h1>
                            <p style={{ fontWeight: '600' }}>In times of civil unrest or unforeseen public disturbances, your bike can be vulnerable. With our comprehensive coverage, you can rest assured that we'll cover any damages incurred during such incidents.When you choose OneClick Digital, you're not just getting Bike Insurance; you're getting peace of mind on two wheels. Trust us to protect your passion and keep your biking adventures worry-free. Ride on with confidence!
                            </p>
                        </CCardBody>
                    </CCard>
                </CCollapse>
            </div>
        </>
    )
}

export default Collapse;