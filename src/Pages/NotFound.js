/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../Constants/Variables';
import notFound from "../Assets/Img/404 error.svg"


function NotFound() {
    const notFoundCss = css`
      display: flex;
      justify-content: center;
      width: 90%;
      margin: auto;
      position: relative;

      > img {
        height: calc(100vh - 90px);
      }

      h1 {
        position: absolute;
        top: 10px;
      }
    `
    return (

        <section css={notFoundCss}>
            <h1>این صفحه موجود نمی باشد</h1>
            <img src={notFound} alt="این صفحه وجود ندارد"/>
        </section>
    );
}

export default NotFound;
