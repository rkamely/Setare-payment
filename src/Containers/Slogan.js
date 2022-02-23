/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react'
import slogan from "../Assets/Img/Hexagon.svg";
import * as Variable from '../Constants/Variables';

const bgSloganCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-image: url(${slogan});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${Variable.sloganColor};

  h1 {
    font-size: 4rem !important;
    @media (max-width: 768px) {
      font-size: 1.8rem !important;
    }
  }

  h4 {
    font-size: 1.2rem !important;
    margin-top: 2rem;
  }

`

function Slogan() {

    return (
        <React.Fragment>
            <div css={bgSloganCss}>
                <h1>ستاره اول همراه در پرداخت</h1>
                <h4>از بزرکترین ارائه دهندگان خدمات پرداخت یاری </h4>
            </div>
        </React.Fragment>
    );
}

export default Slogan;
