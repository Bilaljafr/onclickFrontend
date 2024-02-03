import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png';
import logoW from '../assets/oneclick-white-logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({
            clicked:
                !this.state.clicked
        })
    }
    render() {
        return (
            <div>
                <nav>
                    <img src={logoW} style={{ width: "5.5rem" }} className='bas' />

                    <div>

                        <ul id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}>

                            <img src={logo} style={{ width: "8rem", margin: '1rem auto 4rem auto' }} className='bas' onClick={this.handleClick} />
                            <li><NavLink onClick={this.handleClick} end to='/'>Home</NavLink></li>
                            <i onClick={this.handleClick} style={{position: "absolute", top: "4%",left: "85%", fontSize: "2rem"}} className= 'fas fa-times bas'></i>
                            <li>
                                <a> Takaful & Insurance ▾</a>
                                <ul class="dropdown" style={{ backgroundColor: "white", }}>

                                    <li><NavLink onClick={this.handleClick} end to="/insurance/car" style={{ color: 'black' }}>Car Insurance</NavLink></li>
                                    <li><NavLink onClick={this.handleClick} end to="/insurance/bike" style={{ color: 'black' }}>Bike Insurance</NavLink></li>
                                    <li><NavLink onClick={this.handleClick} end to="/insurance/health" style={{ color: 'black' }}>Health Insurance</NavLink></li>
                                    <li><NavLink onClick={this.handleClick} end to="#" style={{ color: 'black' }}>Travel Insurance</NavLink></li>
                                    <li><NavLink onClick={this.handleClick} end to="/insurance/life" style={{ color: 'black' }}>Life Insurance</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink onClick={this.handleClick} end to='/contact'>Contact Us</NavLink></li>
                            <li><NavLink onClick={this.handleClick} end to='/about'>About Us</NavLink></li>
                            <li><NavLink onClick={this.handleClick} end to='#'>FAQs Us</NavLink></li>
                            <li className='bas'><NavLink onClick={this.handleClick} end to='/signIn'><button>Sign in</button></NavLink></li>
                        </ul>
                    </div>
                    <div className='btn-navbar'>
                        <NavLink onClick={this.handleClick} end to='/signIn'><button>Sign in</button></NavLink>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id='bars' className={this.state.clicked ? null : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;