import React from "react";
import {Route} from "react-router-dom";
import News from "../Containers/HOCHeader/News";
import Header from "../Containers/HOCHeader/Header";
import Footer from "../Containers/HOCHeader/Footer";


export default function HeaderAndFooter({component: Component, ...rest}) {

    return (
        <Route {...rest} render={matchProps => (
            <main className='ٌWrapper'>
                <News/>
                <Header/>
                <Component {...matchProps}/>
                <Footer/>
            </main>
        )}/>
    )
}