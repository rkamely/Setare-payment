/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import * as Variable from '../../Constants/Variables';
import {jsx, css} from '@emotion/react';
import {Link} from "react-router-dom"
import Search from "../../Assets/Img/Search.png";

const iconNavCSS = css`
  width: 25px;
  height: 25px;
  transition: .1s linear;
`


function NavIcon(props) {


    return (
        <React.Fragment>
            <a href={props.href}><img css={iconNavCSS} src={props.source} alt={props.alt}/></a>
        </React.Fragment>
    );
}

export default NavIcon;
