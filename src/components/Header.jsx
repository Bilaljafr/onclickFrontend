import logo from '../assets/logo.png';
import email from '../assets/emial.png';
import phone from '../assets/phone.png';
import Navbar from './navbar';


function Header() {
    return (
        <div>
            <div className='navbar-header'>
                <div>
                    <img src={logo} />
                </div>
                <div className='sub-navbar-header'>
                    <div className='sub-sub-navbar-header'>
                        <div>
                            <img src={email} style={{ width: '2.5rem', margin: '1.5rem 0.5rem' }} />
                        </div>
                        <div>
                            <h3 style={{margin:'1rem 0', fontSize:'1.3rem'}}>Email us</h3>
                            <p style={{ marginTop: '-0.9rem' }}>info@theoneclickdigital.com</p>
                        </div>
                    </div>
                    <div className='sub-sub-navbar-header'>
                        <div>
                            <img src={phone} style={{ width: '2.5rem', margin: '1.5rem 0.5rem' }} />
                        </div>
                        <div >
                            <h3 style={{margin:'1rem 0', fontSize:'1.3rem'}}>UAN number</h3>
                            <p style={{ marginTop: '-0.9rem' }}>+92 331 111 0375</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    )
}

export default Header;