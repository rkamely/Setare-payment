/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../Constants/Variables';


const formInput = css`
  padding: 1rem;
  outline: none;
  margin: 1rem .5rem;
  border: ${Variable.border};
  transition: all .5s;
  width: 90%;
  border-radius: ${Variable.radius};

  &:focus {
    box-shadow: ${Variable.boxShadow};
  }
`


function FormInput({type, placeHolder}) {

    return (
        <React.Fragment>
            <input css={formInput} type={type} placeholder={placeHolder}/>
        </React.Fragment>
    );
}

export default FormInput;
