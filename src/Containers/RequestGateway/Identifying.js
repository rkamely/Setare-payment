/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import {jsx, css} from '@emotion/react'
import * as Variable from '../../Constants/Variables';
import FormInput from "../../Components/Input/FormInput";
import FormButton from "../../Components/Button/FormButton";
import IdentifyingValidation from "./IdentifyingValidation";

const identifying = css`
  button {
    margin-top: 4rem;
    width: 8rem;
  }
`
const pageHint = css`
  margin-top: 50px;

  h6 {
    font-weight: 100 !important;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }

    h6 {
      font-size: .75rem;
    }
  }
`
const inputs = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 20px auto;

  > * {
    width: 45%;
    margin: .5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    > * {
      width: 90%;
    }
  }
`

function Identifying({handleNext}) {
    const [identify, setIdentify] = useState({
        firstName: "",
        lastName: "",
        nationalId: "",
        birthDay: "",
        enFirstName: "",
        enLastName: "",
        fatherName: "",
        enFatherName: "",
        mobile: "",
        phone: "",
    })
    let initialStateError = {
        firstName: "",
        lastName: "",
        nationalId: "",
        birthDay: "",
        enFirstName: "",
        enLastName: "",
        fatherName: "",
        enFatherName: "",
        mobile: "",
        phone: "",
    }
    const [error, setError] = useState(initialStateError)
    const [complete, setComplete] = useState(false)
    const inputOnchange = (value, property) => {
        setIdentify({
            ...identify,
            [property]: value,
        })
    }
    const formIdentifyHandler = (e) => {
        e.preventDefault()
        IdentifyingValidation(identify)
            .then((resolve)=>handleNext(resolve))
            .catch((err) => setError(err))
    }

    return (
        <div css={identifying}>
            <div css={pageHint}>
                <h3>اطلاعات اولیه</h3>
                <h6>لطفا اطلاعات را صحیح وارد نمایید.</h6>
            </div>
            <form onSubmit={formIdentifyHandler} action="" method="" css={inputs}>
                <FormInput type={"text"} placeholder={"نام به فارسی"} inputOnchange={inputOnchange}
                           property={"firstName"} error={error.firstName}/>
                <FormInput type={"text"} placeholder={"نام خانوادگی به فارسی"} inputOnchange={inputOnchange}
                           property={"lastName"} error={error.lastName}/>
                <FormInput type={"text"} placeholder={"کد ملی"} inputOnchange={inputOnchange}
                           property={"nationalId"} error={error.nationalId}/>
                <FormInput type={"text"} placeholder={"تاریخ تولد"} inputOnchange={inputOnchange}
                           property={"birthDay"} error={error.birthDay}/>
                <FormInput type={"text"} placeholder={"نام به انگلیسی"} inputOnchange={inputOnchange}
                           property={"enFirstName"} error={error.enFirstName}/>
                <FormInput type={"text"} placeholder={"نام خانوادگی به انگلیسی"} inputOnchange={inputOnchange}
                           property={"enLastName"} error={error.enLastName}/>
                <FormInput type={"text"} placeholder={"نام پدر به فارسی"} inputOnchange={inputOnchange}
                           property={"fatherName"} error={error.fatherName}/>
                <FormInput type={"text"} placeholder={"نام پدر به انگلیسی"} inputOnchange={inputOnchange}
                           property={"enFatherName"} error={error.enFatherName}/>
                <FormInput type={"text"} placeholder={"شماره موبایل"} inputOnchange={inputOnchange}
                           property={"mobile"} error={error.mobile}/>
                <FormInput type={"text"} placeholder={"شماره تلفن ثابت"} inputOnchange={inputOnchange}
                           property={"phone"} error={error.phone}/>
                <FormButton content={"ثبت اطلاعات"} type={"submit"}/>
            </form>
        </div>
    );
}

export default Identifying;
