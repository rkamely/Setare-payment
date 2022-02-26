/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {jsx, css, keyframes} from '@emotion/react';
import * as Variable from '../Constants/Variables';
import Mobile from "../Assets/Img/contactUsMobilePhone.png"
import WhatsApp from "../Assets/Img/contactUsWhatsapp.png"
import Instagram from "../Assets/Img/contactUsInstagram.png"
import Telegram from "../Assets/Img/contactUsTelegram.png"
import headquarter from "../Assets/Img/headquarter.png"
import Office from "../Assets/Img/help-desk.png"


const contactUsCSS = css`

  width: 90%;
  margin: 5rem auto;
  @media (max-width: 768px) {
    margin: 10rem auto 5rem auto;
  }

`

const callSectionCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }

  > * {
    width: 45%;
    @media (max-width: 600px) {
      width: 80%;
      margin: 2rem auto;
    }
  }

  h2 {
    margin-bottom: 1rem !important;
    @media (max-width: 768px) {
      font-size: 1.5rem!important;
    }
  }
`

const sendMail = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: ${Variable.border};
  box-shadow: ${Variable.boxShadow};
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;

  }

  > input, > textarea {
    padding: .5rem;
    outline: none;
    margin: 1rem .5rem;
    border: ${Variable.border};
    transition: all .5s;
    width: 90%;
    border-radius: ${Variable.radius};

    &:focus {
      box-shadow: ${Variable.boxShadow};
    }
  }

  button {
    padding: .5rem;
    margin: 1.5rem .5rem;
    border: ${Variable.border};
    cursor: pointer;
    width: 90%;
    background-color: ${Variable.level2actionBtnBg};
    color: ${Variable.btnFontColor};
    transition: .25s;
    border-radius: ${Variable.radius};


    &:hover {
      background-color: ${Variable.level2actionBtnBgHover};
    }
  }
`
const forceCall = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    padding: .5rem;
    margin: 1rem auto;
     
  }


  > a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: ${Variable.border};
    border-radius: ${Variable.radius};
    width: 90%;
    cursor: pointer;
    transition: .25s;
    color: ${Variable.navFontColor};
    span{
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }

    &:hover {
      box-shadow: ${Variable.boxShadow};
    }

    img {
      margin: auto 15%;
      width: 3rem;
      height: 3rem;
      @media (max-width: 768px) {
        margin: auto 5%;
      }
    }
  }
`
const address = css`
  padding: 1rem;

  h2 {
    margin: 1rem auto !important;
    @media (max-width: 768px) {
   font-size: 1.5rem!important;
    }
  }

  > div {
    padding: 1rem;
    border: ${Variable.border};
    border-radius: ${Variable.radius};
    box-shadow: ${Variable.boxShadow};

    * {
      margin: .25rem auto;
    }
  }
`
const addressBox = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }

  img {
    width: 8rem;
    height: 8rem;
  }
`
const emailAddress = css`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: ${Variable.navFontColor};
    border: ${Variable.border};
    border-radius: ${Variable.radius};
    width: 100%;
    padding: 1rem;
    transition: .25s;
    @media (max-width: 600px) {
      flex-direction: column;
    }

    &:hover {
      border: 1px solid #d9d3d3;
    }

    div {
      text-align: center;
    }
  }
`

