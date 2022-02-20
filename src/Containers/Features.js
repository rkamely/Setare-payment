/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css, keyframes} from '@emotion/react'
import callCenter from "./../Assets/Img/Calling-amico.svg"
import cashOut from "./../Assets/Img/Cash Payment-bro.svg"
import certification from "./../Assets/Img/Certification-rafiki.svg"



const featuresContainerCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 100px auto;
`
const featureCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 300px;
  width: 200px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 50%;

  h4 {
    background-image: linear-gradient(to right, #eff7f7, #e9f3f3, #e3eeef, #ddeaeb, #d7e5e7);
    border-radius: 55px;
    padding: 5px;
    box-shadow: rgb(17 12 46 / 15%) 0px 48px 100px 0px;
    height: 35px;
    margin-top: 20px;
  }

  h6 {
    width: 140px;
    margin: 10px auto;


  }
`
const borderFeatureCss = css`
  position: absolute;
  height: 400px;
  width: 100px;
  border: 10px solid rgba(33, 93, 91, 0.5);
  border-radius: 50%;
  transform: rotate(23deg);
  border-bottom-color: transparent;
  border-left-color: transparent;
`
const vector = css`
  position: absolute;
  width: 150px;
  height: 150px;
  background-image: linear-gradient(to right top, #6c9693, #57807b, #b8ccc8);
  padding: 5px;
  border-radius: 50%;
  right: 35px;
  top: -80px;

  img {
    background-color: #FFFFFF;
    border-radius: 50%;
  }
`

const pulse = keyframes
    `
      0% {
        box-shadow: 0 0 0 0 rgba(163, 177, 198, 0.3),
        0 0 0 1em rgba(163, 177, 198, 0.3),
        0 0 0 3em rgba(163, 177, 198, 0.03),
        0 0 0 5em rgba(163, 177, 198, 0.01);
      }
      100% {
        box-shadow: 0 0 0 1em rgba(163, 177, 198, 0.3),
        0 0 0 3em rgba(163, 177, 198, 0.03),
        0 0 0 5em rgba(163, 177, 198, 0.03),
        0 0 0 8em rgba(163, 177, 198, 0.01);
      }

    `
const pulseBtnCss = css`
  position: absolute;
  width: 30px;
  height: 30px;
  background-image: linear-gradient(to right top, #f6f6f6, #e9ebee, #dae1e7, #cad7dd, #b9ced1);
  border-radius: 50%;
  right: 80px;
  bottom: -12px;
  animation: ${pulse} 1.5s linear infinite;
`


function Features() {
    return (
        <React.Fragment>
            <section css={featuresContainerCSS}>
                <div css={featureCss}>
                    <div css={borderFeatureCss}/>
                    <div css={vector}><img src={callCenter} alt="callCenter"/></div>
                    <h4>پشتیبانی 24 ساعته</h4>
                    <h6>تیم فنی ما به صورت تمام وقت در خدمت شما عزیزان هستند.</h6>
                    <div css={pulseBtnCss}/>
                </div>
                <div css={featureCss}>
                    <div css={borderFeatureCss}/>
                    <div css={vector}><img src={cashOut} alt="callCenter"/></div>
                    <h4>تصویه روزانه بعد از یک روزه کاری </h4>
                    <h6>بعد از یک روز کاری به صورت کامل پول در حساب شما قرار خواهد گرفت.</h6>
                    <div css={pulseBtnCss}/>
                </div>
                <div css={featureCss}>
                    <div css={borderFeatureCss}/>
                    <div css={vector}><img src={certification} alt="callCenter"/></div>
                    <h4>دریافت مجوز پرداخت یاری</h4>
                    <h6>از اول تا آخر گرفتن مجوز پرداخت یاری در کنار شما مشتریان عزیز هستیم.</h6>
                    <div css={pulseBtnCss}/>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Features;
