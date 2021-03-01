import React from 'react'
import "./MyStyles.css"
import Phone from "./cust-phone.svg"
import logo from "./profile.svg"
import Car from "./car.svg"
import brokenLogo from "./photo.svg"
import { useEffect, useState } from 'react'

function Customer(props) {
    const phone = <img src={Phone} className=" set-dim-sm " alt="Not found" />;
    const icon = <img src={logo} className=" set-dim " alt="Not found" />;
    const car = <img src={Car} className=" set-dim " alt="Not found" />;
    const brokenImage = <img src={brokenLogo} className=" set-dim img-fluid" alt="Not found" />;
    
    let id=props.tid
    const [data, setData] = useState([])
    const fetchURL = "http://127.0.0.1:5000/customer/"
    const getData = () =>
        fetch(`${fetchURL}${id}`)
            .then((res) => res.json())
    useEffect(() => {
        getData().then((dt) => setData(dt))
    }, [id])


    return (
        <div className="col-md-2 border border-light col-height back">
            {data?.map(datas => (
                
            <div className="container">
            {/* Customer Details */}
            <div className="row">
                <div className="row">
                    <div className="col-lg-7 font-check mt-1">
                        Customer details
                    </div>
                    <div className="col-lg-2 mt-1">
                        {phone}
                    </div>
                    <div className="col-lg-2 mt-1">
                        {phone}
                    </div>
                </div>

                {/* Customer Profile */}
                <div className="row mt-4">
                    <div className="col-lg-3">
                        {icon}
                    </div>
                    <div className="col-lg-9">
                        <text className=" font-check-data">{datas.cust_name}</text>
                    </div>
                </div>

                {/* Time and Address */}
                <div className="row mt-4">
                    <div className="col-lg-3">
                        {brokenImage}
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-10 font-check set-pad"><text>Time & Address</text></div>
                        </div>
                        <div className="row">
                            <div className="min-size"><text>Slot Time  {datas.slot}</text></div>
                        </div>
                    </div>
                </div>

                {/* ETA Details */}
                <div className="row">
                    <div className="row mt-4">
                        <div className="col-lg-12 font-check">
                            <text>ETA - 9:56 AM (4.6 kms)</text>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <text className="min-size">{datas.source_address}</text>
                        </div>
                        <div className="col-lg-6">
                            <text className="min-size">{datas.dest_address}</text>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Network Partner Details */}

            <div className="row mt-5">
                <div className="row mt-4">
                    <div className="col-lg-12 font-check mt-1">
                        Network Partner details
                    </div>
                </div>
            </div>
            
            {/* Company Details */}
            
            <div className="row mt-4">
                <div className="col-lg-3">
                    {car}
                </div>
                <div className="col-lg-9">
                    <text className=" font-check-data">{datas.np_name}</text>
                </div>
            </div>
            
            
            {/* Service Person Details */}
            <div className="row mt-4">
                <div className="col-lg-2">
                    {icon}
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <text className="ser-det">Mr Salazar</text>
                    </div>
                    <div className="row mt-1">
                        <text className=" ser-det ser-det-sm">Service Advisor</text>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="row">
                        <div className="col-lg-4">
                            {phone}
                        </div>
                        <div className="col-lg-4">
                            {phone}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-2">
                    {icon}
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <text className="ser-det">Mr Salazar</text>
                    </div>
                    <div className="row mt-1">
                        <text className=" ser-det ser-det-sm">CRE</text>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="row">
                        <div className="col-lg-4">
                            {phone}
                        </div>
                        <div className="col-lg-4">
                            {phone}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-2">
                    {icon}
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <text className="ser-det">Mr Salazar</text>
                    </div>
                    <div className="row mt-1">
                        <text className=" ser-det ser-det-sm">Account Manager</text>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="row">
                        <div className="col-lg-4">
                            {phone}
                        </div>
                        <div className="col-lg-4">
                            {phone}
                        </div>
                    </div>
                </div>
            </div>
            </div>
            ))}
        </div>
    )
}

export default Customer