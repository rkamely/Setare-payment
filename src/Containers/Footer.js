/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {jsx, css, keyframes} from '@emotion/react';
import footerBg from "../Assets/Img/Footer-svgWave.png";
import logo from "./../Assets/Img/01 - SetareAval.png"
import * as Variable from '../Constants/Variables';
import {BsWhatsapp, BsInstagram} from 'react-icons/bs';
import {MdAttachEmail} from 'react-icons/md';
import {FaRoute, FaTelegramPlane, FaPhoneVolume} from 'react-icons/fa';


const footerSectionCSS = css`
  color: #919191;
  background-color: #474747;
  background-image: url(${footerBg});
  height: 500px;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  padding: 100px;
`
const footerLogoCSS = css`
  width: 25%;

  img {
    width: 70px;
    height: 70px;
  }

  h5 {
    border-top: 2px solid #919191;
    padding-top: 10px;

    &:hover {
      color: #dadada;
    }
  }
`
const linksFooterCSS = css`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;

  > * {
    text-align: center;

  }

  h3 {
    padding-bottom: 10px;
    border-bottom: 2px solid #919191;
  }

  a {
    text-decoration: none;
    color: #919191;
    padding: 5px 0;
    font-size: .9rem;
    font-weight: 600;
    position: relative;


    &:hover {
      color: #dadada;
    }

  }
`
const footerContactCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 20%;
  a {
    text-decoration: none;
    color: #919191;

    > :nth-child(1) {
      color: #919191;
      font-size: 1.25rem;
      margin-left: 10px;
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


function Footer() {


    return (
        <React.Fragment>
            <div css={footerSectionCSS}>
                <div css={footerLogoCSS}>
                    <img src={logo} alt="setareh avval logo"/>
                    <h5>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                        مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                        درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                    </h5>
                </div>
                <div css={linksFooterCSS}>
                    <h3>پیوند ها</h3>
                    <Link>صفحه اصلی</Link>
                    <Link>درخواست درگاه</Link>
                    <Link>بلاگ</Link>
                    <Link>قوانین و مقرات</Link>
                    <Link>نمونه قرارداد</Link>
                    <Link>ثبت نام</Link>
                </div>
                <div css={footerContactCSS}>
                    <Link>
                        <FaPhoneVolume/>
                        <span>تماس با ما</span>
                    </Link>
                    <Link>
                        <MdAttachEmail/>
                        <span>ارسال ایمیل</span>
                    </Link>
                    <Link>
                        <FaRoute/>
                        <span>آدرس ستاره اول</span>
                    </Link>
                    <div>
                        <BsWhatsapp/>
                        <BsInstagram/>
                        <FaTelegramPlane/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
        ;
}

export default Footer;
