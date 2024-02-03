import Header from "../Header"
import Button from 'react-bootstrap/Button';
import Form from "./form";
import Reach from "./reach";
import '../../App.css'

function Contact() {
    return (
        <div className="about">
            <div className="reach-us">
                <Reach />
            </div>
            <div className="form">
               <Form/>
            </div>
        </div>
    )
}
export default Contact