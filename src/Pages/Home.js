/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {jsx, css} from '@emotion/react'
import * as Variable from '../Constants/Variables';
import VideoHomePage from "../Containers/VideoHomePage";
import Services from "../Containers/Services"
import Slogan from "../Containers/Slogan"
import Features from "../Containers/Features";


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
                <Slogan/>
                <Features/>
            </main>
        </React.Fragment>
    );
}

export default Home;
