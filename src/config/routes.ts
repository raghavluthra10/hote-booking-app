import Route from "../interfaces/routes";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const routes: Route[] = [
    {
        path: '/',
        name: 'Home Page',
        exact: true,
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard Page',
        exact: true,
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login Page',
        exact: true,
        component: Login
    }
];

export default routes;