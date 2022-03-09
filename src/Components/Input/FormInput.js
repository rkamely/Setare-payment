/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../Constants/Variables';


const formInput = css`
  padding: 1rem;
  outline: none;
  border: ${Variable.border};
  transition: all .5s;
  border-radius: ${Variable.radius};

  &:focus {
    box-shadow: ${Variable.boxShadow};
    border: ${Variable.activeBorder};

  }
`


function FormInput({type, placeholder}) {

    return (
        <React.Fragment>
            <input css={formInput} type={type} placeholder={placeholder}/>
        </React.Fragment>
    );
}

export default FormInput;
