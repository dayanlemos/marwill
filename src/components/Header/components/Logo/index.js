import './Logo.scss'
const Logo = ({ onClick }) => {
    return (
        <div onClick={onClick} className="logo-container">
            Marwill
            <div className="logo-dot"></div>
        </div>
    );
};

export default Logo;
