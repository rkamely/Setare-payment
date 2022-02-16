/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {jsx, css} from '@emotion/react'
import VideoHomePage from "../Containers/VideoHomePage";
import Services from "../Containers/Services"
const backgroundHome = css`

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
            </main>
        </React.Fragment>
    );
}

export default Home;
