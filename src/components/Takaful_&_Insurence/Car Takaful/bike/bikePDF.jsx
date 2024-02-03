import Head from '../../../PDF file/header';
import ViewInfo from '../../../PDF file/viewInfo';
import CustInfo from '../../../PDF file/cusInfo';
import Foot1 from '../../../PDF file/footer';
import Heading from '../../../PDF file/heading';
import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import localHost from '../../../../localHost';

function BikePDF() {
    const styles = StyleSheet.create({
        box: {
            border: '5px solid black',
            padding: 20
        }
    });

    const [data, setData] = useState({})
    const [data1, setData1] = useState([])
    useEffect(() => {
        axios.get(`${localHost}postBike`, {
        }).then(res => setData1(res.data.message))
        setData(JSON.parse(localStorage.getItem("FormData")))
    }, [])
    const elements = data1.map((value, i) =>
        <ViewInfo key={i}
            imgSrc={value.image_url}
            heading={value.company}
            tracker={12000}
            rupees={`Without Tracker Amount: ${value.bikeAmount}`}
            rate={value.percentage}
            withTracker={(value.bikeAmount+12000)}
        />)
    return (
        <Document>
            <Page size="A4" style={styles.box} wrap>

                <Head />
                <CustInfo name={data.fullName} heading={"Bike Details"} email={data.email} phone={data.phone} bName={data.bikeName} bModel={data.bikeEngine} bYear={data.bikeYear} bPrice={data.bikePrize} />
                <Heading head={"Get Best Bike Takaful & Insurance Deals in Pakistan"} head1={"Protect your Car & loved ones' future with reliable Bike insurance plans"} />
                {elements}
                <Foot1 policy={"Bike Takaful & Insurance"} />
            </Page>
        </Document>
    )
}
export default BikePDF