/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react'
import slogan from "../Assets/Img/Hexagon.svg";
import * as Variable from '../Constants/Variables';

const pageTitleCss = (height, description) => css`
  width: 90%;
  border-bottom: ${Variable.border};
  color: ${Variable.sloganColor};
  padding: 0 20px;
  margin: auto;

  h1 {
    font-size: 2rem !important;
    @media (max-width: 768px) {
      font-size: 1.5rem !important;
    }
  }
  
  }

`

function PageTitle({title}) {

    return (
        <React.Fragment>
            <div css={pageTitleCss}>
                <h1>{title}</h1>
            </div>
        </React.Fragment>
    );
}

export default PageTitle;
