/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../Constants/Variables';

const FormBtn = css`
  padding: .5rem;
  margin: 1.5rem .5rem;
  border: ${Variable.border};
  cursor: pointer;
  width: 90%;
  background-color: ${Variable.level2actionBtnBg};
  color: ${Variable.btnFontColor};
  transition: .25s;
  border-radius: ${Variable.radius};

  &:hover {
    background-color: ${Variable.level2actionBtnBgHover};
  }
`

function FormButton({content}) {

    return (
        <React.Fragment>
            <button css={FormBtn}>{content}</button>
        </React.Fragment>
    );
}

export default FormButton;
