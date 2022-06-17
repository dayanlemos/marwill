import PropTypes from 'prop-types';
import './Button.scss';
import Typography from "../Typography";

const Button = ({ type, children, ...rest }) => <button data-testid={`button-${type}`} className={`button ${type}`} {...rest}><Typography>{children}</Typography></button>;

Button.propTypes = {
    /**
     * Define o estilo do botão
     */
    type: PropTypes.oneOf(['default', 'primary'])
}

export default Button;
