import React from 'react'
import './App.css';

const SidebarRow = ({ selected, title, Icon }) => {
    return (
        <div className={
            `sidebarRow ${selected && "selected"}`
        }>

            <Icon className="sidebarRow__icons"/>
            <h2 className="sidebarRow__title">
                {title}
            </h2>

        </div>
    )
}

export default SidebarRow
