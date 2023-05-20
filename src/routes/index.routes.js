import { useRoutes } from "react-router-dom"
import Homepage from "../pages/Homepage"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"

const Routes = () => {
    return useRoutes([
        {path: "/", element: <Homepage/>},
        {path: "/login", element: <Signin/>},
        {path: "/cadastro", element: <Signup/>},
    ])
}
export default Routes