import {useState} from "react";
import Typography from "../Typography";
import './Card.scss';
import PropTypes from "prop-types";

const CARD_TITLE_HEIGHT = 40;

const Card = ({ item, width, height, onClick, ...rest }) => {
    const [mouseOver, setMouseOver] = useState(false);
    return (
        <div
            className='card'
            style={{ width, height: height + CARD_TITLE_HEIGHT  }}
            onClick={() => onClick(item)}
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            {...rest}
        >
            <div className='card-img-container' style={{ width, height }}>
                <div
                    className='card-img-content'
                    style={{
                        width,
                        height,
                        backgroundImage: item?.modal_img ?? `url(${item?.thumbnail?.path}.${item?.thumbnail?.extension})`,
                        transform: mouseOver ? 'scale(1.2)' : 'none'
                    }} >
                </div>

                <div className='card-img-overlay' style={{width, height, top: -height}}></div>

            </div>
            <Typography>{item?.name}</Typography>
        </div>
    );
};

Card.propTypes = {
    /**
     * Objeto contendo as informações do card
     */
    item: PropTypes.object,
    /**
     * Largura em px
     */
    width: PropTypes.number,
    /**
     * Altura em px
     */
    height: PropTypes.number,
    /**
     * Função a ser executada ao clicar no card
     */
    onClick: PropTypes.func
}

Card.defaultProps = {
    width: 200,
    height: 270
}

export default Card;
