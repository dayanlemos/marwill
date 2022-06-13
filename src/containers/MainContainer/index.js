import {useState} from "react";
import {Prompt} from "react-router-dom";
import Header from "../../components/Header";
import AppRoutes from "../../routes/AppRoutes";
import Menu from "../../components/Menu";

const MainContainer = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const handleRouteChange = () => setIsMenuOpened(false);
    const handleClickMenu = () => setIsMenuOpened(!isMenuOpened);

    return (
        <>
            <Prompt message={handleRouteChange} />

            {isMenuOpened && <Menu />}
            <Header onClickMenu={handleClickMenu} isMenuOpened={isMenuOpened} />
            <AppRoutes />

        </>
    );

};

export default MainContainer;
