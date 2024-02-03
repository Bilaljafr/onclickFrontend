import pic from '../../assets/Plans/jubilee-general.jpeg'
import { NavLink } from 'react-router-dom';
import CustomizedSwitches from './switchBtn';
import { useState } from 'react';
import { MyContext } from '../myContext';
import { Nav } from 'react-bootstrap';
function Card1({ heading, hospital, room_ent, pre_post_hosp, romm_board, critical_ill, increase_lim, rupees, img, tracker, para, rate , data, type}) {
    const [state, setState] = useState(false)

    return (
        <div className='card1-plan'>
            <div className="card bg-base-100 shadow-xl" style={{ padding: "0rem 2rem" }}>
                <div className='card1-plan-text'>
                    <div>
                        <img className='img-plan' src={img} alt="" />
                    </div>
                    <div style={{ margin: "1.4rem 0", textAlign: "center" }}>
                        <h1 style={{ fontSize: "1.5rem", fontWeight: "500" }}>{heading} -WTO</h1>
                        <p style={{ fontWeight: "500", margin: "0.1rem 0" }}>{para}</p>
                        <MyContext.Provider value={{ state, setState }}>
                        <div className='card1-plan-div'>
                            {
                                hospital ?
                                    <div>
                                        <p>Hospital limit</p>
                                        <p>{hospital} -/ person</p>
                                    </div> : null
                            }
                            {
                                room_ent ?
                                    <div>
                                        <p>Room entitlement</p>
                                        <p>{room_ent} -/ person</p>
                                    </div> : null
                            }
                            {
                                pre_post_hosp ?
                                    <div>
                                        <p>Pre & Post Hospitalization Benefits</p>
                                        <p>{pre_post_hosp} -/ person</p>
                                    </div> : null
                            }

                            {
                                romm_board ?
                                    <div>
                                        <p>Room & Board</p>
                                        <p>{romm_board} -/ person</p>
                                    </div> : null
                            }
                            {
                                critical_ill ?
                                    <div>
                                        <p>Critical illness limit</p>
                                        <p>{critical_ill} -/ person</p>
                                    </div> : null

                            }
                            {
                                increase_lim ?
                                    <div>
                                        <p>Increase in limit (dueToAccidents)</p>
                                        <p>{increase_lim} -/ person</p>
                                    </div> : null
                            }
                            {
                                rate ?
                                <div>
                                    <p>Rate</p>
                                    <p>{rate}%</p>
                                </div>
                                : null
                            }
                            {
                                tracker ?
                                <div>
                                    <p>Add Tracker</p>
                                    <p><CustomizedSwitches label={tracker}/></p>
                                </div>
                                : null
                            }
                            
                        </div>
                        </MyContext.Provider>
                    </div>
                    <div>
                        <p style={{ textAlign: 'center', fontWeight: "500", fontSize: "2rem", margin: '2rem 0 1rem 0' }}>{
                        state ?
                        rupees+tracker : 
                        rupees
                        }-/PKR</p>
                        <div className='buy-now-btn'>
                            <NavLink to="/insurance/plan/checkout/:id" state={{ from:{... data, state, tracker, type}}} ><button>Buy Now</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1