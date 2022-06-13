import './Modal.scss';

const Modal = ({ children, isOpen, onClose }) => {
    return isOpen ? (<>
        <div className="modal">
            <div onClick={onClose} className="backdrop"></div>
            <div className="modal-container">
                {children}
            </div>
        </div>
    </>) : null;
}

export default Modal;
