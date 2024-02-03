import { PDFDownloadLink } from '@react-pdf/renderer';
import { NavLink, useNavigate } from 'react-router-dom';


function Card({pdf, name, age, spouseAge, childrenAge, phone, prize, email, carName, carModel, carPrize, carYear, bikeName,  bikeModel,  bikePrize,  bikeYear, heading, link}) {
    const navigate = useNavigate();
    return (
        <div className='card-plan'>
            <div className="card bg-base-100 shadow-xl" style={{ padding: "0rem 2rem" }}>
                <div className='card-plan-main'>
                    <div>
                        <h1 style={{ textAlign: "center", fontSize: "2.5rem", margin: "1rem 0", fontWeight: "400", color: "#00bbf9", letterSpacing: "1px" }}>{heading}</h1>
                        <div className='card-plan-text'>
                        {
                                bikeName ? 
                                <p>Bike Name: {bikeName}</p>
                                : null
                            }
                            {
                                bikeModel ? 
                                <p>Bike Model: {bikeModel}</p>
                                : null
                            }
                            {
                                bikeYear ? 
                                <p>Bike Year: {bikeYear}</p>
                                : null
                            }
                            {
                                bikePrize ? 
                                <p>Bike Price: {bikePrize}</p>
                                : null
                            }
                            {
                                carName ? 
                                <p>Car Name: {carName}</p>
                                : null
                            }
                            {
                                carModel ? 
                                <p>Car Model: {carModel}</p>
                                : null
                            }
                            {
                                carYear ? 
                                <p>Car Year: {carYear}</p>
                                : null
                            }
                            {
                                carPrize ? 
                                <p>Car Price: {carPrize}</p>
                                : null
                            }
                            <p>User Name: {name}</p>
                            <p>Email: {email}</p>
                            {
                                age ?
                                <p>{age}</p> :
                                null
                            }
                            {
                                spouseAge ?
                                <p>Spouse Age: {spouseAge}</p> :
                                null
                            }
                            {
                                childrenAge ?
                                <p>Children Age: {childrenAge}</p> :
                                null
                            }
                            <p>Phone: {phone}</p>
                            {
                                prize ? 
                                <p>Hospitalization Limit: {prize}</p>:
                                null
                            }
                            
                        </div>
                    </div>
                    <div>
                    <div className='btn-card'>
                        <button onClick={()=> navigate(-1)}>Edit Details</button>
                    </div>
                    <div className='btn-card'>
                        <PDFDownloadLink document={pdf} fileName='Plan'>
                        {({loading}) => (loading ? <button>Loading Document....</button>: <button>Download Quotes</button>)}
                        </PDFDownloadLink>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card