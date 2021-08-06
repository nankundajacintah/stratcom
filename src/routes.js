import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import PublicRoutes from "./pages/public";
import PagesRenderer from "./pagesRenderer/pages";
import NotFound from "./pages/notfound";
import SignUp from "./pages/signup";

const Home = ()=><div>
    <p>katende Nicolas</p> 
</div>

const Routes = () => {
    return (
        <Router>
            <Switch>
                <PublicRoutes path="/jacinta/:page" exact>
                    <PagesRenderer />

                </PublicRoutes>
                {/*redirect to home */}
                <Route path="/signup" exact>
                    <SignUp />
                </Route>
                <Route
                    path="/"
                    exact
                    render={
                        () => <Redirect to={{ pathname: "jacinta/admin" }} />
                    }
                />
                {/*redirect to home */}
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>

        </Router>

    )
}

export default Routes;