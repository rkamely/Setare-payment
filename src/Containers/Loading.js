/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../Constants/Variables';
import loading from "../Assets/Gifs/mainLoading.gif"


function Loading() {
    const loadingCss = css`
      display: flex;
      justify-content: center;
      height: 100vh;
    `
    return (

        <section css={loadingCss}>
            <img  src={loading} alt="لطفا منتظر بمانید"/>
        </section>
    );
}

export default Loading;
