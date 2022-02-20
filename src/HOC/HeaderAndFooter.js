import React from "react";
import {Route} from "react-router-dom";
import News from "../Containers/News";
import Header from "../Containers/Header";


export default function HeaderAndFooter({component: Component, ...rest}) {

    return (
        <Route {...rest} render={matchProps => (
            <main className='ٌWrapper'>
                {/*<News/>*/}
                <Header/>
                <Component {...matchProps}/>
            </main>
        )}/>
    )
}