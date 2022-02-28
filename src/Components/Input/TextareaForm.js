/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../Constants/Variables';

const textareaForm = css`
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


function TextareaForm({name,id,row,column,placeholder}) {

    return (
        <React.Fragment>
                <textarea css={textareaForm} name={name} id={id} rows={row}
                          placeholder={placeholder}/>
        </React.Fragment>
    );
}

export default TextareaForm;
