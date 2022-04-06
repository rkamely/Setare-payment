/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import * as Variable from '../../../Constants/Variables';
import {jsx, css} from '@emotion/react';
import pic1 from '../../../Assets/Card/image-intro-1.jpg'
import pic2 from '../../../Assets/Card/image-intro-4.jpg'
import pic3 from '../../../Assets/Card/startup-image-1.jpg'
import pic4 from "../../../Assets/Card/startup-image-5.jpg"
import CardService from "./CardService";

const cardSection = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 4rem 1rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`

function Services() {

    return (

        <section css={cardSection}>

                <CardService source={pic1} alt={"ثبت درگاه شخصی"} title={"ثبت درگاه شخصی"}
                             description={"شما می توانید در خواست خود را جهت دریافت درگاه شخصی برای کسب کارتان ثبت نمایید."}/>

                <CardService source={pic2} alt={"تسهیم چند حساب"} title={"تسهیم چند حساب"}
                             description={"با تسهیم چند حساب می توانید از خدمات جدید استفاده از چند حساب متفاوت توسط یک شخص استفاده فرمایید."}/>

                <CardService source={pic3} alt={"پلتفرم های مختلف"} title={"پلتفرم های مختلف"}
                             description={"پلتفرم های مختلفی جهت ارائه خدمات بهتر برای شما آماده سازی شده است تا بتوانیم بهترین خدمات را ارائه دهیم."}/>

                <CardService source={pic4} alt={"چند درگاهی"} title={"چند درگاهی"}
                             description={"شما میتوانید با ثبت درخواست چندین درگاه مختلف احتمال ناموفق بودن پرداخت های خود را به دلیل اختلال در یک PSP کاهش دهید."}/>

        </section>

    );
}

export default Services;
