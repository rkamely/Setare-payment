/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react'
import callCenter from "../../../Assets/Img/Calling-amico.svg"
import cashOut from "../../../Assets/Img/Cash Payment-bro.svg"
import certification from "../../../Assets/Img/Certification-rafiki.svg"
import CardFeature from "./CardFeature";


const featuresContainerCSS = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 4rem 0;
  background-color: #FFFFFF;
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`



function Features() {
    return (
        <React.Fragment>
            <section css={featuresContainerCSS}>
                <CardFeature icon={callCenter} alt={"پشتیبانی 24 ساعته"} title={"پشتیبانی 24 ساعته"}
                             description={"تیم فنی ما به صورت تمام وقت در خدمت شما عزیزان هستند."}/>
                <CardFeature icon={cashOut} alt={"تصویه روزانه بعد از یک روزه کاری "}
                             title={"تصویه روزانه بعد از یک روزه کاری "}
                             description={"بعد از یک روز کاری به صورت کامل پول در حساب شما قرار خواهد گرفت."}/>
                <CardFeature icon={certification} alt={"دریافت مجوز پرداخت یاری"} title={"دریافت مجوز پرداخت یاری"}
                             description={"از اول تا آخر گرفتن مجوز پرداخت یاری در کنار شما مشتریان عزیز هستیم"}/>

            </section>
        </React.Fragment>
    );
}

export default Features;
