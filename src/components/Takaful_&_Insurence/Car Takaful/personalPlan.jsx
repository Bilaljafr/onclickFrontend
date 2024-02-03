import Card from "../../Plans/card";
import Card1 from "../../Plans/card1";
import Sec1 from "../../Plans/section1";
import { useEffect, useState, useContext } from 'react'
import { MyContext } from "../../myContext";
import axios from "axios";
import PerCarPDF from "./PerCarPDF";
import localHost from "../../../localHost";

function PersCarPlan() {
    const [state, setState] = useState(false);
    const [data, setData] = useState({})
    const [data1, setData1] = useState([])
    console.log(state)
    useEffect(() => {
        axios.get(`${localHost}carPost`, {

        }).then(res => setData1(res.data.message))
        setData(JSON.parse(localStorage.getItem("FormData")))
    }, [])
    console.log(data1)
    const elements = data1.map((value, i) =>
            <Card1 key={value}
                img={value.image_url}
                para={"Personal Car Takaful & Insurance"}
                heading={value.company}
                tracker={15000}
                rupees={value.carAmount}
                rate={value.percentage}
                data={value}
                type={'car'}
            />)

    return (
        <div>
            <Sec1 head={"Get Best Personal Car Takaful & Insurance Deals in Pakistan"}
            para={"Protect your Car & loved ones' future with reliable Car insurance plans"}/>
            <Card pdf={<PerCarPDF/>} link={'bike'} carName={data.carName} heading={"Personal Car Details"} carModel={data.carModel} carYear={data.carYear} carPrize={data.carPrize} name={data.fullName} email={data.email} phone={data.phone} prize={data.insurancePrize} />
            {elements}
        </div>
    )
}

export default PersCarPlan