function ContactUs() {
    const handleContactUsForm = (e) => {
        e.preventDefault()
        console.log("form submitted")
    }
    return (
        <React.Fragment>
            <div css={contactUsCSS}>
                <section css={callSectionCSS}>
                    <div>
                        <h2>فرم تماس</h2>
                        <form css={sendMail} onSubmit={handleContactUsForm}>
                            <input type="text" placeholder={"نام و نام خانوادگی"}/>
                            <input type="text" placeholder={"شمارموبایل"}/>
                            <textarea name="" id="" rows="5"
                                      placeholder={"لطفا پیام خود را ثبت کنید"}/>
                            <button> ارسال</button>
                        </form>

                    </div>
                    <div>
                        <h2>تماس فوری</h2>
                        <div css={forceCall}>
                            <h3>زمان پاسخگوی شنبه الی پنجشنبه ساعت 8 الی 17</h3>
                            <a href={"tel:+989199001193"}>
                                <img src={Mobile} alt="call us"/>
                                <span>تماس تلفنی</span>
                            </a>
                            <a href="#">
                                <img src={WhatsApp} alt="whatsapp contact line"/>
                                <span>تماس در واتس اپ</span>
                            </a>
                            <a href="#">
                                <img src={Instagram} alt="instagram contact line"/>
                                <span>تماس در اینستاگرام</span>
                            </a>
                            <a href="#">
                                <img src={Telegram} alt="Telegram contact line"/>
                                <span>تماس در تلگرام</span>
                            </a>
                        </div>
                    </div>
                </section>

                <section>
                    <div css={address}>
                        <h2>دفتر مرکزی</h2>
                        <div css={addressBox}>
                            <div>
                                <div>جزیره کیش، مجتمع اداری سارینا ۱، طبقه هفتم، واحد ۷۱۵</div>
                                <div>
                                    <div>تلفن : 1-44482080 - 076</div>
                                    <div> دورنگار: 44482082 - 076</div>
                                    <div> کد پستی: ۷۹۴۱۸۹۷۱۶۷</div>
                                    <div>ایمیل info@setareaval.ir</div>
                                </div>
                            </div>
                            <img src={headquarter} alt="headquarterBuilding"/>
                        </div>

                    </div>
                    <div css={address}>
                        <h2>دفتر هماهنگی</h2>
                        <div css={addressBox}>
                            <div>
                                <div>تهران، سعادت آباد، خیابان کیان ۱۳ شرقی، پلاک ۲</div>
                                <div>
                                    <div>تلفن: ۷۹۱۸۲۰۰۰ - ۰۲۱</div>
                                    <div> دورنگار: ۲۶۷۴۲۳۱۲ - ۰۲۱</div>
                                    <div> کد پستی: ۱۹۹۸۸۳۷۸۰۱</div>
                                    <div>ایمیل info@setareaval.ir</div>
                                </div>
                            </div>
                            <img src={Office} alt="Coordinating Office"/>
                        </div>
                    </div>
                    <div css={address}>
                        <h2>تماس با مدیران</h2>
                        <div css={emailAddress}>
                            <a href={"mailto:r.kameli@setareaval.ir"}>
                                <div>
                                    <span>مدیریت عامل</span>
                                    <br/>
                                    <span>جناب آقای صدوقی</span>
                                </div>
                                <spna>Mj.sadooghi@setareaval.ir</spna>
                            </a>
                            <a href={"mailto:r.kameli@setareaval.ir"}>
                                <div>
                                    <span>معاونت فروش و بازاریابی</span>
                                    <br/>
                                    <span>جناب آقای قربانی</span>
                                </div>
                                <spna>m.ghorbani@setareaval.ir</spna>
                            </a>
                            <a href={"mailto:r.kameli@setareaval.ir"}>
                                <div>
                                    <span>معاونت سرمایه انسانی </span>
                                    <br/>
                                    <span>جناب آقای کربلایی</span>
                                </div>
                                <span>j.karbalaii@setareaval.ir</span>
                            </a>
                            <a href={"mailto:r.kameli@setareaval.ir"}>
                                <div>
                                    <span>معاونت مالی و اداری</span>
                                    <br/>
                                    <span>جناب آقای باغشاهی</span>
                                </div>
                                <spna>s.baghshahi@setareaval.ir</spna>
                            </a>
                            <a href={"mailto:r.kameli@setareaval.ir"}>
                                <div>
                                    <span>مدیریت روابط عمومی</span>
                                    <br/>
                                    <span>جناب آقای صالحی‌فرد</span>
                                </div>
                                <span>h.salehifard@setareaval.ir</span>
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </React.Fragment>
    );
}

export default ContactUs;
