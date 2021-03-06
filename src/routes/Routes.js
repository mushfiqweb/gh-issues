import Home from 'pages/Home';
import IssueList from 'pages/IssueList';

import { Switch } from 'react-router-dom';
import path from './paths';

// import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { PageNotFound } from 'utilities';

const Routes = () => {

    return (
        <Switch>
            <PublicRoute exact path={[path.HOME]}>
                <Home />
            </PublicRoute>
            <PublicRoute exact path={path.ISSUELIST}>
                <IssueList />
            </PublicRoute>
            <PublicRoute path="*">
                <PageNotFound />
            </PublicRoute>
        </Switch>
    );
};

export default Routes;
