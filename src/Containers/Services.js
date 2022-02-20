/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import * as Variable from '../Constants/Variables';
import {jsx, css, keyframes} from '@emotion/react';
import {Link} from "react-router-dom"
import pic1 from '../Assets/Card/image-intro-1.jpg'
import pic2 from '../Assets/Card/image-intro-4.jpg'
import pic3 from '../Assets/Card/startup-image-1.jpg'
import pic4 from "../Assets/Card/startup-image-5.jpg"
import {BsArrowRight} from "react-icons/bs"

const cardSection = css`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 70px 10px;
  flex-wrap: wrap;

`
const card = css`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  margin: 20px auto;
  width: 23%;
  height: 400px;
  border: ${Variable.border};
  border-radius: ${Variable.radius};
  box-shadow: ${Variable.boxShadow};
  cursor: pointer;
  overflow: hidden;
  position: relative;


  &:hover > img {
    filter: grayscale(0);
    transform: scale(1.1);
  }

  &:hover button {
    bottom: 0;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: grayscale(1);
    transition: .5s;
    overflow: hidden;

  }

  > div {
    height: 50%;
    z-index: 1000;
    background-color: #FFFFFF;
    padding: 10px ;
    >*{
      margin: 5px auto;
    }

  }

  > button {
    position: absolute;
    bottom: -40px;
    z-index: 2000;
    width: 100%;
    border: 0;
    height: 40px;
    background-color: #eb812582;
    color: #FFFFFF;
    transition: .5s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover > :nth-child(1) {
      transform: scale(1)
    }

    > * {
      color: #ffffff;
    }

    > :nth-child(1) {
      font-size: 15px;
      transform: scale(0);
      transition: .5s;
    }

    a {
      text-decoration: none;
      padding: 0 5px;
    }
  }

`

function Services() {

    return (
        <React.Fragment>
            <section css={cardSection}>
                <div css={card}>
                    <img src={pic1} alt=""/>
                    <div>
                        <h3>ثبت درگاه شخصی</h3>
                        <h6>شما میتوانید در قابل های میتب یندیبر ندی نبئدیسمنب بند نززین سیمدزئ سم مئدز</h6>
                    </div>
                    <button>
                        <BsArrowRight/>
                        <Link>اطلاعات بیشتر</Link>
                    </button>
                </div>
                <div css={card}>
                    <img src={pic2} alt=""/>
                    <div>
                        <h3>تسهیم چند حساب</h3>
                        <h6>شما میتوانید در قابل های میتب یندیبر ندی نبئدیسمنب بند نززین سیمدزئ سم مئدز</h6>
                    </div>

                    <button>
                        <BsArrowRight/>
                        <Link>اطلاعات بیشتر</Link>
                    </button>
                </div>
                <div css={card}>
                    <img src={pic3} alt=""/>
                    <div>
                        <h3>پلتفرم های مختلف</h3>
                        <h6>شما میتوانید در قابل های میتب یندیبر ندی نبئدیسمنب بند نززین سیمدزئ سم مئدز</h6>
                    </div>
                    <button>
                        <BsArrowRight/>
                        <Link>اطلاعات بیشتر</Link>
                    </button>
                </div>
                <div css={card}>
                    <img src={pic4} alt=""/>
                    <div>
                        <h3>چند درگاهی</h3>
                        <h6>شما میتوانید در قابل های میتب یندیبر ندی نبئدیسمنب بند نززین سیمدزئ سم مئدز</h6>
                    </div>
                    <button>
                        <BsArrowRight/>
                        <Link>اطلاعات بیشتر</Link>
                    </button>
                </div>
            </section>
        </React.Fragment>
    )
        ;
}

export default Services;
