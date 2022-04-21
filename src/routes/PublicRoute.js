import { Route } from 'react-router-dom';
import PublicLayout from './PublicLayout';

function PublicRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => <PublicLayout>{children}</PublicLayout>}
        />
    );
}

export default PublicRoute;
