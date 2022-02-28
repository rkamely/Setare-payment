/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../Constants/Variables';
import headquarter from "../Assets/Img/headquarter.png"
import Office from "../Assets/Img/help-desk.png"
import Slogan from "../Containers/Slogan";
import {AiOutlineMail} from "react-icons/ai"
import {BsBuilding} from "react-icons/bs"
import {MdOutlineSupportAgent, MdRecordVoiceOver} from "react-icons/md"
import TehranLoc from "../Assets/Img/TehranLoc.PNG"
import KishLoc from "../Assets/Img/KishLoc.PNG"
import FastContact from "../Containers/ContactUs/FastContact";
import FormTitle from "../Containers/ContactUs/FormTitle";
import ContactForm from "../Containers/ContactUs/ContactForm";
import Address from "../Containers/ContactUs/Address";
import ContactManagers from "../Containers/ContactUs/ContactManagers";

const contactUsCSS = css`
  width: 100%;
  margin: 3rem auto;
  @media (max-width: 768px) {
    margin: 6rem auto;
  }

`
const callSectionCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 2rem auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  > :nth-child(1) {
    width: 55%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  > :nth-child(2) {
    width: 40%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  > * {
    @media (max-width: 600px) {
      width: 80%;
      margin: 2rem auto;
    }
  }

  h2 {
    @media (max-width: 768px) {
      font-size: 1.5rem !important;
    }
  }
`
const address = css`
  padding: 1rem;
`


function ContactUs() {

    return (
        <React.Fragment>
            <div css={contactUsCSS}>
                <Slogan title={"تماس با ما"} description={""} height={"200px"}/>
                <section css={callSectionCSS}>
                    <FastContact/>
                    <div>
                        <FormTitle icon={<AiOutlineMail/>} title={"فرم تماس"}/>
                        <ContactForm/>
                    </div>
                </section>
                <section>
                    <div css={address}>
                        <FormTitle icon={<BsBuilding/>} title={"دفتر مرکزی"}/>
                        <Address mainImg={headquarter} altMainImg={"headquarterBuilding"}
                                 address={"جزیره کیش، مجتمع اداری سارینا ۱، طبقه هفتم، واحد ۷۱۵"}
                                 phone={"تلفن : 1-44482080 - 076"} fax={"دورنگار: 44482082 - 07"}
                                 postalCode={" کد پستی: ۷۹۴۱۸۹۷۱۶۷"} email={"ایمیل: info@setareaval.ir"} map={KishLoc}
                                 altMap={"Kish Location"} mapHref={""}/>

                    </div>
                    <div css={address}>
                        <FormTitle icon={<MdOutlineSupportAgent/>} title={"دفتر هماهنگی"}/>
                        <Address mainImg={Office} altMainImg={"Coordinating Office"}
                                 address={"تهران، سعادت آباد، خیابان کیان ۱۳ شرقی، پلاک ۲"}
                                 phone={"تلفن: ۷۹۱۸۲۰۰۰ - ۰۲۱"} fax={"دورنگار: ۲۶۷۴۲۳۱۲ - ۰۲۱"}
                                 postalCode={" کد پستی: ۱۹۹۸۸۳۷۸۰۱"} email={"ایمیل: info@setareaval.ir"} map={TehranLoc}
                                 altMap={"Tehran Location"} mapHref={""}/>
                    </div>
                    <div css={address}>
                        <FormTitle icon={<MdRecordVoiceOver/>} title={"تماس با مدیران"}/>
                        <ContactManagers/>
                    </div>
                </section>

            </div>
        </React.Fragment>
    );
}

export default ContactUs;
