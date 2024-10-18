import { useState } from "react";
import { firestore } from "../Config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { storage } from "../Config/firebase";
import { getDownloadURL, ref, uploadBytes, } from "firebase/storage";

export default function AddItems() {
    const [title, setTitle] = useState('');
    const [typeOf, setTypeOf] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);


    const types = ['image/jpg', 'image/jpeg', 'image/webp', 'image/png', 'image/PNG']
    const handleProductImage = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && types.includes(selectedFile.type)) {
                setImage(selectedFile);
            } else {
                setImage(null);
                alert('please choose a valid file type (jpg, jpeg, webp, png, PNG)');

            }
        }
        else {
            alert('please select your file');
        }
    };
    const handleAddItems = async (e) => {
        e.preventDefault();
        console.log(title, price, description);
        console.log(image);
        const imageRef = ref(storage, `item/img/${image.name}`)
        const itemsCollection = collection(firestore, 'items')
        try {
            await uploadBytes(imageRef, image);
            const url = await getDownloadURL(imageRef)

            await addDoc(itemsCollection, {
                name: title,
                type: typeOf,
                price: Number(price),
                image: url,
                details: description
            });
            console.log(url)
            alert('Upload succesful');
        } catch (error) {
            console.log(error);
            alert(error);
        } finally {
            setTitle('');
            setTypeOf('');
            setPrice('');
            setDescription('');
            setImage(null);
            document.getElementById('file').value = '';
        }
    }

    return (
        <div className='login-container'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>Add item to Store</h1>
            </div>
            <hr className='dotted-line'></hr>
            <form autoComplete='off' className='login-section' onSubmit={handleAddItems}>
                <label>Title</label>
                <input type="text" required onChange={(e) => setTitle(e.target.value)} value={title}></input>
                <br></br>
                <label>Type of Item</label>
                <input type="text" required onChange={(e) => setTypeOf(e.target.value)} value={typeOf}></input>
                <br></br>
                <label>Price</label>
                <input type="number" required onChange={(e) => setPrice(e.target.value)} value={price}></input>
                <br></br>
                <label>Description</label>
                <input type="text" required onChange={(e) => setDescription(e.target.value)} value={description}></input>
                <br></br>
                <label>Image Upload</label>
                <input type="file" id='file' required onChange={handleProductImage}></input>
                <br></br>
                <div>
                    <button>Submit</button>
                </div>
            </form>
            <br></br>
            <br></br>
            <hr className='dotted-line'></hr>
        </div>
    )
}