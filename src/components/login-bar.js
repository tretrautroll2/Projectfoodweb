import { auth } from "../Config/firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "./user-status";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
export default function LoginBar() {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
    alert("Signed out!");
  };
  const { currentUser, username, loading, isAdmin } = useAuth();
  if (loading) {
    return (
      <div className="login-bar-container">
        <hr></hr>
        <span>Loading...</span>
      </div>
    );
  }
  return (
    <div>
      {currentUser && (
        <div className="login-bar-container">
          <hr></hr>
          <span>
            Welcome, {username}
            {isAdmin && <span>(Admin)</span>}
          </span>
          <button onClick={handleSignOut}>Sign Out</button>
          {isAdmin && (
            <button onClick={() => navigate("/Additems")}>Add items</button>
          )}
        </div>
      )}
      {currentUser === null && (
        <div className="login-bar-container">
          <hr></hr>
          <Link to="/Login">
            <button>Log in</button>
          </Link>
          <Link to="/Signup">
            <button>Sign up</button>
          </Link>
        </div>
      )}
    </div>
  );
}
