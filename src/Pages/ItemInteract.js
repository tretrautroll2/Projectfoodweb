import { useState } from "react";
import { Allitems } from "./Home";
import { AllFoodItems } from "./Food";

// AllFoodItems = [
//     {name: "Legendary Pork",
//     price: 200,
//     image: Pork1
//     },
//     {name: "Mythic Pork",
//     price: 150,
//     image: Pork2
//     },
//     {name: "Common Pork",
//     price: 50,
//     image: Pork3
//     },
//     {name: "Legendary Beef",
//     price: 300,
//     image: Beef1
//     },
//     {name: "Mythic Beef",
//     price: 250,
//     image: Beef2
//     }
//    ]
export default function ItemDescription({open, onClose, description}){
if (!open) return null;
return(
    <div>
    <h1>{description}</h1>
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

