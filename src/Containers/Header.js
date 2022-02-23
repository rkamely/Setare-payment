/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useEffect, useState} from "react";
import * as Variable from '../Constants/Variables';
import {jsx, css} from '@emotion/react';
import logo from '../Assets/Img/01 - SetareAval.png'
import Telephone from '../Assets/Img/telephone-call.png'
import Search from '../Assets/Img/Search.png'
import LogoutIcon from "../Assets/Img/LogoutIcon.png"
import LinkMenu from "../Components/Link/LinkMenu";
import NavIcon from "../Components/Button/NavIcon";
import NavRequestBtn from "../Components/Button/NavRequestBtn";
import HamburgerMenu from "../Components/Button/HamburgerMenu";

const navClass = display => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 10px;
  background-color: ${Variable.navBg};
  border-bottom: ${Variable.border};
  border-top: ${Variable.border};
  z-index: 5000;
  position: ${display ? "fixed" : "block"};
  top: 0;
  width: 100%;
  @media (max-width: 768px) {
    position: fixed;
  }
}
`
const bgHamburgerBtn = (open) => css`
  display: none;
  @media (max-width: 768px) {
    display: ${open ? "block" : "none"};
    position: absolute;
    background: transparent;
    width: 100%;
    height: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
  }
`
const menuBtnClass = (open) => css`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  transition: all 1s ease-in-out;
  @media (max-width: 768px) {
    background-color: #FFFFFF;
    display: ${open ? "flex" : "none"};
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 4.9rem;
    z-index: 3000;
    width: 20%;
  }
  @media (max-width: 600px) {
    width: 30%;
  }

  > * {
    padding: 0 10px;
    @media (max-width: 768px) {
      border-bottom: 1px solid #DCE0ECFF ;
      width: 100%;
    }
  }

  > img {
    height: 60px;
    width: 80px;
    @media (max-width: 768px) {
      display: none;
    }
  }
`
const actionBtnClass = css`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 70%;

  }

  > * {
    &:hover {
      cursor: pointer;
    }
  }

  > div {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

  }
`

function Header() {

    const [display, setDisplay] = useState(false)
    window.onscroll = function () {
        myFunction()
    };

    function myFunction() {
        if (window.pageYOffset >= 50) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }

    const [open, setOpen] = useState(false)
    return (
        <React.Fragment>
            <header id="Header" css={navClass(display)}>
                <div onClick={() => setOpen(!open)}>
                    <HamburgerMenu open={open}/>
                    <div onClick={() => setOpen(false)} css={bgHamburgerBtn(open)}/>
                </div>
                <div css={menuBtnClass(open)}>
                    <img src={logo} alt="Stereh Avval Logo"/>
                    <LinkMenu menuName={"صفحه اصلی"}/>
                    <LinkMenu menuName={"سرویس ها"}/>
                    <LinkMenu menuName={"ویژگی ها"}/>
                    <LinkMenu menuName={"درباره ما"}/>
                </div>
                <div css={actionBtnClass}>
                    <NavRequestBtn/>
                    <div>
                        <NavIcon source={Search} alt={"Search"} href={"#"}/>
                        <NavIcon source={Telephone} alt={"Phone"} href={"tel:+989199001193"}/>
                        <NavIcon source={LogoutIcon} alt={"Login"} href={"#"}/>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;
