import { useEffect, useState } from 'react'
import Card from '../../../Plans/card'
import Card1 from '../../../Plans/card1'
import Sec1 from '../../../Plans/section1'
import axios from 'axios'
import FamilyPDF from './pdfFamily'
import localHost from '../../../../localHost'

function PlansFamily() {
    const [data, setData] = useState({})
    const [data1, setData1] = useState([])
    useEffect(() => {
        axios.get(`${localHost}familyInsurance`, {
        }).then(res => setData1(res.data.message))
        setData(JSON.parse(localStorage.getItem("FormData")))
    }, [])
    console.log(data1)
   const elements =data1.map((value,i)=>
   <Card1 key={i}
    img={value.entity.img}
    para={"Health Takaful & Insurance"}
    heading={value.companyName}
    hospital={value.entity.hospital_limit}
    room_ent={value.entity.room_entitlement}
    pre_post_hosp={value.entity.pre_post_hospitalization_benefits}
    romm_board={value.entity.room_board}
    increase_lim={value.entity.Increase_limit}
    critical_ill={value.entity.Critical_illness_limit}
    rupees={value.totalAmount}
    data={value}
    type={'health'}
/>)
    return (
        <div>
            <Sec1 head={"Get Best Health Takaful & Insurance Deals in Pakistan"} para={"Protect your & loved ones' future with reliable life insurance plans"}/>
            <Card pdf={<FamilyPDF/>} name={data.fullName} heading={"Customer Details"} email={data.email} age={`User Age: ${data.userAge}`} spouseAge={data.spouseAge} childrenAge={data.children_Age?.toString()} phone={data.phone} prize={data.insurancePrize} />
            {elements}
        </div>
    )
}

export default PlansFamily
