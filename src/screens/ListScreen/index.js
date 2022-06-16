import {useEffect, useState} from "react";
import './ListScreen.scss';
import Card from "../../design-system/components/Card";
import Typography from "../../design-system/components/Typography";
import {apiFetch} from "../../utils/dataFetching";
import debounce from "../../utils/debounce";
import MarwillModal from "../../components/Modal";

const ListScreen = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [offset, setOffset] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        apiFetch({ offset, term: searchTerm}).then((data) => {
            setOffset(0);
            setItems(data.results);
        });
    }, [searchTerm]);

    const handleCardClick = (item) => {
        setSelectedItem(item);
        setModalIsOpen(true);
    };

    const handleLoadMore = () => {
        apiFetch({ offset: offset + 20, term: searchTerm}).then((data) => {
            setOffset(offset + 20);
            setItems([...items, ...data.results]);
        });
    }

    const handleSearch = (term) => {
        debounce(() => setSearchTerm(term), 400);
    };

    return (
        <div className='list-screen-container flex'>

            <div className='flex' style={{ justifyContent: 'space-between' }}>
                <h1 style={{ maxWidth: 300 }}><Typography>Personagens exclusivos</Typography></h1>
                <input className='input-search' type='text' placeholder='Digite sua busca' onChange={({ target }) => handleSearch(target.value)}/>
            </div>

            <div className='menu-cards'>
                {items?.map((item) => <Card width={300} height={412} item={item} onClick={handleCardClick} />)}
                <div className='load-more-button' onClick={handleLoadMore}>
                    <div style={{ textAlign: 'center' }}>
                        Marwill <br/>

                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div className='dots'></div>
                            <Typography style={{ fontSize: 16, fontWeight: 600 }}>Ver mais</Typography>
                        </div>
                    </div>
                </div>
            </div>

            <MarwillModal isOpen={modalIsOpen} item={selectedItem} onClose={() => setModalIsOpen(false)} />
        </div>
    );
}

export default ListScreen;
