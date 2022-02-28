/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import * as Variable from '../../../Constants/Variables';
import {jsx, css, keyframes} from '@emotion/react';
import {Link} from "react-router-dom"
import pic1 from '../../../Assets/Card/image-intro-1.jpg'
import pic2 from '../../../Assets/Card/image-intro-4.jpg'
import pic3 from '../../../Assets/Card/startup-image-1.jpg'
import pic4 from "../../../Assets/Card/startup-image-5.jpg"
import {BsArrowRight} from "react-icons/bs"
import CardService from "./CardService";

const cardSection = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 10rem 1rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

`

function Services() {

    return (
        <React.Fragment>
            <section css={cardSection}>
                <CardService source={pic1} alt={"ثبت درگاه شخصی"} title={"ثبت درگاه شخصی"}
                             description={"شما میتوانید در قابل های میتب یندیبر ندی نبئدیسمنب بند نززین سیمدزئ سم مئدز"}/>
                <CardService source={pic2} alt={"تسهیم چند حساب"} title={"تسهیم چند حساب"}
                             description={"شما میتوانید در قابل های میتب یندیبر ندی نبئدیسمنب بند نززین سیمدزئ سم مئدز"}/>
                <CardService source={pic3} alt={"پلتفرم های مختلف"} title={"پلتفرم های مختلف"}
                             description={"شما میتوانید در قابل های میتب یندیبر ندی نبئدیسمنب بند نززین سیمدزئ سم مئدز"}/>
                <CardService source={pic4} alt={"چند درگاهی"} title={"چند درگاهی"}
                             description={"شما میتوانید در قابل های میتب یندیبر ندی نبئدیسمنب بند نززین سیمدزئ سم مئدز"}/>
            </section>
        </React.Fragment>
    );
}

export default Services;
