import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Home from "../components/Home";
import Admin from "../components/Admin";
import User from "../components/User";
import Layout from "../components/Layout.jsx";

const RouterData = () => {
    const users = {
        registered: "Registered",
        public: 'public',
        admin: 'admin'
    }
    const current_user = users.registered;

    const strictRoute = createBrowserRouter(
        [
            {
                path: '/',
                element: <Layout current_user={current_user} />,
                errorElement: <Error />,
                children: [
                    {
                        index: true, //indicates the same path
                        element: <Home />,
                    },
                    {
                        path: 'admin',
                        element: <Admin current_user={current_user} />,
                    },
                    {
                        path: 'user',
                        element: <User current_user={current_user} />,
                    },
                ]
            }
        ]
    )
    return strictRoute;
}

export default RouterData;
