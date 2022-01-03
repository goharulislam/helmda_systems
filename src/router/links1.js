import Menu from '../components/Menu.js';
import Home from '../pages/Home.js';
import About from '../pages/About.js';

let a = [
    {
        path: "/",
        exact: true,
        component: () => <Home />,
    },
    {
        path: "/menu",
        exact: true,
        component: () => <Menu />,
    },
    {
        path: "/about",
        exact: true,
        component: () => <About />,
    },
];
export default a;