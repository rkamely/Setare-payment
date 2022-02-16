/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {BrowserRouter, Switch} from 'react-router-dom';

function Routes() {
    const Home = React.lazy(() =>
        import('./../Pages/Home'));
    const HeaderAndFooter = React.lazy(() =>
        import('./../HOC/HeaderAndFooter'));

    return (
        <React.Fragment>
            <BrowserRouter>
                <React.Suspense fallback={
                    <div>Loading...</div>
                }>
                    <Switch>
                        <HeaderAndFooter exact path="/" component={Home}/>
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Routes;
