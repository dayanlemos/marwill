import {useEffect, useState} from "react";
import './HomeScreen.scss';
import Carousel from "../../design-system/components/Carousel";
import {localFetch} from "../../utils/dataFetching";
import MarwillModal from "../../components/Modal";

const HomeScreen = () => {
    const [carouselItems, setCarouselItems] = useState([]);
    const [selectedCarouselItem, setSelectedCarouselItem] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleCarouselAction = (item) => {
        setModalIsOpen(true);
        setSelectedCarouselItem(item);
    };

    useEffect(() => {
        localFetch({fileName: 'carousel-items'}).then((data) => {
            setCarouselItems(data.results);
        });
    }, []);

    return (
        <div className='home-screen-container'>
            <Carousel items={carouselItems} onCallAction={handleCarouselAction}/>
            <MarwillModal isOpen={modalIsOpen} item={selectedCarouselItem} onClose={() => setModalIsOpen(false)} />
        </div>
    );
}

export default HomeScreen;
