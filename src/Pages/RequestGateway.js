/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react'
import * as Variable from '../Constants/Variables';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Identifying from "../Containers/RequestGateway/Identifying";
import UploadDoc from "../Containers/RequestGateway/UploadDoc";
import ShopDoc from "../Containers/RequestGateway/ShopDoc";

const requestGateway = css`
  width: 90%;
  margin: 50px auto;
  @media (max-width: 768px) {
    margin: 7rem auto 3rem auto;
    text-align: center;
  }

  * {
    font-family: IRANSans !important;
  }

  svg {
    margin-left: .25rem;
  }
`
const stepperBtn = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5rem;

  button {
    background-color: ${Variable.level2actionBtnBg};
    color: #FFFFFF;
    padding: .5rem 1rem;
    font-size: 1rem;

    :disabled {
      background-color: gray;
      color: #b0b0b0;

    }

    &:hover {
      background-color: ${Variable.level2actionBtnBgHover};

    }
  }
`
const steps = ['احراز هوبت', 'آپلود مدارک', 'اطلاعات فروشگاه'];

function RequestGateway() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = (resolve) => {
        if(resolve){setActiveStep((prevActiveStep) => prevActiveStep + 1)}
        window.scrollTo(0, 0)

    };
    // const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    //     window.scrollTo(0, 0)
    //
    // };
    return (
        <div css={requestGateway}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    return (
                        <Step key={index}>
                            <StepLabel> {label} </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === 0 ?
                    <Identifying handleNext={handleNext}/> : activeStep === 1 ?
                        <UploadDoc handleNext={handleNext}/> : activeStep === 2 ? <ShopDoc/> : null}

            </div>
            {/*<div css={stepperBtn}>*/}
            {/*    <Button disabled={activeStep === 0} onClick={handleBack}>بازگشت</Button>*/}
            {/*    {activeStep === steps.length - 1 ?*/}
            {/*        <Button >ثبت نهایی</Button> :*/}
            {/*        <Button onClick={handleNext} >مرحله بعدی</Button>*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    );
}

export default RequestGateway;
