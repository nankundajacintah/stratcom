import React from 'react';
import "./SidebarOptions.css";

function SidebarOptions({Icon, title, number, isSelected}) {
    return (
        <div className={`sidebarOptions ${isSelected && 'sidebar--active'}`}>
            <Icon/>
            <h3 style={{ color:"#fff" }}>{title}</h3>
            
            
        </div>
    )
}

export default SidebarOptions