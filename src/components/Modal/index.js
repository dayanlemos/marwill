import './Modal.scss';
import Modal from "../../design-system/components/Modal";
import Typography from "../../design-system/components/Typography";
import Button from "../../design-system/components/Button";

const MarwillModal = ({ item, onClose, ...rest }) => {
    return (<>
        <Modal onClose={onClose} {...rest}>

            <div className='modal-header'>
                <div className='modal-photo' style={{ backgroundImage: item?.modal_img ?? `url(${item?.thumbnail?.path}.${item?.thumbnail?.extension})` }}>

                </div>
                <div className='title'>
                    <h1><Typography>{item?.personal_name ?? item?.name}</Typography></h1>
                    <p><Typography>{item?.description}</Typography></p>
                </div>
                <div className='button-close' onClick={onClose}>X</div>
            </div>
            <div className='modal-content'>
                <div className='grow comics'>
                    <h2 className='modal-subtitle'><Typography>Comics</Typography></h2>
                    {item?.comics?.items?.map((comicsItem) => <p><Typography>{comicsItem.name}</Typography></p>)}
                </div>
                <div className='grow series'>
                    <h2 className='modal-subtitle'><Typography>Series</Typography></h2>
                    {item?.series?.items?.map((seriesItem) => <p><Typography>{seriesItem.name}</Typography></p>)}
                </div>
            </div>
            <div className='modal-footer'>
                <Button type='primary' style={{ width: 90 }} onClick={onClose}>OK</Button>
            </div>

        </Modal>
    </>);
};

export default MarwillModal;
