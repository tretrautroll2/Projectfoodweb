import { useParams } from 'react-router-dom';
import { Allitems} from "../Allitems";


export default function Item() {
    const { id } = useParams();
    const selectedItem = Allitems.find(item => item.id === parseInt(id))
    if (!selectedItem) {
        return <p>Item not found</p>;
    }

    return (
        <div className='item-details-container'>
            <h1>{selectedItem.name}</h1>
            <div>
                <img src={selectedItem.image} alt={selectedItem.name} />
                <p>{selectedItem.details}</p>
            </div>
        </div>
    );
};