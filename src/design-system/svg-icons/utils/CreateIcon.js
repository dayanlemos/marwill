import React from "react";
import PropTypes from 'prop-types';
import './CreateIcon.scss'

const CreateIcon = ({ rotate, active, children, style, ...rest }) => {
    return (<div className={`icon ${active ? 'active' : ''}`} style={{transform: `rotate(${rotate}deg)`, ...style}} {...rest}>{children}</div>)
};

CreateIcon.propTypes = {
    /**
     * Icon rotation degrees
     */
    rotates: PropTypes.number
}

CreateIcon.defaultProps = {
    rotate: 0
}


export default CreateIcon;
