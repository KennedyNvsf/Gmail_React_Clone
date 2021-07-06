
import React from "react";
import "../sidebar/_sidebar.styles.scss";

//COMPONENTS
import SideBarOption from "../sidebarOption/sbar_option.component";

//MATERIAL UI ICONS
import { Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';


const SideBar = () => {


    return(

        <div className="sidebarSection">

            <Button startIcon = {<AddIcon fontSize="large" />} className="sidebarCompose">Compose</Button>

            <SideBarOption Icon={InboxIcon} title={"Inbox"} number={156} selected={true}/>
            <SideBarOption Icon={StarIcon} title={"Starred"} number={10}/>
            <SideBarOption Icon={AccessTimeIcon} title={"Snoozed"} number={""}/>
            <SideBarOption Icon={LabelImportantIcon} title={"Important"} number={""}/>
            <SideBarOption Icon={NearMeIcon} title={"Sent"} number={""}/>
            <SideBarOption Icon={NoteIcon} title={"Drafts"} number={""}/>
            <SideBarOption Icon={ExpandMoreIcon} title={"More"} number={""}/>

            <div className="sidebarFooter">

                <div className="sdFooter_icons">

                    <IconButton>
                        <PersonIcon/>
                    </IconButton>

                    <IconButton>
                        <DuoIcon/>
                    </IconButton>

                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>

                </div>
            </div>

        </div>
    )
}

export default SideBar;