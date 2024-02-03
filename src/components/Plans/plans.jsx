import Card from "./card"
import Sec1 from "./section1"
import Card1 from "./card1"
import axios from 'axios'
import { useEffect, useState } from "react"
import localHost from "../../localHost"


function Plans() {
    const [data, setData] = useState({})
    const [data1, setData1] = useState()
    useEffect(() => {
        axios.get(`${localHost}myselfInsurance`, {

        }).then(res => setData1(res.data.message))
        setData(JSON.parse(localStorage.getItem("myselfHealthFormData")))
    },[])
    console.log(data1)
    return (
        <div>
            <Sec1 />
            <Card name={data.fullName} email={data.email} age={data.age} phone={data.phone} prize={data.insurancePrize}/>
            <Card1 />
        </div>
    )
}

export default Plans