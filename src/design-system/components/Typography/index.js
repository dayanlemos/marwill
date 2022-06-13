import '../../assets/fonts/Poppins-Regular.ttf';
import './Typography.scss'

const Typography = ({ children, className, ...rest }) => {
    return <span {...rest} className={`marwill-typrography ${className}`}>{children}</span>;
};

export default Typography;
