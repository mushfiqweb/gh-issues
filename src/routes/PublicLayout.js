import Layout from 'containers/Layout';

// function PublicLayout({ children }) {
//     const { push } = useHistory();

//     const redirectToLogin = () => push(paths.LOGIN);

//     return (
//         <Layout onLogoClick={redirectToLogin} publicPage>
//             {children}
//         </Layout>
//     );
// }

function PublicLayout({ children }) {
    return <Layout >{children}</Layout>;
}

export default PublicLayout;
