

import React from "react";
import "../header/_header.styles.scss";//styling

//MATERIALUI
import { IconButton, Avatar } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';




const Header = () => {

    return (
        <div className ="headerSection">
               
               <div className="headerLeft">

                    <IconButton>
                        <MenuIcon/>
                    </IconButton>

                    <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png" alt="" />
               </div>

               <div className="headerCenter">

                   


                        <SearchIcon/>

                    

                         <input type="text" placeholder = "Search Mail" />
                         <ArrowDropDownIcon className = "searchMail"/>   
                   
                   


               </div>

               <div className="headerRight">

                   <IconButton>
                       <AppsIcon/>
                   </IconButton>

                   <IconButton>
                       <NotificationsIcon/>
                   </IconButton>

                   <Avatar/>

               </div>
               
        </div>
    )
}

export default Header;