import React from 'react';
import { Card } from 'antd';
import logoW from '../assets/oneclick-white-logo.png';
import seal from '../assets//seal-of-registrar-of-company.png'
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import { WhatsAppOutlined, FacebookOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';
import bank from '../assets//bankalfalah.webp'

function Footer() {
    return (
        <div>
            <div className='footer-bg'>
                <div className="Footer">
                    <div className="footer-card">
                        <Card
                            bordered={false}
                            style={{
                                backgroundColor: '#10212b',
                                color: 'white',
                            }}
                            className='card1'
                        >
                            <img src={logoW} style={{ width: "7rem", margin: '1rem 0' }} />
                            <p>OneClick Digital offers customized insurance solutions to meet your specific needs, whether it's for your home, car, health, business, or life. We work with you to create a policy that fits your unique situation.</p>
                            <div className='seal'>
                                <p style={{ fontWeight: '600', marginTop: '2rem' }}>Seal of Registrar of Company </p>
                                <img src={seal} style={{ width: "5.5rem", margin: '0 1rem' }} />
                            </div>
                        </Card>
                    </div>
                    <div style={{ color: 'white', letterSpacing: '1px' }}>
                        <h1 style={{ fontSize: '1.8rem'}}>Quick Links</h1>
                        <ul className='footer-list'>
                            <li><a href="/car">Car Insurance</a></li>
                            <li><a href="/bike">Bike Insurance</a></li>
                            <li><a href="/health">Health Insurance</a></li>
                            <li><a href="">Travel Insurance</a></li>
                            <li><a href="/life">Life Insurance</a></li>
                        </ul>
                    </div>
                    <div style={{ color: 'white', letterSpacing: '1px' }}>
                        <h1 style={{ fontSize: '1.8rem' }}>Contact Info</h1>
                        <div className='footer-card' style={{ margin: '1.5rem 0' }}>
                            <NotListedLocationOutlinedIcon className='footer-icon' style={{ fontSize: '4rem' }} />
                            <div style={{ margin: '0 1rem', fontWeight: '600', letterSpacing: '1px' }}>
                                <p className='p1' style={{ marginTop: '6px' }}>R-613, Block 15, Dastagir, FB Area,</p>
                                <p>Karachi - Pakistan</p>
                            </div>
                        </div>
                        <div className='footer-card' style={{ margin: '1.5rem 0' }}>
                            <AlternateEmailOutlinedIcon className='footer-icon' style={{ fontSize: '4rem' }} />
                            <div style={{ margin: '0 1rem', fontWeight: '600', letterSpacing: '1px' }}>
                                <p>info@theoneclickdigital.com</p>
                                <p >+92 319 599 5775</p>
                                <p >+92 319 599 5775</p>
                            </div>
                        </div>
                        <div className='footer-card' style={{ margin: '1.5rem 0' }}>
                            <AddIcCallOutlinedIcon className='footer-icon' style={{ fontSize: '4rem' }} />
                            <div style={{ margin: '0 1rem', fontWeight: '600', letterSpacing: '1px' }}>
                                <p style={{ marginTop: '19px' }}>Mon - Sat (9AM - 6PM)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-payment'>
                    <h1>Payment Method</h1>
                    <div>
                        <img src={bank} style={{ width: '6.5rem', margin: '0.6rem 0' }} />
                        <img src={bank} style={{ width: '6.5rem', margin: '0.6rem 0' }} />
                        <img src={bank} style={{ width: '6.5rem', margin: '0.6rem 0' }} />
                        <img src={bank} style={{ width: '6.5rem', margin: '0.6rem 0' }} />
                    </div>
                </div>
                <div className='socialMedia'>
                    <a href='https://web.whatsapp.com/send?phone=923195995775' target='_blank'><WhatsAppOutlined /></a>
                    <a href='https://www.facebook.com/oneclickdigital786' target='_blank'><FacebookOutlined /></a>
                    <a href='https://pk.linkedin.com/company/oneclick-insurance' target='_blank'><LinkedinOutlined /></a>
                    <a href='https://www.theoneclickdigital.com/car-insurance' target='_blank'><InstagramOutlined /></a>
                </div>
                <p style={{textAlign: 'center', color: 'white', fontSize: '1.5rem', fontWeight: '600', margin: '1rem 0'}}>Copyright © 2023 Oneclick Digital.</p>
            </div>
        </div>
    )
}

export default Footer;