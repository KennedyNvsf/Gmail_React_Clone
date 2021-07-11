

import React from "react";
import "../sendmail/_sendMail.style.scss";//styles

//REDUX
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mail.slice";

//USE FORM
import { useForm } from "react-hook-form";



//MATERIAL UI ICONS
import { Button } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';






const SendMail = () => {

    const dispatch = useDispatch();

    const {register, handleSubmit, watch, formState: { errors }} = useForm();


    const onSubmit = (formData) => {

        console.log(formData);

    };

    return (

        <div className="sendMailContainer">

            <div className="sendMailHeader">
                <h3>New Message</h3>
                <CloseIcon onClick={()=> dispatch(closeSendMessage())} className="sendMailClose"/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} >

                <input

                    
                    placeholder="To"
                    name="to"
                    type="email"
                    {...register('email', { required: true })}
                />

                    {errors.to && (<p class="sendMail_error">Email Required</p>)}
               
                   

                <input 
                    name="subject"
                    placeholder="Subject" 
                    type="text"
                    {...register('text', { required: true })}
                />

                    {errors.subject && (<p class="sendMail_error">Email Required</p>)}

                <input
                    name="message"
                    placeholder="Message..." 
                    type="text" 
                    className="sendMail_message" 

                    // {...register('email_message', { required: true })}
                />

                    {/* {errors.message && (<p class="sendMail_error">Email Required</p>)} */}

                <div className="sendMailOptions">

                    <Button
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