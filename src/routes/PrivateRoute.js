import { Route, Redirect } from 'react-router-dom';
import store from 'store';
import PrivateLayout from './PrivateLayout';
import path from 'routes/paths';

function PrivateRoute({ children, ...rest }) {
    const access_token = store.get('access_token');

    return (
        <Route
            {...rest}
            render={({ location }) =>
                access_token ? (
                    <PrivateLayout>{children}</PrivateLayout>
                ) : (
                    <Redirect
                        to={{
                            pathname: path.LOGIN,
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
