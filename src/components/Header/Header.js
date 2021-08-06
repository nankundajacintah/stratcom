import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {

    const signOut = ()=>{
        
    }
    return (
        <div className="header">
          <div className="header__left">
              
              <img
              className="header__logo"
              alt="not found"
              src="https://t4.ftcdn.net/jpg/02/25/16/97/240_F_225169776_tDQLIZUamMuRmiwT6riB4yo3NUAgO5Z8.jpg"
              />
              <IconButton>
                 <MenuIcon/>
              </IconButton>
              
          </div>
          <div className="header__middle">
              <SearchIcon/>
              <input placeholder="search" type="text"/>
              <ArrowDropDownIcon className="header__dropdown"/>
          </div>
          <div className="header__right">
              
              <IconButton>
                  <NotificationsIcon/>
              </IconButton>
              <Avatar
               
               onClick = {signOut}
              />

          </div>
        </div>
    )
}

export default Header