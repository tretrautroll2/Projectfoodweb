import { firestore } from "../Config/firebase";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";

export default function Allitems() {
    const itemDocRef = doc(firestore, 'item-list')
    
}