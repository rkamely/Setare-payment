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
  position: ${display ? 'fixed' : 'block'};
  top: 0;
  width: 100%;
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
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

  }
`

function Header() {

    const [display, setDisplay] = useState(false)

    useEffect(() => {
        if (window.scroll > 50) setDisplay(true)
        else setDisplay(false)
    }, [])
    
    return (
        <React.Fragment>
            <header id="Header" css={navClass(display)}>
                <div css={menuBtnClass}>
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
