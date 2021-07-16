

import React from "react";
import "../mail_/_mail.styles.scss";

//REACT ROUTER
import {useHistory} from "react-router-dom";

//redux
import {useSelector} from "react-redux";
import { selectOpenMail } from '../../features/mail.slice';

//MATERIAL UI ICONS

import { IconButton } from "@material-ui/core";

//LEFT SIDE ICONS
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';

//RIGHT SIDE ICONS
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import SendIcon from '@material-ui/icons/Send';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const Mail = () => {

    const history = useHistory();

    const selectedMail = useSelector(selectOpenMail);

    return (

        <div className ="mailSection">

            <div className="mailTools">

                <div className="mailTools_left">

                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBackIcon/>
                    </IconButton>

                    
                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>

                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>

                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>

                    <IconButton>
                        <EmailIcon/>
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon/>
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                    

                </div>

                <div className="mailTools_right">

                    <IconButton>
                        <UnfoldMoreIcon/>
                    </IconButton>

                    <IconButton>
                        <PrintIcon/>
                    </IconButton>
                    
                    <IconButton>
                        <SendIcon/>
                    </IconButton>

                </div>

            </div>

            <div className="mailBody">

                <div className="mailBody_header">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className="mail_important" />
                    <p>{selectedMail?.title}</p>
                    <p className="mailTime">{selectedMail?.time}</p>
                </div>

                <div className="mailMessage">
                   <p>{selectedMail?.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Mail;