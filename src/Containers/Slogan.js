/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react'
import ax from "../Assets/Img/Hexagon.svg";

const sloganContainerCSS = css`
  position: relative;
  
  h1{
    position: absolute;
    top: 45%;
    left: 50%;
    transform:translate(-50%,-50%) ;
    color: #FFFFFF;
  }
  h4{
    position: absolute;
    top: 65%;
    left: 50%;
    transform:translate(-50%,-50%) ;
    color: #FFFFFF;

  }
`

const sloganCss = css`
  width: 100%;
  height: 200px;
  background-image: url(${ax});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(2px);
`

function Slogan() {
    return (
        <React.Fragment>
            <div css={sloganContainerCSS}>
                <div css={sloganCss}/>
                <h1>ستاره اول همراه در پرداخت</h1>
                <h4>از بزرکترین ارائه دهندگان خدمات پرداخت یاری </h4>
            </div>

        </React.Fragment>
    );
}

export default Slogan;
