/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useEffect, useState} from "react";
import {jsx, css} from '@emotion/react'
import * as Variable from '../Constants/Variables';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Identifying from "../Containers/RequestGateway/Identifying";
import UploadDoc from "../Containers/RequestGateway/UploadDoc";
import ShopDoc from "../Containers/RequestGateway/ShopDoc";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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
const alertMui = css`
  direction: ltr !important;

  button {
    display: none;
  }
`
const steps = ['احراز هوبت', 'آپلود مدارک', 'اطلاعات فروشگاه'];

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function RequestGateway() {

    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleNext = (resolve) => {
        if (resolve) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
            handleClick()
        }
        window.scrollTo(0, 0)
    };


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
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} transitionDuration={1000}>
                <Alert css={alertMui} onClose={handleClose} severity="success"
                       sx={{width: '100%', backgroundColor: ''}}>
                    اطلاعات شما با موفقیت ثبت شد.
                </Alert>
            </Snackbar>
        </div>
    )
        ;
}

export default RequestGateway;
