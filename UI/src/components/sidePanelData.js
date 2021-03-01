import React from 'react'
import logo from "./photo.svg"
import "./MyStyles.css"

function SidePanelData(){
    const dataRender = <img src={logo} className=" set-dim-side img-fluid" alt="Not found" /> ; 
    return(
        <div>
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

export default SidePanelData