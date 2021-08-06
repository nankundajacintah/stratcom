import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add"
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import NearMeIcon from '@material-ui/icons/NearMe';
import DuoIcon from '@material-ui/icons/Duo';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import SidebarOptions from "./SidebarOptions/SidebarOptions"
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EventIcon from '@material-ui/icons/Event';
import PaymentIcon from '@material-ui/icons/Payment';
import BookIcon from '@material-ui/icons/Book';
function Sidebar() {

    return (
        <div className="sidebar">
             
             <div className="sidebar__details">
                 
             <SidebarOptions
             Icon = {PaymentIcon}
             title="Payments"

            />
             
             <SidebarOptions
             Icon = {BookIcon}
             title="Reports"

            />
            
            <SidebarOptions
             Icon = {CalendarTodayIcon}
             title="Calendar"

            />
            <SidebarOptions 
            Icon={StarIcon}
            title="status"
            
            />
            <SidebarOptions
            Icon = {EventIcon}
            title="Events"
          
            />

             </div>
            
            
            
            
        </div>
    )
}

export default Sidebar