import Head from '../../PDF file/header';
import ViewInfo from '../../PDF file/viewInfo';
import CustInfo from '../../PDF file/cusInfo';
import Foot1 from '../../PDF file/footer';
import Heading from '../../PDF file/heading';
import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import localHost from '../../../localHost';

function PerCarPDF() {
    const styles = StyleSheet.create({
        box: {
            border: '5px solid black',
            padding: 20
        }
    });

    const [data, setData] = useState({})
    const [data1, setData1] = useState([])
    useEffect(() => {
        axios.get(`${localHost}carPost`, {
        }).then(res => setData1(res.data.message))
        setData(JSON.parse(localStorage.getItem("FormData")))
    }, [])
    const elements = data1.map((value, i) =>
        <ViewInfo key={i}
            imgSrc={value.image_url}
            heading={value.company}
            tracker={15000}
            rupees={`Without Tracker Amount: ${value.carAmount}`}
            rate={value.percentage}
            withTracker={(value.carAmount+15000)}
        />)
    return (
        <Document>
            <Page size="A4" style={styles.box} wrap>

                <Head />
                <CustInfo name={data.fullName} heading={"Personal Car Details"} email={data.email} phone={data.phone} hospLimit={data.insurancePrize} cName={data.carName} cModel={data.carModel} cYear={data.carYear} cPrize={data.carPrize} />
                <Heading head={"Get Best Personal Car Takaful & Insurance Deals in Pakistan"} head1={"Protect your Car & loved ones' future with reliable Car insurance plans"} />
                {elements}
                <Foot1 policy={"Personal Car Takaful & Insurance"} />
            </Page>
        </Document>
    )
}
export default PerCarPDF