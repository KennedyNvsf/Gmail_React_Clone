

import React from "react";
import "../emailRow/_emailRowBlock.styles.scss";

//React Router
import {useHistory} from "react-router-dom"

//MATERIAL UI ICONS

import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';





const EmailRowBlock = ({id, title, subject, description, time}) => {

    const history = useHistory();

    return (

        <div onClick={() => history.push("/mail")} className="emailRow_block">

            <div className="emailRow_options">

                <Checkbox/>

                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>

                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>

            </div>

            <h3 className="emailRow_title">
                {title} 
            </h3>

            <div className="emailRow_message">

                <h4>{subject} -</h4>
                <span className="emailRow_preview">
                    {description}
                </span>

            </div>

            <p className="emailRow_time">
                {time}
            </p>


        </div>
    )
}

export default EmailRowBlock;