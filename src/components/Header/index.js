import Logo from "./components/Logo";
import './Header.scss'
import DropDownMenuButton from "./components/DropDownMenuButton";
import {useHistory} from "react-router-dom";

const Header = ({ isMenuOpened, onClickMenu }) => {
    const history = useHistory();
    return (
        <div className='header-container'>
            <div className='yellow-dash'></div>
            <div className='header-content'>
                <Logo onClick={() => history.push('/')} />
                <DropDownMenuButton isOpened={isMenuOpened} onClick={onClickMenu} />
            </div>
        </div>
    );

}

export default Header;
