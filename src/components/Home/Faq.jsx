import React from 'react'
import BasicAccordion from './Accordian'


export default function Faq() {
  return (
    <section className="faq" style={{textAlign:"center", padding:"2rem 0",fontSize:"3rem"}}>

        <h2 className="faq-h1">
            how It works
        </h2>
        <div className="accord-holder">
        <BasicAccordion heading={"lorem"} summary={"knakbfkfkabbefkbbfak"}/>
        <BasicAccordion heading={"lorem"} summary={"knakbfkfkabbefkbbfak"}/>
        <BasicAccordion heading={"lorem"} summary={"knakbfkfkabbefkbbfak"}/>
        <BasicAccordion heading={"lorem"} summary={"knakbfkfkabbefkbbfak"}/>
        </div>
    </section>
  )
}
