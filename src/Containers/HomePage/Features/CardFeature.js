/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react'


const featureCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  box-shadow: 0 30px 50px -3px #cfdae5;
  background-color: #FFFFFF;
  padding: 3rem 0;

  @media (max-width: 768px) {
    width: 80%;
    margin: 1.2rem auto;

  }

  img {
    width: 8rem;
    height: 8rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      width: 12rem;
      height: 12rem;
    }
  }

  h4 {
    display: flex;
    align-items: center;
    width: auto;
    height: 40px;
    margin-top: 20px;
    text-align: center;
    line-height: 33px;
    white-space: nowrap;
    @media (max-width: 768px) {
  font-size: 1.2rem;
    }
  }

  h6 {
    width: 80%;
    margin-bottom: 2rem!important;
    padding: 0 1.5rem;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: .8rem;
    }
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

function CardFeature(props) {
    return (
        <React.Fragment>
            <div css={featureCss}>
                <img src={props.icon} alt={props.alt}/>
                <h4>{props.title}</h4>
                <h6>{props.description}</h6>
                {/*<div css={pulseBtnCss}/>*/}
            </div>
        </React.Fragment>
    );
}

export default CardFeature;
