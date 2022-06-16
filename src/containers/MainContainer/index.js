import {useState} from "react";
import {Prompt} from "react-router-dom";
import Header from "../../components/Header";
import AppRoutes from "../../routes/AppRoutes";
import Menu from "../../components/Menu";
import {CSSTransition} from "react-transition-group";
import '../../design-system/assets/css/transitions.scss';

const MainContainer = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const handleRouteChange = () => setIsMenuOpened(false);
    const handleClickMenu = () => setIsMenuOpened(!isMenuOpened);

    return (
        <>
            <Prompt message={handleRouteChange} />

            <CSSTransition in={isMenuOpened} timeout={400} classNames='default-transition' unmountOnExit><Menu /></CSSTransition>
            <Header onClickMenu={handleClickMenu} isMenuOpened={isMenuOpened} />
            <AppRoutes />

        </>
    );

};

export default MainContainer;
