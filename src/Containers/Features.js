/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react'
import callCenter from "./../Assets/Img/Calling-amico.svg"
import cashOut from "./../Assets/Img/Cash Payment-bro.svg"
import certification from "./../Assets/Img/Certification-rafiki.svg"


const featuresContainerCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 100px 0;
  background-color: #FFFFFF;
`
const featureCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  box-shadow: rgba(0, 0, 0, 0.09) 0 3px 15px;
  background-color: #FFFFFF;

  img {
    width: 12rem;
    height: 12rem;
    margin-bottom: 1rem;
  }

  h5 {
    display: flex;
    align-items: center;
    width: auto;
    background-image: linear-gradient(to left,  #EAB464, #F9A03F);
    border-radius: 55px;
    padding: .5rem;
    box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;
    height: 40px;
    margin-top: 20px;
    text-align: center;
    line-height: 33px;
    white-space: nowrap;
  }

  h6 {
    width: 80%;
    margin: 2rem auto !important;
    padding: 0 1.5rem;

  }
`
// const pulse = keyframes    `
//       0% {
//         box-shadow: 0 0 0 0 rgba(163, 177, 198, 0.3),
//         0 0 0 1em rgba(163, 177, 198, 0.3),
//         0 0 0 3em rgba(163, 177, 198, 0.03),
//         0 0 0 5em rgba(163, 177, 198, 0.01);
//       }
//       100% {
//         box-shadow: 0 0 0 1em rgba(163, 177, 198, 0.3),
//         0 0 0 3em rgba(163, 177, 198, 0.03),
//         0 0 0 5em rgba(163, 177, 198, 0.03),
//         0 0 0 8em rgba(163, 177, 198, 0.01);
//       }
//
//     `
// const pulseBtnCss = css`
//   position: absolute;
//   width: 30px;
//   height: 30px;
//   background-image: linear-gradient(to right top, #f6f6f6, #e9ebee, #dae1e7, #cad7dd, #b9ced1);
//   border-radius: 50%;
//   right: 120px;
//   bottom: -12px;
//   animation: ${pulse} 1.5s linear infinite;
// `


function Features() {
    return (
        <React.Fragment>
            <section css={featuresContainerCSS}>
                <div css={featureCss}>
                    <img src={callCenter} alt="callCenter"/>
                    <h5>پشتیبانی 24 ساعته</h5>
                    <h6>تیم فنی ما به صورت تمام وقت در خدمت شما عزیزان هستند.</h6>
                    {/*<div css={pulseBtnCss}/>*/}
                </div>
                <div css={featureCss}>
                    <img src={cashOut} alt="callCenter"/>
                    <h5>تصویه روزانه بعد از یک روزه کاری </h5>
                    <h6>بعد از یک روز کاری به صورت کامل پول در حساب شما قرار خواهد گرفت.</h6>
                    {/*<div css={pulseBtnCss}/>*/}
                </div>
                <div css={featureCss}>
                    <img src={certification} alt="callCenter"/>
                    <h5>دریافت مجوز پرداخت یاری</h5>
                    <h6>از اول تا آخر گرفتن مجوز پرداخت یاری در کنار شما مشتریان عزیز هستیم.</h6>
                    {/*<div css={pulseBtnCss}/>*/}
                </div>
            </section>
        </React.Fragment>
    );
}

export default Features;
