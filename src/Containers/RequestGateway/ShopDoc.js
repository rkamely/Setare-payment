/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import {jsx, css} from '@emotion/react'
import * as Variable from '../../Constants/Variables';
import FormInput from "../../Components/Input/FormInput";
import FormButton from "../../Components/Button/FormButton";
import uploadLogo from "../../Assets/Img/Image upload-logo.svg"
import uploadPic1 from "../../Assets/Img/Image upload-1.svg";

const shopDocuments = css`
  margin: auto;

`
const pageHint = css`
  margin-top: 50px;
`
const shopInfo = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin: auto;

  > * {
    width: 45%;
    margin: .5rem auto;
  }

  > select {
    appearance: none;
    padding: 1rem;
    outline: none;
    border: ${Variable.border};
    transition: all .5s;
    border-radius: ${Variable.radius};
    cursor: pointer;
    position: relative;


  }

`
const accountInfo = css`
  input {
    width: 98%;
    margin-top: 1rem;
  }
`
const taxInfo = css`
  input {
    width: 98%;
    margin-top: 1rem;
  }
`
const uploadBox = css`
  border: ${Variable.border};
  padding: .5rem;
  margin: .5rem;
  transition: .15s ease-in-out;
  color: ${Variable.navFontColor};

  &:hover {
    box-shadow: ${Variable.boxShadow};
    transform: scale(1.01);
  }

`
const uploadInput = css`
  cursor: pointer;
  margin: auto;
  height: auto;

  input {
    display: none;
  }

  > img {
    width: 100%;
    height: 150px;
  }
`


function ShopDoc() {
    const [code, setCode] = useState(true)
    const handlerCode = () => {
        setCode(false)
    }
    return (
        <div css={shopDocuments}>
            <div css={pageHint}>
                <h3> درخواست درگاه پرداخت </h3>
                <h6>لطفا اطلاعات را صحیح وارد نمایید.</h6>
            </div>
            <section css={shopInfo}>
                <FormInput type={"text"} placeholder={"نام فروشگاه به فارسی"}/>
                <FormInput type={"text"} placeholder={"نام فروشگاه به انگلیسی"}/>
                <FormInput type={"text"} placeholder={"آدرس وب سایت"}/>
                <FormInput type={"text"} placeholder={"آدرس Call Back"}/>
                <FormInput type={"text"} placeholder={"ایمیل فروشگاه"}/>
                <FormInput type={"text"} placeholder={"شماره تلفن ثابت"}/>
                <FormInput type={"text"} placeholder={"کد پستی"}/>
                <select onChange={handlerCode} name="cars" id="cars" required>
                    <option value="" disabled selected hidden>کد صنف</option>
                    <option value="volvo">فروشگاه ها و لوازم باغبانی</option>
                    <option value="saab">سازمان های سیاسی</option>
                    <option value="mercedes">مبلمان اداری و تجاری</option>
                    <option value="audi">خدمات حرفو چینی</option>
                </select>

                <select name="cars" id="cars" required disabled={code}>
                    <option value="" disabled selected hidden>کد تکمیلی صنف</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <select name="cars" id="cars" required>
                    <option value="" disabled selected hidden>نوع مالکیت</option>
                    <option value="volvo">اجاره ای</option>
                    <option value="saab">مالک</option>
                </select>
                <FormInput type={"text"} placeholder={"شماره قرارداد اجاره"}/>
                <FormInput type={"text"} placeholder={"تاریخ اتمام قرارداد اجاره"}/>
            </section>
            <section>
                <div css={pageHint}>
                    <h3> بارگذاری لوگوی فروشگاه </h3>
                    <h6>فرمت JPG یا PNG برای تصاویر قابل قبول می‌باشد.</h6>
                </div>
                <div css={uploadBox}>
                    <label css={uploadInput}>
                        <input type="file" name="image_reference"/>
                        <img src={uploadLogo} alt=""/>
                    </label>
                </div>
            </section>
            <section css={accountInfo}>
                <div css={pageHint}>
                    <h3> اطلاعات حساب </h3>
                    <h6>شماره شبای بانکی خود را اعلام فرمایید</h6>
                </div>
                <FormInput type={"text"} placeholder={"شماره شبای بانکی"}/>
            </section>
            <section css={taxInfo}>
                <div css={pageHint}>
                    <h3> کد رهگیری مالیاتی </h3>
                    <h6>برای نهایی کردن ثبت نام و دریافت درگاه پرداخت طبق قوانین شاپرک الزامی است که کد رهگیری مالیاتی
                        داشته باشید.</h6>
                </div>
                <FormInput type={"text"} placeholder={"کد رهگیری مالیاتی"}/>
                <div css={pageHint}>
                    <h3>کد رهگیری مالیاتی ندارم و تمایل دارم از طریق دیجی‌پی نسب به دریافت آن اقدام کنم.</h3>
                    <h6>برای اینکه بتوانید نسبت به دریافت کد رهگیری مالیاتی اقدام کنید باید تمامی اطلاعات مربوط به مراحل
                        قبل و این مرحله را به صورت کامل وارد کنید.</h6>
                </div>
                <FormButton content={"دریافت کد رهگیری مالیاتی"}/>
            </section>
            <section>

            </section>
        </div>
    );
}

export default ShopDoc;
