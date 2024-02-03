import Head from "../../../PDF file/header"
import Foot1 from "../../../PDF file/footer"
import CustInfo from "../../../PDF file/cusInfo"
import ViewInfo from "../../../PDF file/viewInfo"
import { Document, Page, StyleSheet} from '@react-pdf/renderer';
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import Heading from "../../../PDF file/heading"
import localHost from "../../../../localHost";

function MyselfPDF(){
    const styles = StyleSheet.create({
        box: {
          border: '5px solid black',
          padding: 20
        }
      });
    
    const [data, setData] = useState({})
    const [data1, setData1] = useState([])
    useEffect(() => {
        axios.get(`${localHost}myselfInsurance`, {
        }).then(res => setData1(res.data.message))
        setData(JSON.parse(localStorage.getItem("FormData")))
    }, [])
    const elements =data1.map((value,i)=>
    <ViewInfo key={i}
    imgSrc={value.entity.img}
     heading={value.companyName}
     hosipital={value.entity.hospital_limit}
     room_ent={value.entity.room_entitlement}
     pre_post_hosp={value.entity.pre_post_hospitalization_benefits}
     romm_board={value.entity.room_board}
     increase_lim={value.entity.Increase_limit}
     critical_ill={value.entity.Critical_illness_limit}
     rupees={`Amount: ${value.ageAmount}`}
 />)
    return(
        <Document>
        <Page size="A4" style={styles.box} wrap>

          <Head />
          <CustInfo name={data.fullName} heading={"Customer Details"} email={data.email} age={`User Age: ${data.age}`} phone={data.phone} hospLimit={data.insurancePrize}/>
          <Heading head={"Compare and Get Best Health Takaful & Insurance Deals in Pakistan"} head1={"Protect your & loved ones' future with reliable life insurance plans"}/>
          {elements}
          <Foot1 policy={"Health Takaful & Insurance"}/>
        </Page>
      </Document>  
    )
}
export default MyselfPDF