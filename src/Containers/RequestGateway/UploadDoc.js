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
`
const uploadContainer = css`
  display: flex;
  flex-direction: row;
  margin: 50px auto;
  justify-content: space-around;
  width: 100%;

`
const uploadBox = css`
  display: flex;
  flex-direction: column;
  width: 40%;
  border: ${Variable.border};
  padding: .5rem;
  transition: .15s ease-in-out;
  color: ${Variable.navFontColor};
  &:hover{
    box-shadow: ${Variable.boxShadow};
    transform: scale(1.01);
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
