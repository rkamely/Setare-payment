/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {jsx, css} from '@emotion/react'
import * as Variable from '../Constants/Variables';
import VideoHomePage from "../Containers/HomePage/VideoHomePage";
import Services from "../Containers/HomePage/Services/Services"
import Slogan from "../Containers/Slogan"
import Features from "../Containers/HomePage/Features/Features";


const backgroundHome = css`
  background-image: ${Variable.backgroundColor};

  //@media (max-width: 500px) {
  //  background-color: green;
  //}
`

function Home() {
    return (
        <React.Fragment>
            <main css={backgroundHome}>
                <VideoHomePage/>
                <Services/>
                <Slogan title={"ستاره اول همراه در پرداخت"} description={"از بزرگترین ارائه دهندگان خدمات پرداخت یاری"}
                        height={"400px"}/>
                <Features/>
            </main>
        </React.Fragment>
    );
}

export default Home;
