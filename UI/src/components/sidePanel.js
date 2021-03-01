import React from 'react'
import "./MyStyles.css"
import logo from "./photo.svg"

function SidePanel(){
    const dataRender = <img src={logo} className=" set-dim-side img-fluid" alt="Not found" /> ;
    return(
        <div className="col-md-1 border-bottom border-light col-height back-col">
            <div className=" card-body d-inline-flex hover-shadow d-inline-flex mt-1 text-center">
                {dataRender}
            </div>
            <div className=" card-body d-inline-flex hover-shadow d-inline-flex mt-1 text-center">
                {dataRender}
            </div> 
            <div className=" card-body d-inline-flex hover-shadow d-inline-flex mt-1 text-center">
                {dataRender}
            </div>
        </div>
    )
}

export default SidePanel