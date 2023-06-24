import { useRoutes } from "react-router-dom";
import Default from "./components/layouts/default/Default";

const AppRouter = () => {
    const routes = useRoutes([
        {path: "", element: <Default children="" />}
    ]);
    return routes;
}

export default AppRouter;