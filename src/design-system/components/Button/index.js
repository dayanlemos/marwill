import './Button.scss';
import Typography from "../Typography";

const Button = ({ type, children, ...rest }) => <button className={`button ${type}`} {...rest}><Typography>{children}</Typography></button>;

export default Button;
