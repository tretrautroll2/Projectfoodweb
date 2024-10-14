import { auth } from "../Config/firebase"
import { signOut } from "firebase/auth"
import { useAuth } from "./user-status"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
export default function LoginBar() {
    const handleSignOut = async () => {
        await signOut(auth);
    };
    const { currentUser } = useAuth();
    return (
        <div >
            {currentUser ? (
                <div className="login-bar-container">
                    <span>Welcome, {currentUser.email}</span>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <div className="login-bar-container">
                    <Link to="/Login">
                        <button>Log in</button>
                    </Link>
                    <Link to="/Signup">
                        <button>Sign up</button>
                    </Link>
                </div>
            )}
        </div>
    )
}