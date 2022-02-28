/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import * as Variable from '../../Constants/Variables';
import {jsx, css, keyframes} from '@emotion/react';
import Video from '../../Assets/Videos/Video.mp4'

const videoTextForward = keyframes`
  0% {
    transform: translateX(calc(100vh + 300px));
  }
  16%, 100% {
    translateX(0)
  }
`
const videoTextBackward = keyframes`
  0% {
    transform: translateX(calc(-100vh - 300px));
  }
  16%, 100% {
    translateX(0)
  }
`
const videoSectionClass = css`
  position: relative;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  @media (max-width: 768px) {
    margin-top: 5rem ;
  }
`
const videoClass = css`
  width: 98%;
  object-fit: cover;
  filter: blur(3px) brightness(30%);
  overflow: hidden;
  height: 80vh ;
  @media (max-width: 768px) {
    height: 88vh;
  }
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
    animation: ${videoTextForward} 2s forwards;
    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  h4 {
    animation: ${videoTextBackward} 2s forwards;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
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
    );
}

export default VideoHomePage;
