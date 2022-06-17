import './Logo.scss'
const Logo = ({ onClick }) => {
    return (
        <div data-testid='app-logo' onClick={onClick} className="logo-container">
            Marwill
            <div className="logo-dot"></div>
        </div>
    );
};

export default Logo;
