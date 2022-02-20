/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import * as Variable from '../Constants/Variables';
import {jsx, css, keyframes} from '@emotion/react';
import {Link} from "react-router-dom"
import Video from '../Assets/Videos/Video.mp4'
import Telephone from '../Assets/Img/telephone-call.png'
import Search from '../Assets/Img/Search.png'
import LogoutIcon from "../Assets/Img/LogoutIcon.png"

import '../Constants/Mixin.scss'

const videoTextForward = keyframes
    `
      0% {
        right: -10%;
      }
      16%,100% {
        right: 43%;
      }
    `
const videoTextBackward = keyframes
    `
      0% {
        right: 100%;
      }
      16% ,100%{
        right: 36%;
      }
    `

const videoSectionClass = css`
  position: relative;
  background-color: #000000;
  border-radius: ${Variable.radius};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;


`

const videoClass = css`
  height: calc (100vh - 170px);
  width: 98%;
  object-fit: cover;
  filter: blur(3px) brightness(40%);
  overflow: hidden;


`
const textVideoClass = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  position: absolute;
  width: 100%;
  height: 100%;


  > * {
    white-space: nowrap;
  }

  h1 {
    animation: ${videoTextForward} 5s forwards;
    position: absolute;
    top: 35%;

  }

  h4 {
    animation: ${videoTextBackward} 5s forwards;
    position: absolute;
    top: 45%;

  }
`


function VideoHomePage() {

    return (
        <React.Fragment>
            <section css={videoSectionClass}>
                <video css={videoClass} src={Video} type="video/mp4" autoPlay="autoplay" loop="loop" muted="muted">
                    مرورگر
                    شما امکان پخش این ویدئو را
                    ندارد
                </video>
                <div css={textVideoClass}>
                    <h1>ستاره اول</h1>
                    <h4> پیش رو در ازائه خدمات پرداخت یاری</h4>
                </div>
            </section>

        </React.Fragment>
    )
        ;
}

export default VideoHomePage;
