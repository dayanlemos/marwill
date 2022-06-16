import React from "react";
import PropTypes from 'prop-types';
import './CreateIcon.scss'

const CreateIcon = ({ rotate, children, style, ...rest }) => {
    return (<div className='icon' style={{transform: `rotate(${rotate}deg)`, ...style}} {...rest}>{children}</div>)
};

CreateIcon.propTypes = {
    /**
     * Icon rotation degrees
     */
    rotate: PropTypes.number,
}

CreateIcon.defaultProps = {
    rotate: 0
}

export default CreateIcon;
