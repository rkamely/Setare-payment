/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {Link} from "react-router-dom"
import {jsx, css, keyframes} from '@emotion/react';
import * as Variable from '../Constants/Variables';
import PageTitle from "../Containers/PageTitle";
import invoice from "../Assets/Img/invoice.png"
import application from "../Assets/Img/application.png"
import solution from "../Assets/Img/solution.png"
import API from "../Assets/Img/api.png"
import organization from "../Assets/Img/organizationServices.png"
import logo from "../Assets/Img/01 - SetareAval.png"
import teamMember from "../Assets/Img/TeamMember.jpg"


const popularServiceAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`
const aboutUsContainer = css`
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 100px;
  }

`
const picAndContext = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 80%;
    margin: 50px auto;
    border: ${Variable.border};
    border-radius: ${Variable.radius};
    box-shadow: ${Variable.boxShadow};
  }

  > p {
    width: 90%;
    margin: 20px auto;
    @media (max-width: 768px) {
      font-size: .75rem;
    }
  }
`
const popularContainer = css`
  margin-bottom: 50px;
  > :nth-child(1) {
    margin: 50px auto ;
  }
`
const popularServices = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 90%;
  margin: auto;

  > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    text-decoration: none;
    margin: 15px auto;
    color: ${Variable.sloganColor};
    border: ${Variable.border};
    padding: 20px 40px;
    border-radius: ${Variable.radius};

    &:hover {
      background-color: #f1f3f5;

      > img {
        animation: ${popularServiceAnimation} .5s ease-in-out;
      }
    }


    > img {
      width: 150px;
      padding: 15px;

    }

    > span {
      text-align: center;
      margin: 20px auto;
      font-size: 1.5rem;

    }
  }
`

function AboutUs() {

    return (
        <section css={aboutUsContainer}>
            <PageTitle title={"درباره ما"}/>
            <div css={picAndContext}>
                <img src={teamMember} alt="teamPhoto"/>
                <p>شرکت ستاره درخشان همراه کیش با نام تجاری "ستاره پی" به عنوان پرداخت‌ یار بانک مرکزی و از شرکت‌های
                    فعال در حوزه
                    فین‌تک از سال ۹۴ تاکنون می‌کوشد تا خدمات دریافت و پرداخت پول را به ساده‌ترین شکل ممکن در بستری امن
                    به
                    افراد و سازمان‌ها ارائه کند. ستاره پی این روزها فقط یک ارائه‌دهندۀ سرویس‌های پرداخت آنلاین نیست و
                    تلاش
                    می‌کند مجموعه‌ای از سرویس‌ها و راهکارهای متناسب با نیازهای کاربران را ارائه کند و در کنار اینکه
                    به‌عنوان
                    مجموعه‌ای معتبر شناخته می‌شود، به جایگاه نخست این حوزه هم دست یابد.
                    ستاره پی با شعار « راهکار جامع پرداخت کسب و کارها »، هدف اصلی خود را ارائه ساده‌ترین راهکارهای
                    انتقال وجه
                    آنلاین در امن‌ترین بستر ممکن قرار داده است.</p>
            </div>

            <div css={popularContainer}>
                <PageTitle title={"پر بازدید ترین سرویس ها"}/>
                <div css={popularServices}>
                    <Link>
                        <img src={invoice} alt="invoice"/>
                        <span>فاکتور آنلاین</span>
                    </Link>
                    <Link>
                        <img src={application} alt="application"/>
                        <span>اپلیکیشن ها</span>
                    </Link>
                    <Link>
                        <img src={solution} alt="solution"/>
                        <span>راهکار مالی</span>
                    </Link>
                    <Link>
                        <img src={API} alt="API"/>
                        <span>وب سرویس ها</span>
                    </Link>
                    <Link>
                        <img src={organization} alt="organization"/>
                        <span>سرویس سازمانی</span>
                    </Link>
                </div>

            </div>


        </section>
    );
}

export default AboutUs;
