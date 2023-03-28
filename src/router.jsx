import {
    createBrowserRouter,
    RouterProvider,
}
    from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutUsPage from './pages/AboutUsPage';
import Cart from './components/CartAPI';
import Pagination from './components/Pagination/Pagination';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';

const routerContext = createBrowserRouter([
    {
        path: '/',
        element: <HomePage></HomePage>
    },
    {
        path: '/Home',
        element: <HomePage></HomePage>
    },
    {
        path: '/Login',
        element: <Login></Login>
    },
    {
        path: '/SignUp',
        element: <SignUp></SignUp>
    },
    {
        path: "/Product",
        element: <ProductPage></ProductPage>
    },
    {
        path: "/AboutUs",
        element: <AboutUsPage></AboutUsPage>
    },
    {
        path: "/Cart/:userId",
        element: <Cart></Cart>

    },
    {
        path: "/Pagination",
        element: <Pagination></Pagination>
    }

])

function router() {
    return (
        <RouterProvider router={routerContext}>
        </RouterProvider>
    )
}
export default router;