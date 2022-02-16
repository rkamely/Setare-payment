/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import * as Variable from '../Constants/Variables';
import {jsx, css, keyframes} from '@emotion/react';
import {Link} from "react-router-dom"
import logo from '../Assets/01 - SetareAval.png'
import Telephone from '../Assets/telephone-call.png'
import Search from '../Assets/Search.png'
import LogoutIcon from "../Assets/LogoutIcon.png"

import '../Constants/Mixin.scss'


const navClass = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 10px;
  background-color: ${Variable.navBg};
  border-bottom:  ${Variable.border};
  border-top:${Variable.border} ;
`

const menuBtnClass = css`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;


  > * {
    padding: 0 10px;
  }

  > img {
    height: 60px;
    width: 80px;

  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 40px;
    color: ${Variable.navFontColor};
    font-weight: bold;

    &:after {
      content: '';
      position: absolute;
      transition: .3s;
      width: 0;
      left: 50%;
      bottom: 0;
      height: 3px;
      background: ${Variable.underlineBtn};


    }

    &:hover {
      cursor: pointer;

      &:after {
        width: 100%;
        left: 0;
      }
    }
  }

`
const actionBtnClass = css`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  > * {
    &:hover {
      cursor: pointer;
    }
  }

  > div {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    > img {
      width: 25px;
      height: 25px;
      transition: .1s linear;

      &:hover {
        transform: scale(1.2);
      }
    }

  }
`
const requestBtn = css`
  width: 50%;
  height: 40px;
  cursor: pointer;
  background-color: ${Variable.actionBtnBg};
  border: none;
  border-radius: ${Variable.radiusBtn};
  transition: all .2s linear;
  font-weight: bolder;
  color: ${Variable.btnFontColor};


  &:hover {
    box-shadow: 0 25px 13px -14px #786c6c;
    transform: translateY(-10px);
  }
`


function Header() {


    return (
        <React.Fragment>
            <header css={navClass}>
                <div css={menuBtnClass}>
                    <img src={logo} alt="Stereh Avval Logo"/>
                    <Link> صفحه اصلی</Link>
                    <Link> سرویس ها </Link>
                    <Link> ویژگی ها </Link>
                    <Link> درباره ما </Link>
                </div>
                <div css={actionBtnClass}>
                    <button css={requestBtn}>ثبت درخواست</button>
                    <div>
                        <img src={Search} alt="Contact Us"/>
                        <img src={Telephone} alt="Search"/>
                        <img src={LogoutIcon} alt="Search"/>
                    </div>

                </div>
            </header>
        </React.Fragment>
    )
        ;
}

export default Header;
