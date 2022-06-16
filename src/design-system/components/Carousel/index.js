import './Carousel.scss'
import Typography from "../Typography";
import {useEffect, useState} from "react";
import Button from "../Button";
import PropTypes from "prop-types";
import Card from "../Card";

const Carousel = ({ items, onCallAction }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        setSelectedItem(items[0]);
    }, [items]);

    return items.length > 0 && selectedItem ?
        <div className='carousel-container' style={{ backgroundImage: selectedItem?.bg }}>
            <div className='carousel-container-overlay'></div>
            <div className='carousel-content'>
                <div style={{ display: 'flex', height: "auto", minHeight: 730, left: 160, margin: 0, zIndex: 1 }}>
                    <div className='col carousel-menu'>
                        {items.map(item => <div
                            key={item.id}
                            className={`carousel-menu-item ${selectedItem.id === item.id ? 'carousel-item-selected' : ''}`}
                            style={{ backgroundImage: `url(${item.thumbnail.path}.${item.thumbnail.extension})` }}
                            onClick={() => setSelectedItem(item)}></div>)
                        }
                    </div>

                    <div className='col carousel-item-details'>
                        <h1>
                            <Typography className='item-title'>
                                {selectedItem?.name?.toUpperCase()}
                            </Typography>
                        </h1>

                        <p style={{maxWidth: 600}}>
                            <Typography className='item-description'>
                                {selectedItem?.description}
                            </Typography>
                        </p>

                        <Button type='primary' onClick={() => onCallAction(selectedItem)}>Conheça</Button>

                    </div>
                </div>
                <div className='flex'>
                    {items.map((item) => <div key={item.id} className={`carousel-bar ${item.id === selectedItem.id && 'selected'}`} ></div>)}
                </div>
            </div>
        </div> : null
};

Carousel.propTypes = {
    /**
     * Array de objetos contendo as informações do banner
     */
    items: PropTypes.arrayOf(PropTypes.object),

    /**
     * Função a ser executada ao clicar no botão de ação do banner
     */
    onCallAction: PropTypes.func
}

export default Carousel;
