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
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Matureness Benefits</h1>
                            <p style={{ fontWeight: '600' }}>Planning for your future is essential. Our Life Insurance Plan provides matureness benefits, ensuring that you have financial support when you reach a certain age or milestone in your life.</p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Demise Benefits</h1>
                            <p style={{ fontWeight: '600' }}>Life is unpredictable, and it's essential to plan for the unexpected. In the unfortunate event of your demise, our insurance offers financial protection to your beneficiaries, helping them maintain their quality of life.</p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Life Safety
                            </h1>
                            <p style={{ fontWeight: '600' }}>Your safety and well-being matter. We provide coverage for various life safety situations, including accidents and critical illnesses, so you can access the best medical care and recover without financial worries.
                            </p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Tax Reduction Benefits

                            </h1>
                            <p style={{ fontWeight: '600' }}>Save more while securing your future. Our Life Insurance plans come with tax reduction benefits, helping you maximize your savings while ensuring your family's financial security.
                            </p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Loved Ones Protection
                            </h1>
                            <p style={{ fontWeight: '600' }}>Your loved ones are your most valuable asset. With our Life Insurance, you can protect your family's financial well-being, ensuring they have the resources they need to thrive.



                            </p>
                        </CCardBody>
                    </CCard>
                    <CCard className='m-3'>
                        <CCardBody style={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#00bcf9', fontSize: '1.5rem', fontWeight: '600' }}>Investment-Based Goals
                            </h1>
                            <p style={{ fontWeight: '600' }}>Life Insurance can be a tool for achieving your long-term financial goals. Whether it's buying a home, funding your child's education, or planning for retirement, our investment-based options can help you reach your objectives.At OneClick Digital, we believe that Life Insurance should be a foundation for building a secure and prosperous future. Trust us to be your partner in financial protection and investment, and rest assured that your family's future is in safe hands.
                            </p>
                        </CCardBody>
                    </CCard>
                </CCollapse>
            </div>
        </>
    )
}

export default Collapse;