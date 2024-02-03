import Card from "../../../Plans/card";
import Card1 from "../../../Plans/card1";
import Sec1 from "../../../Plans/section1";
import { useEffect, useState, useContext } from 'react'
import { MyContext } from "../../../myContext";
import axios from "axios";
import BikePDF from "./bikePDF";
import localHost from "../../../../localHost";

function BikePlan() {
    const [state, setState] = useState(false);
    const [data, setData] = useState({})
    const [data1, setData1] = useState([])
    console.log(state)
    useEffect(() => {
        axios.get(`${localHost}postBike`, {

        }).then(res => setData1(res.data.message))
        setData(JSON.parse(localStorage.getItem("FormData")))
    }, [])
    console.log(data1)
    const elements = data1.map((value, i) =>
            <Card1 key={i}
                img={value.image_url}
                para={"Bike Takaful & Insurance"}
                heading={value.company}
                tracker={12000}
                rupees={value.bikeAmount}
                rate={value.percentage}
                data={value}
                type={'bike'}
            />)

    return (
        <div>
            <Sec1 head={"Get Best Bike Takaful & Insurance Deals in Pakistan"}
            para={"Protect your Bike & loved ones' future with reliable Car insurance plans"}/>
            <Card pdf={<BikePDF/>} bikeName={data.bikeName} heading={"Bike Details"} bikeModel={data.bikeEngine} bikeYear={data.bikeYear} bikePrize={data.bikePrize} name={data.fullName} email={data.email} phone={data.phone} prize={data.insurancePrize} />
            {elements}
        </div>
    )
}

export default BikePlan;