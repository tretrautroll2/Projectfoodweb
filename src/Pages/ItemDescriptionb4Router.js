import { useState } from "react";
import { Allitems } from "./Home";
import { AllFoodItems } from "./Food";


export default function ItemDescription({open, onClose, title, description}){
if (open == null) return null;
return(
    <div className="item-description">
    <h1>{title}</h1>
    <p>{description}</p>
    <p onClick={onClose}>x</p>
    </div>
)
}














