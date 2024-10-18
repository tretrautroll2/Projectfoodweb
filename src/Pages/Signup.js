import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../Config/firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firestore } from '../Config/firebase';
import { setDoc, doc} from 'firebase/firestore';

export default function Signup() {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(firestore, 'users', user.uid), {
                username: userName,
                email: email,
                password: password
            });
            setUsername('');
            setEmail('');
            setPassword('');
            console.log(user);
            navigate('/Login');
            alert('Signup successful');
        }
            catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
    }

}


return (
    <div className='login-container'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>Sign up</h1>

        </div>
        <hr className='dotted-line'></hr>

        <form autoComplete='off' onSubmit={handleSignup} className='login-section'>
            <label>Username</label>
            <input type="text" required onChange={(e) => setUsername(e.target.value)} value={userName}></input>
            <br></br>
            <label>Email</label>
            <input type="email" required onChange={(e) => setEmail(e.target.value)} value={email}></input>
            <br></br>
            <label>Password</label>
            <input type="password" required onChange={(e) => setPassword(e.target.value)} value={password}></input>
            <br></br>
            <span>Already have an account? <Link to='/Login'>Log in</Link> here</span>
            <br></br>
            <button type='submit'>Sign up</button>
        </form>
        <br></br>
        <br></br>
        <hr className='dotted-line'></hr>
    </div>
)
}