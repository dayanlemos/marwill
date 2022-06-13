import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Typography from "../../design-system/components/Typography";
import './Menu.scss';
import Card from "../../design-system/components/Card";
import {localFetch} from "../../utils/dataFetching";
import MarwillModal from "../Modal";

const Menu = () => {
    const history = useHistory();
    const [menuItems, setMenuItems] = useState([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        localFetch({fileName: 'menu-items'}).then((data) => {
            setMenuItems(data.results);
        });
    }, []);

    const handleCardClick = (item) => {
        setSelectedMenuItem(item);
        setModalIsOpen(true);
    };

    return (
        <>
            <div className='menu-container'>
                <div className='menu-content'>
                    <div className='menu-cards'>
                        {menuItems?.map((item) => <Card width={200} height={276} item={item} onClick={handleCardClick} />)}
                    </div>
                </div>

                <div className='menu-footer'>
                    <div role='button' className='menu-button-see-more' onClick={() => history.push('/list')}>
                        <div style={{ cursor: 'pointer' }}>
                            <img src='assets/images/dots.png' width='10px' />
                            <Typography style={{ marginLeft: 10 }}>Ver todos</Typography>
                        </div>

                    </div>
                </div>
            </div>
            <MarwillModal isOpen={modalIsOpen} item={selectedMenuItem} onClose={() => setModalIsOpen(false)} />
        </>

    );
};

export default Menu;
