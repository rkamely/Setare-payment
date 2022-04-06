/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import * as Variable from '../../../Constants/Variables';
import {jsx, css} from '@emotion/react';
import {Link} from "react-router-dom"


import {BsArrowRight} from "react-icons/bs"

const card = css`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  margin: 20px auto;
  width: 23%;
  height: 450px;
  border: ${Variable.border};
  border-radius: ${Variable.radius};
  box-shadow: ${Variable.boxShadow};
  cursor: pointer;
  overflow: hidden;
  position: relative;
  @media (max-width: 999px) {
    height: 400px;
    width: 45%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }

  &:hover > img {
    filter: grayscale(0);
    transform: scale(1.1);
  }

  &:hover a {
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
    padding: 10px 15px;
    width: 100%;

    > * {
      margin: 5px auto;

    }

    h3 {
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }

    h6 {
      font-weight: 500;
      @media (max-width: 768px) {
        font-size: .7rem;
      }
    }

  }

  > a {
    position: absolute;
    bottom: -60px;
    z-index: 2000;
    width: 100%;
    border: 0;
    height: 60px;
    background-color: #F9A03F;
    color: #FFFFFF;
    transition: .5s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > * {
      color: #ffffff;
    }

    > span {
      position: relative;

      > :nth-child(2) {
        font-size: 1.5rem;
        transform: scaleY(0);
        transition: all .5s;
        position: absolute;
        margin: 0 .5rem;
      }
    }

    &:hover > span :nth-child(2) {
      transform: scaleX(1) rotate(180deg);
    }
  }
`

function CardService(props) {

    return (
       <>
           <div css={card}>
               <img src={props.source} alt={props.alt}/>
               <div>
                   <h3>{props.title}</h3>
                   <h6>{props.description}</h6>
               </div>
               <Link>
                    <span>
                        <span>اطلاعات بیشتر</span>
                        <BsArrowRight/>
                    </span>
               </Link>
           </div>
       </>
    );
}

export default CardService;
