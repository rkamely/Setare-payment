/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {jsx, css} from '@emotion/react'
import * as Variable from '../../Constants/Variables';
import {FiUpload} from "react-icons/fi"
import uploadPic1 from "../../Assets/Img/Image upload-1.svg"
import uploadPic2 from "../../Assets/Img/Image upload-2.svg"


const upload = css`

`
const pageHint = css`
  margin-top: 50px;
  @media (max-width: 768px) {
    h3 {
      font-size: 1rem;
    }

    h6 {
      font-size: .75rem;
      font-weight: 100;
    }
  }
`
const uploadContainer = css`
  display: flex;
  flex-direction: row;
  margin: 50px auto;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

`
const uploadBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  border: ${Variable.border};
  padding: .5rem;
  transition: .15s ease-in-out;
  color: ${Variable.navFontColor};
  &:hover{
    box-shadow: ${Variable.boxShadow};
    transform: scale(1.01);
  }
  @media (max-width: 768px) {
    width: 40%;
    margin: 1rem auto;


  }
  @media (max-width: 600px) {
    width: 90%;
    margin: 1rem auto;


  }

`
const uploadInput = css`
  cursor: pointer;
  margin: auto;
  height: auto;
  width: 100%;

  input {
    width: 0;
    height: 0;
  }

`
const contentInput = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  > span {
    text-align: center;
    font-size: .6rem;
  }

  > img {
    width: 100%;
    height: 200px;
    @media (max-width: 768px) {
 height: 200px;


    }
  }
`


function UploadDoc() {
    return (
        <div css={upload}>
            <div css={pageHint}>
                <h3>بارگذاری مدارک</h3>
                <h6>لطفا از فرمت های JPG و PNG استفاده فرمایید.</h6>
            </div>
            <div css={uploadContainer}>
                <div css={uploadBox}>
                    <span>تصویر روی کارت ملی</span>
                    <label css={uploadInput}>
                        <input type="file" name="image_reference"/>
                        <div css={contentInput}>
                            <span>عکس با کیفیت مناسب بارگذاری فرمایید.</span>
                            <img src={uploadPic1} alt=""/>
                        </div>
                    </label>
                </div>
                <div css={uploadBox}>
                    <span>تصویر صفحه اول شناسنامه</span>
                    <label css={uploadInput}>
                        <input type="file" name="image_reference"/>
                        <div css={contentInput}>
                            <span>عکس با کیفیت مناسب بارگذاری فرمایید.</span>
                            <img src={uploadPic2} alt=""/>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default UploadDoc;
