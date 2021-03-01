import React from 'react'
import "./MyStyles.css"
import share from "./user.svg"
import custIcon from "./customer.svg"
import logo from "./profile.svg"
import Play from "./play.svg"
import Pause from "./pause.svg"
import Phone from "./telephone.svg"
import { useEffect, useState } from "react"

const Detail = (props) => {
    let id=props.tid
    const shareIcon = <img src={share} className=" set-dim " alt="Not found" />;
    const custicon = <img src={custIcon} className=" set-dim " alt="Not found" />;
    const icon = <img src={logo} className=" set-dim-sm " alt="Not found" />;
    const play = <img src={Play} className=" set-dim-sm " alt="Not found" />;
    const pause = <img src={Pause} className=" set-dim-sm " alt="Not found" />;
    const phone = <img src={Phone} className=" set-dim-sm " alt="Not found" />;

    const [data, setData] = useState([])
    const fetchURL = "http://127.0.0.1:5000/ticketamb/"
    const getData = () =>
        fetch(`${fetchURL}${id}/fetch`)
            .then((res) => res.json())

    useEffect(() => {
        getData().then((dt) => setData(dt))
    }, [id])


    return (
        
        <div className="col-md-6 border border-light col-height mt-1">
            {data?.map(datas => (
            <div className="container" key={id}>
            {/* Ticket Details */}
            <div className="row">
                <div className="col-lg-8 mt-3">
                    <text>ID {id} | {datas.message} | Urgent | 0:56 | {datas.ticket_gen_loc}</text>
                </div>
                <div className="col-lg-3 align-center mt-1">
                    <text>{datas.ticket_gen_time}</text>
                </div>
                <div className="col-lg-1 detail-icon mt-1">
                    {shareIcon}
                </div>
            </div>


            {/* Service Point Details */}
            <div className="row mt-5">
                <div className="col-lg-1">
                    {custicon}
                </div>
                <div className="col-lg-11">
                    <div className="row">
                        <div className="col-lg-4">
                            <text>{datas.amb_name}</text>
                        </div>
                        <div className="col-lg-8">
                            <div className="progress progress-bar" role="progressbar" prog-bar aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{datas.ticket_status*25}%</div>
                        </div>
                    </div>
                    <div className="row pick-way">
                        <text>{datas.queue_status}</text>
                    </div>
                </div>


                {/* Calling Details */}
                <div className="row mt-5">
                    <div className="col-lg-1 mt-2">
                        {icon}
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-2 call-bg call-bg-rad-sm align-center">
                                {phone}
                            </div>
                            <div className="col-lg-5 call-bg call-bg-rad-lg align-center">
                                <text className="text-cente">+91-{datas.amb_phone}</text>
                            </div>
                        </div>
                        <div className="row mt-5"></div>
                        <div className="row">
                            <div className="col-lg-2">
                                <div className="row">
                                    {play}
                                </div>
                                <div className="row btn-cent mt-2">
                                    <text>2:02M</text>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="row text-left">
                                    {pause}
                                </div>
                                <div className="row btn-cent mt-2">
                                    <text>2:45M</text>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="row">
                                    {play}
                                </div>
                                <div className="row btn-cent mt-2">
                                    <text>2:02M</text>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="progress progress-bar mt-4" role="progressbar" prog-bar aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="">
                            <button type="button" className="btn btn-danger btn-col rounded mt-4">Next Step</button>
                        </div>
                    </div>
                    <div className="col-lg-1">

                    </div>
                </div>

            </div>
            </div>
            ))}
        </div >
        
    )

}

export default Detail