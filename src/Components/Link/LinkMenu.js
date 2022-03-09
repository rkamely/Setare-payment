/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import * as Variable from '../../Constants/Variables';
import {jsx, css} from '@emotion/react';
import {Link} from "react-router-dom"

const linkMenuCSS = css`
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

`


function LinkMenu({link, menuName}) {
    return (
        <React.Fragment>
            <Link to={link} css={linkMenuCSS}> {menuName} </Link>
        </React.Fragment>
    );
}

export default LinkMenu;
