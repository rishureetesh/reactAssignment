import React, { useEffect, useState } from 'react'
import Detail from "./detail"
import logo from "./profile.svg"
import "./MyStyles.css"
import { render } from '@testing-library/react'

function Ticket(props) {
    /*let data = [
        {
            "id": 0,
            "icon": "",
            "message": "Breakdown/Accident",
            "Time": "5:03"
        },
        {
            "id": 15674645,
            "icon": "",
            "message": "Update Number",
            "Time": "5:03"
        },
        {
            "id": 2,
            "icon": "",
            "message": "Come Later",
            "Time": "5:03"
        },
        {
            "id": 3,
            "icon": "",
            "message": "Not Answering DO",
            "Time": "5:03"
        }
    ]*/
    let Time = "0:56";
    const [data, setData] = useState(null)
    const icon = <img src={logo} className=" set-dim " alt="Not found" />;
    const fetchURL = "http://localhost:5000"
    const getData = () =>
        fetch(`${fetchURL}/ticket`)
            .then((res) => res.json())
    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])
    
    return (
        <div className="col-md-3 border border-light col-height">
            {data?.map(datas => (
            <div className=" btn card card-body mt-1" key={datas.ticket_id} onClick={() =>
                props.handleId(datas.ticket_id)
            }>
                <div className="row">
                    <div className="col-lg-2">
                        {icon}
                    </div>
                    <div className="col-lg-7">
                        {datas.message}
                    </div>
                    <div className="col-lg-3">
                        {Time}
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default Ticket