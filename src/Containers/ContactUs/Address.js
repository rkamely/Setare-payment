/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from '../../Constants/Variables';



const addressBox = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  height: 15rem;
  overflow: hidden;
  border: ${Variable.border};
  border-radius: ${Variable.radius};
  box-shadow: ${Variable.boxShadow};
  width: 95%;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-top: 1rem;
  }

  > img {
    width: 8rem;
    height: 8rem;
    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }

  > div {
    width: 30%;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;

    }
  }

  > a {
    width: 40%;
    display: flex;
    object-fit: cover;
    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }

    > img {
      width: 100%;
    }
  }
`


function Address({mainImg, altMainImg, address, phone, fax, postalCode, email, map, altMap, mapHref}) {

    return (
        <React.Fragment>
            <div css={addressBox}>
                <img src={mainImg} alt={altMainImg}/>
                <div>
                    <div>{address}</div>
                    <div>
                        <div>{phone}</div>
                        <div> {fax}</div>
                        <div> {postalCode}</div>
                        <div>{email}</div>
                    </div>
                </div>
                <a href={mapHref}>
                    <img src={map} alt={altMap}/>
                </a>
            </div>
        </React.Fragment>
    );
}

export default Address;
