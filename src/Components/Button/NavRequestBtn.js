/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import * as Variable from '../../Constants/Variables';
import {jsx, css} from '@emotion/react';

const requestBtn = css`
  position: relative;
  width: 150px;
  height: 40px;
  cursor: pointer;
  background-color: ${Variable.actionBtnBg};
  border: none;
  transition: all .2s linear;
  color: ${Variable.btnFontColor};
  z-index: 0;
  font-weight: 500;
  @media (max-width: 768px) {
    width: 200px;

  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    left: 0;
    top: 0;
    height: 40px;
    background: #ff6f00;
    transition: .25s linear;
    z-index: 0;
  }

  &:before {
    content: '';
    position: absolute;
    width: 0;
    right: 0;
    top: 0;
    height: 40px;
    background: #ff6f00;
    transition: .25s linear;
    z-index: 0;
  }

  &:hover::after {
    width: 50%;
  }

  &:hover::before {
    width: 50%;
  }

  span {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }
`

function NavRequestBtn(props) {
    return (
        <React.Fragment>
            <button css={requestBtn}>
                <span>{props.title}</span>
            </button>
        </React.Fragment>
    );
}

export default NavRequestBtn;
