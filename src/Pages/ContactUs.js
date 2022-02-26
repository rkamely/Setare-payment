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
import {navFontColor} from "../Constants/Variables";


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


  > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border: ${Variable.border};
    border-radius: ${Variable.radius};
    width: 90%;
    cursor: pointer;
    transition: .25s;

    &:hover {
      box-shadow: ${Variable.boxShadow};
    }

    img {
      margin: auto 15%;
      width: 3rem;
      height: 3rem;
    }
  }
`
const address = css`
  padding: 1rem;

  h2 {
    margin: 1rem auto !important;
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

    &:hover {
      border: 1px solid #d9d3d3;
    }
  }
`

function ContactUs() {

    return (
        <React.Fragment>
            <div css={contactUsCSS}>
                <section css={callSectionCSS}>
                    <div>
                        <h2>فرم تماس</h2>
                        <div css={sendMail}>
                            <input type="text" placeholder={"نام و نام خانوادگی"}/>
                            <input type="text" placeholder={"شمارموبایل"}/>
                            <textarea name="" id="" rows="5"
                                      placeholder={"لطفا پیام خود را ثبت کنید"}/>
                            <button> ارسال</button>
                        </div>

                    </div>
                    <div>
                        <h2>تماس فوری</h2>
                        <div css={forceCall}>
                            <h3>زمان پاسخگوی شنبه الی پنجشنبه ساعت 8 الی 17</h3>
                            <div>
                                <img src={Mobile} alt="call us"/>
                                <span>تماس تلفنی</span>
                            </div>
                            <div>
                                <img src={WhatsApp} alt="whatsapp contact line"/>
                                <span>تماس در واتس اپ</span>
                            </div>
                            <div>
                                <img src={Instagram} alt="instagram contact line"/>
                                <span>تماس در اینستاگرام</span>
                            </div>
                            <div>
                                <img src={Telegram} alt="Telegram contact line"/>
                                <span>تماس در تلگرام</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div css={address}>
                        <h2>دفتر مرکزی</h2>
                        <div>
                            <div>جزیره کیش، مجتمع اداری سارینا ۱، طبقه هفتم، واحد ۷۱۵</div>
                            <div>
                                <div>تلفن : 1-44482080 - 076</div>
                                <div> دورنگار: 44482082 - 076</div>
                                <div> کد پستی: ۷۹۴۱۸۹۷۱۶۷</div>
                                <div>ایمیل info@setareaval.ir</div>
                            </div>
                        </div>
                    </div>
                    <div css={address}>
                        <h2>دفتر هماهنگی</h2>
                        <div>
                            <div>تهران، سعادت آباد، خیابان کیان ۱۳ شرقی، پلاک ۲</div>
                            <div>
                                <div>تلفن: ۷۹۱۸۲۰۰۰ - ۰۲۱</div>
                                <div> دورنگار: ۲۶۷۴۲۳۱۲ - ۰۲۱</div>
                                <div> کد پستی: ۱۹۹۸۸۳۷۸۰۱</div>
                                <div>ایمیل info@setareaval.ir</div>
                            </div>
                        </div>
                    </div>
                    <div css={address}>
                        <h2>تماس با مدیران</h2>
                        <div css={emailAddress}>
                            <a href={"mailto:r.kameli@setareaval.ir"}>
                                <spna>مدیریت عامل - جناب آقای صدوقی</spna>
                                <spna>Mj.sadooghi@setareaval.ir</spna>
                            </a>
                            <a href={"mailto:r.kameli@setareaval.ir"}>
                                <spna>معاونت فروش و بازاریابی - جناب آقای قربانی</spna>
                                <spna>m.ghorbani@setareaval.ir</spna>
                            </a>
                            <a href={"mailto:r.kameli@setareaval.ir"}>
                                <spna>معاونت سرمایه انسانی و خدمات شرکتی - جناب آقای کربلایی</spna>
                                <spna>j.karbalaii@setareaval.ir</spna>
                            </a>
                            <a href={"mailto:r.kameli@setareaval.ir"}>
                                <spna>معاونت مالی و اداری - جناب آقای باغشاهی</spna>
                                <spna>s.baghshahi@setareaval.ir</spna>
                            </a>
                            <a href={"mailto:r.kameli@setareaval.ir"}>
                                <spna>مدیریت روابط عمومی - جناب آقای صالحی‌فرد</spna>
                                <spna>h.salehifard@setareaval.ir</spna>
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </React.Fragment>
    );
}

export default ContactUs;
