import { useContext } from "react";
import navigationContext from "../context/Navigation";
function Route({ path, children }) {
    const { currentPath } = useContext(navigationContext);
    if (currentPath === path) {
        return children;
    }

    return null;
}

export default Route;