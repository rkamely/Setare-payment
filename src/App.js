/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {Global, css} from '@emotion/react'
import Routes from './Routes/Routes'

const global = (props) => css`
  @font-face {
    font-family: "IRANSans";
    src: local('IRANSans'), url('./Assets/Epilogue-Light.ttf') format('truetype');
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'IRANSans';
    text-decoration: none;
    direction: rtl;

    :after :before {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    h1, h2, h3, h4, h5, h6, p {
      text-align: justify;
    }

    h1 {
      font-size: 3.5vw;
    }

    h2 {
      font-size: 2.2vw;

    }

    h3 {
      font-size: 2vw;
    }

    h4 {
      font-size: 1.8vw;
    }

    h5 {
      font-size: 1.4vw;
    }

    p {
      font-size: 1.8vw;
    }


  }
`

function App() {


    return (
        <React.Fragment>
            <Global styles={global}/>
            <Routes/>
        </React.Fragment>
    );
}

export default App;