import { useState } from "react";
import { Allitems } from "./Home";
import { AllFoodItems } from "./Food";


export default function ItemDescription({open, onClose, title, description, selectedItem}){
if (!open) return null;
return(
    <div className="item-description">
    <h1>{title}</h1>
    <p>{description}</p>
    <p onClick={onClose}>x</p>
    </div>
)
}















    //     const [itemModal, setItemModal] = useState(true)

// const toggleModal = () => {
//     setItemModal(!itemModal)
// }
//     return(
// <>
// <div>
//     <div className="item-description">
//         <h2>Hello</h2>
//         <p>World</p>
//         <button onClick={toggleModal}>Close</button>
//     </div>
// </div>
// </>
// )


// }

