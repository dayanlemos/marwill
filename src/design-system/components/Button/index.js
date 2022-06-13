import './Button.scss';
import Typography from "../Typography";

const Button = ({ type, children, ...rest }) => {


    return <button className={`button button-text ${type}`} {...rest}><Typography>{children}</Typography></button>
};

export default Button;
