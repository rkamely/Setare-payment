/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../Constants/Variables';
import FormInput from "../../Components/Input/FormInput";
import TextareaForm from "../../Components/Input/TextareaForm";
import FormButton from "../../Components/Button/FormButton";


const sendMail = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: ${Variable.border};
  box-shadow: ${Variable.boxShadow};
  padding: 2rem;
  width: 100%;
  @media (max-width: 768px) {
    padding: 1rem;

  }
`


function ContactForm() {
    const handleContactUsForm = (e) => {
        e.preventDefault()
        console.log("form submitted")
    }
    return (
        <React.Fragment>
            <form css={sendMail} onSubmit={handleContactUsForm}>
                <FormInput type={"text"} placeHolder={"نام و نام خانوادگی"}/>
                <FormInput type={"text"} placeHolder={"شمارموبایل"}/>
                <TextareaForm name={''} id={''} row={5} column={''} placeholder={"لطفا پیام خود را ثبت کنید"}/>
                <FormButton content={"ارسال"}/>
            </form>
        </React.Fragment>
    );
}

export default ContactForm;
