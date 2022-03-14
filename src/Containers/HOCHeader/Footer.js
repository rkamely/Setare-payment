/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {Link} from "react-router-dom";
import {css} from '@emotion/react';
import footerBg from "../../Assets/Img/Footer-svgWave.png";
import logo from "../../Assets/Img/01 - SetareAval.png"
import * as Variable from '../../Constants/Variables';
import {BsWhatsapp, BsInstagram} from 'react-icons/bs';
import {MdAttachEmail} from 'react-icons/md';
import {FaTelegramPlane, FaPhoneVolume} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';


const footerSectionCSS = css`
  color: #919191;
  background-color: #343434;
  background-image: url(${footerBg});
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 3rem 0;
  @media (max-width: 768px) {
    padding: 1rem 0 4rem 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: auto;
  }
`
const footerLogoCSS = css`
  width: 40%;

  img {
    width: 70px;
    height: 70px;
  }

  h6 {
    border-top: 2px solid #919191;
    padding-top: 10px;
    color: #919191;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    display: none
  }
`
const linksFooterCSS = css`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    margin: 2rem auto;
  }

  a {
    text-decoration: none;
    color: #919191;
    padding: 5px 0;
    font-size: 1rem;
    font-weight: 400;
    position: relative;
    text-align: center;


    &:hover {
      color: #dadada;
    }

  }
`
const footerContactCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  font-size: 1rem;
  padding-top: 5rem;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 1rem;
    align-items: center;

  }

  > a {
    text-decoration: none;
    color: #919191;


    span {
      margin-right: 10px;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }

    > :nth-child(1) {
      color: #919191;
      font-size: 2.5rem;
      width: 20%;
    }

    &:hover > * {
      color: #dadada;
    }
  }

  > * {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;
    margin: 5px 0;

  }
`
const socialIconCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: space-around;
    width: auto;
  }

  > a {
    margin: .5rem;
    text-decoration: none;
    color: #919191;

    &:hover > * {
      color: #dadada;
    }

    > * {
      font-size: 2rem;
    }
  }
`
const licenseCSS = css`
  font-size: .7rem;
  text-align: justify;
  margin: 0 auto;
  @media (max-width: 768px) {
    text-align: center;

  }
`


function Footer() {

    return (
        <React.Fragment>
            <div css={footerSectionCSS}>
                <div css={footerLogoCSS}>
                    <img src={logo} alt="setareh avval logo"/>
                    <h6>
                        از مهم‌ترین اهداف شرکت ستاره اول می‌توان به کوتاه نمودن چرخه
                        دریافت قبوض و تسریع در روند وصول مطالبات، راحت‌ترین و سریع‌ترین روش خرید شارژ مشترکین اعتباری به
                        صورت الکترونیکی و لحظه‌ای و توسعه و تنوع محصول با تحلیل نیاز مشترکین، اشاره کرد . فعالیت های این
                        شرکت منجر به حذف واسطــــه و توسعه فروش انواع محصولات همراه اول از جمله شارژ فوق العاده، بانوان،
                        جوانان، وفاداری، دلخواه، مستقیم و شارژ اضطراری، انواع بسته‌های مختلف اینترنتی و پرداخت قبوض شده
                        است .
                    </h6>
                </div>
                <div css={linksFooterCSS}>
                    <Link>صفحه اصلی</Link>
                    <Link>درخواست درگاه</Link>
                    <Link>بلاگ</Link>
                    <Link>قوانین و مقرات</Link>
                    <Link>نمونه قرارداد</Link>
                    <Link>ثبت نام</Link>
                </div>
                <div css={footerContactCSS}>
                    <a href={"tel:+989199001193"}>
                        <FaPhoneVolume/>
                        <span>تماس با ما</span>
                    </a>
                    <a href={"mailto:r.kameli@setareaval.ir"}>
                        <MdAttachEmail/>
                        <span>ارسال ایمیل</span>
                    </a>
                    <a target={"_blank"}
                       href={"https://www.google.com/maps/place/%D8%B3%D8%AA%D8%A7%D8%B1%D9%87+%DB%8C%DA%A9%E2%80%AD/@35.7797165,51.3743237,19z/data=!4m5!3m4!1s0x3f8e077df52d20bb:0xb41d4b97fc84bc2c!8m2!3d35.7796364!4d51.3750377"}>
                        <MdLocationOn/>
                        <span>سعادت آباد، خیابان کیان ۱۳ شرقی، پلاک ۲</span>
                    </a>
                    <div css={socialIconCSS}>
                        <Link> <BsWhatsapp/> </Link>
                        <Link> <BsInstagram/> </Link>
                        <Link> <FaTelegramPlane/> </Link>
                    </div>
                    <div css={licenseCSS}>تمامی حقوق این سایت مربوط به شرکت ستاره اول می باشد.</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;
