/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {BrowserRouter, Switch} from 'react-router-dom';

function Routes() {
    const Home = React.lazy(() =>
        import('./../Pages/Home'));
    const ContactUs = React.lazy(() =>
        import('./../Pages/ContactUs'));
    const RequestGateway = React.lazy(() =>
        import('./../Pages/RequestGateway'));
    const HeaderAndFooter = React.lazy(() =>
        import('./../HOC/HeaderAndFooter'));


    return (
        <React.Fragment>
            <BrowserRouter>
                <React.Suspense fallback={
                    <div>Loading...</div>}>
                    <Switch>
                        <HeaderAndFooter exact path="/" component={Home}/>
                        <HeaderAndFooter exact path="/ContactUs" component={ContactUs}/>
                        <HeaderAndFooter exact path="/RequestGateway" component={RequestGateway}/>
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Routes;
