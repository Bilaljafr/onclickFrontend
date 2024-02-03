

function Sec1({head, para}){
    return(
        <div className="Plans-Section1">
            <h1 style={{fontWeight: '500', marginBottom: '0.5rem'}}>Compare and <a style={{color: "#00bbf9", fontSize: "2rem"}}>{head}</a></h1>
            <h1 style={{fontWeight: '500'}}>{para}</h1>
        </div>
    )
}

export default Sec1