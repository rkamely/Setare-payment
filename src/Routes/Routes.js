/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {BrowserRouter, Switch} from 'react-router-dom';
import Loading from "../Containers/Loading";

function Routes() {
    const Home = React.lazy(() =>
        import('./../Pages/Home'));
    const ContactUs = React.lazy(() =>
        import('./../Pages/ContactUs'));
    const RequestGateway = React.lazy(() =>
        import('./../Pages/RequestGateway'));
    const HeaderAndFooter = React.lazy(() =>
        import('./../HOC/HeaderAndFooter'));
    const AboutUs = React.lazy(() =>
        import('./../Pages/AboutUs'));
    const FAQ = React.lazy(() =>
        import('./../Pages/FAQ'));
    const NotFound = React.lazy(() =>
        import('./../Pages/NotFound'));



    return (
        <React.Fragment>
            <BrowserRouter>
                <React.Suspense fallback={
                    <Loading/>}>
                    <Switch>
                        <HeaderAndFooter exact path="/" component={Home}/>
                        <HeaderAndFooter path="/ContactUs" component={ContactUs}/>
                        <HeaderAndFooter path="/RequestGateway" component={RequestGateway}/>
                        <HeaderAndFooter path="/AboutUs" component={AboutUs}/>
                        <HeaderAndFooter path="/FAQ" component={FAQ}/>
                        <HeaderAndFooter component={NotFound}/>
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Routes;
