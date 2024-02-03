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
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Pre-Hospitalization Expenses</h1>
                            <p style={{ fontWeight: '600' }}>We understand that medical care often begins before you're admitted to the hospital. Our insurance covers the expenses incurred during the crucial pre-hospitalization period, ensuring that you receive proper care from the very beginning.</p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Post-Hospitalization Expenses</h1>
                            <p style={{ fontWeight: '600' }}>Recovery is an essential phase of any medical journey. Our coverage extends to post-hospitalization expenses, including follow-up visits, medications, and rehabilitation services, so you can fully recover without worrying about the costs.</p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Inpatient Care and Treatment
                            </h1>
                            <p style={{ fontWeight: '600' }}>Our insurance plan covers the costs associated with inpatient care, including room charges, surgical procedures, diagnostic tests, and doctor's fees. You can focus on your recovery while we take care of the bills.
                            </p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Emergency Medical


                            </h1>
                            <p style={{ fontWeight: '600' }}>Life is unpredictable, and medical emergencies can happen anytime, anywhere. With OneClick Digital's Health and Accident Insurance, you're covered for emergency medical expenses, whether it's a sudden illness or accident.


                            </p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Accidental Emergencies

                            </h1>
                            <p style={{ fontWeight: '600' }}>Accidents can disrupt your life in an instant. Our insurance plan provides financial support in case of accidental injuries, helping you access the best medical care and recover swiftly.





                            </p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Ambulance Expenses

                            </h1>
                            <p style={{ fontWeight: '600' }}>In emergencies, swift transportation can make all the difference. We cover ambulance expenses, ensuring that you reach the hospital in a timely manner, no matter where you are.With OneClick Digital's Health and Accident Insurance, you can focus on your well-being and that of your loved ones, knowing that you have a reliable partner by your side. Your health and peace of mind are our top priorities
                            </p>
                        </CCardBody>
                    </CCard>
                </CCollapse>
            </div>
        </>
    )
}

export default Collapse;