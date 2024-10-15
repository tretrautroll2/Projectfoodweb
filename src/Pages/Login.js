import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebase';
import { useAuth } from '../components/user-status';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential;
                navigate('/Home');
                alert('Login succesful');
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }
    const { currentUser } = useAuth();

    useEffect(() => {
        if (currentUser) {
            navigate('/Home')
        }
    }, [currentUser]);


    return (
        <div className='login-container'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>Login</h1>
            </div>
            <hr className='dotted-line'></hr>
            <form onSubmit={handleLogin} className='login-section'>
                <label>Email</label>
                <input type="email" required onChange={(e) => setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label>Password</label>
                <input type="password" required onChange={(e) => setPassword(e.target.value)} value={password}></input>
                <br></br>
                <span>Don't have an account? <Link to='/Signup'>Sign up</Link> here</span>
                <br></br>
                <button type="submit">Log in</button>
            </form>
            <br></br>
            <br></br>
            <hr className='dotted-line'></hr>
        </div>
    )
}