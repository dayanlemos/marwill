import {useState} from "react";
import Typography from "../Typography";
import './Card.scss';

const Card = ({ item, width, height, onClick, ...rest }) => {
    const [mouseOver, setMouseOver] = useState(false);
    return (
        <div
            className='card'
            style={{ width, height: height + 40  }}
            onClick={() => onClick(item)}
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            {...rest}
        >
            <div className='card-img-container' style={{ width, height, backgroundImage: item?.modal_img ?? `url(${item?.thumbnail?.path}.${item?.thumbnail?.extension})` }}>
                {mouseOver && <div className='card-img-overlay' style={{ width, height }}></div>}
            </div>
            <Typography>{item?.name}</Typography>

        </div>
    );
};

Card.defaultProps = {
    width: 200,
    height: 270
}

export default Card;
