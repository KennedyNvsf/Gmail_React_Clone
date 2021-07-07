

import React from "react";
import "../emailList_/_emailList.styles.scss";

//Components
import SectionBlocks from "../section/section.component";
import EmailRowBlock from "../emailRow/emailRowBlock.component";

//MATERIAL UI ICONS

import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';

import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';





const EmailList = () => {

    return (

        <div className="email_listSection">

            <div className="emailList_settings">

                <div className="settingsLeft">

                   <Checkbox/>

                   <IconButton>
                       <ArrowDropDownIcon/>
                   </IconButton>

                   <IconButton>
                       <RedoIcon/>
                   </IconButton>

                   <IconButton>
                       <MoreVertIcon/>
                   </IconButton>

                </div>

                <div className="settingsRight">

                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>

                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>

                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>

                </div>
            </div>

            <div className="emailListContainer">

                <SectionBlocks Icon={InboxIcon} title="Inbox" color="red" selected />
                <SectionBlocks Icon={PeopleIcon} title="Primary" color="blue"  />
                <SectionBlocks Icon={LocalOfferIcon} title="Promotions" color="green"  />

            </div>

            <div className="emailRow_container">

                <EmailRowBlock title="JOB OFFER" subject="Recruitment" description="Scheduling Interview" time="4pm" />
                <EmailRowBlock title="IT Department" subject="Software Review" description="Hey Kennedy, Amazing job" time="10am" />
                <EmailRowBlock title="Project Manager" subject="New client request" description="the software must be completed until next week" time="5pm" />

            </div>

        </div>
    )
}

export default EmailList;