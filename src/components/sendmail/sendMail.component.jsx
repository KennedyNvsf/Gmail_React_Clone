

import React, {useState} from "react";
import "../sendmail/_sendMail.style.scss";//styles

//REDUX
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mail.slice";
// import { useSelector } from 'react-redux';
// import {selectsendMessageIsOpen} from "../../features/mail.slice";

//USE FORM
// import { useForm } from "react-hook-form";



//MATERIAL UI ICONS
import { Button} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';


//firebase
import firebase from "firebase"
import { db } from "../../firebase";






const SendMail = () => {

    
    const dispatch = useDispatch();

    const [to_input, setTo_input] = useState("");//input state
    const [subject_input, setSubject_input] = useState("");//input state
    const [message_input, setMessage_input] = useState("");//input state
    

    const onSubmission = (e) => {

          e.preventDefault();

        db.collection("emails").add({

            to: to_input,
            subject: subject_input,
            message: message_input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        dispatch(closeSendMessage());

    };

    return (

        <div className="sendMailContainer">

            <div className="sendMailHeader">

                <h3>New Message</h3>
                <CloseIcon onClick={()=> dispatch(closeSendMessage())} className="sendMailClose"/>

            </div>

            <form>

                <input

                    onChange = {e => setTo_input(e.target.value)}
                    value={to_input}
                    placeholder="To"
                    name="to"
                    type="email"
                    required
             
                />

                   
               
                   

                <input 
                    onChange = {e => setSubject_input(e.target.value)}
                    value={subject_input}
                    name="subject"
                    placeholder="Subject" 
                    type="text"
                    required
                   
                />

                   

                <input
                    onChange = {e => setMessage_input(e.target.value)}
                    value={message_input}
                    name="message"
                    placeholder="Message..." 
                    type="text" 
                    className="sendMail_message" 
                   
                />

                  

                <div className="sendMailOptions">

                    <Button
                    onClick={onSubmission}
                    variant="contained" 
                    color="primary"
                    type="submit"
                    className="sendMail_send"
                    >Send</Button>

                </div>

            </form>

        </div>
    )
}

export default SendMail;