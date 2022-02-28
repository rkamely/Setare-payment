/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {jsx, css, keyframes} from '@emotion/react';
import * as Variable from '../../../Constants/Variables';

const animation = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1
  }
  35% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }

`
const mainNews = css`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Variable.bgNews};
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`
const newsClass = css`
  text-align: center;
  animation: ${animation} 2s ease-in-out;
`
const newsLinkClass = css`
  color: ${Variable.fontColor};
  font-size: .8rem;
`


function News() {
    let news = ["توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.", "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.", "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.", "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید.", "توسط فرم زیر می توانید متن ساختگی مورد نظر خود را در واحدهای کاراکتر، کلمه و پاراگراف تولید کنید، سپس آنرا کپی کنید و در کار مورد نظر خود قرار دهید."]
    let autoSlide = 0;

    function autoShowSlides() {
        let i;
        let slide = document.getElementsByClassName("mySlides");
        for (i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";
        }
        autoSlide++;
        if (autoSlide > slide.length) {
            autoSlide = 1
        }
        slide[autoSlide - 1].style.display = "block";
        setTimeout(autoShowSlides, 10000);
    }

    useEffect(() => {
        autoShowSlides();
    }, [])

    return (
        <React.Fragment>
            <div css={mainNews}>
                {news.map(item =>
                    <div className="mySlides" css={newsClass}>
                        <Link css={newsLinkClass}>{item}</Link>
                    </div>)}
            </div>
        </React.Fragment>
    )
        ;
}

export default News;
