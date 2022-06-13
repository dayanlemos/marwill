import {
    Switch,
    Route,
} from "react-router-dom";
import ListScreen from "../../screens/ListScreen";
import HomeScreen from "../../screens/HomeScreen";

const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/list" children={<ListScreen />} />
            <Route path="/" children={<HomeScreen />}  />
        </Switch>
    );
};

export default AppRoutes;
