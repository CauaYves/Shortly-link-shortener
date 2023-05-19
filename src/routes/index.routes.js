import { useRoutes } from "react-router-dom"
import Homepage from "../pages/Homepage"

const Routes = () => {
    return useRoutes([
        {path: "/", element: <Homepage/>},
    ])
}
export default Routes