import { Fragment } from 'react';
import Body from './Body';
import Header from './Header';

function Layout({ children }) {
    return (
        <Fragment>
            <Header />
            <Body>{children}</Body>
        </Fragment>

    );
}

export default Layout;
