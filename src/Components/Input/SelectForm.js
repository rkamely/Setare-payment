/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../Constants/Variables';


function SelectForm({inputOnchangeSelect, title, option, required, disabled, property}) {
    return (
        <select onChange={(e) => inputOnchangeSelect(e, property)}
                required={required} disabled={disabled}>
            <option value="" disabled selected hidden>{title}</option>
            {option.map(item => <option value={item.value}>{item.title}</option>)}
        </select>
    );
}

export default SelectForm;
