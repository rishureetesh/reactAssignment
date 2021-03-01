import React, { useState } from 'react'
import Customer from "./customer"
import Detail from './detail'
import Ticket from './ticket'
import Index from './sidePanel'

function Main() {
    const [tid, setId] = useState(null)

    const changeId = (tid) => {
        setId(tid)
    }
    



    return (
        <div className="row shadow rounded">
            <Index />
            <Ticket handleId={(tid) => {
                changeId(tid)
            }} />
            <Detail tid={tid} />
            <Customer tid={tid}/>
        </div>
    )
}

export default Main