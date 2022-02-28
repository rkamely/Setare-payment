/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../Constants/Variables';
import Mobile from "../../Assets/Img/contactUsMobilePhone.png"
import WhatsApp from "../../Assets/Img/contactUsWhatsapp.png"
import Instagram from "../../Assets/Img/contactUsInstagram.png"
import Telegram from "../../Assets/Img/contactUsTelegram.png"
import contactUsAnim from "../../Assets/Gifs/contactUs.gif"


const fastContact = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  > * {
    padding: .5rem;
    margin: 1rem auto;
  }

  > img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    margin: 0;
    padding: 0;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 3rem;

    > a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 90%;
      cursor: pointer;
      transition: .25s;
      color: ${Variable.navFontColor};

      span {
        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }

      &:hover {
        box-shadow: ${Variable.boxShadow};
      }

      > img {
        margin: auto 15%;
        width: 3rem;
        height: 3rem;
        @media (max-width: 768px) {
          margin: auto 5%;
        }
      }
    }
  }
`

function FastContact() {

    return (
        <React.Fragment>
                    <div css={fastContact}>
                        <img src={contactUsAnim} alt="Contact Us"/>
                        <div>
                            <a href={"tel:+989199001193"}>
                                <img src={Mobile} alt="call us"/>
                            </a>
                            <a href="#">
                                <img src={WhatsApp} alt="whatsapp contact line"/>
                            </a>
                            <a href="#">
                                <img src={Instagram} alt="instagram contact line"/>
                            </a>
                            <a href="#">
                                <img src={Telegram} alt="Telegram contact line"/>
                            </a>
                        </div>
                    </div>

        </React.Fragment>
    );
}

export default FastContact;
