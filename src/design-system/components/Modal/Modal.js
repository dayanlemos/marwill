import './Modal.scss';
import PropTypes from "prop-types";

const Modal = ({ children, isOpen, onClose }) => {
    return isOpen ? (<>
        <div data-testid='modal' className="modal">
            <div onClick={onClose} className="backdrop"></div>
            <div className="modal-container">
                {children}
            </div>
        </div>
    </>) : null;
}

Modal.propTypes = {
    /**
     * Abrir/fechar modal
     */
    isOpen: PropTypes.bool,

    /**
     * Função a ser executada fechar a modal - é disparada ao clicar no "X" ou no backdrop
     */
    onClose: PropTypes.func
}

export default Modal;
