/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {jsx, css} from '@emotion/react'
import * as Variable from '../../Constants/Variables';
import FormInput from "../../Components/Input/FormInput";
import PageTitle from "../PageTitle";

const identifying = css`

`
const pageHint = css`
  margin-top: 50px;
`
const inputs = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto;
  //@media (max-width: 500px) {
  //  background-color: green;
  //}
  > * {
    width: 45%;
    margin: .5rem;

  }
`

function Identifying() {
    return (
        <div css={identifying}>
            <div css={pageHint}>
                <h3>اطلاعات اولیه</h3>
                <h6>لطفا اطلاعات را صحیح وارد نمایید.</h6>
            </div>
            <main css={inputs}>
                <FormInput type={"text"} placeholder={"نام به فارسی"}/>
                <FormInput type={"text"} placeholder={"نام خانوادگی به فارسی"}/>
                <FormInput type={"text"} placeholder={"کد ملی"}/>
                <FormInput type={"text"} placeholder={"تاریخ تولد"}/>
                <FormInput type={"text"} placeholder={"نام به انگلیسی"}/>
                <FormInput type={"text"} placeholder={"نام خانوادگی به انگلیسی"}/>
                <FormInput type={"text"} placeholder={"نام پدر به فارسی"}/>
                <FormInput type={"text"} placeholder={"نام پدر به انگلیسی"}/>
                <FormInput type={"text"} placeholder={"شماره موبایل"}/>
                <FormInput type={"text"} placeholder={"شماره تلفن ثابت"}/>
            </main>
        </div>
    );
}

export default Identifying;
