import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Button from "./Button";

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="flex justify-between mx-32 py-2">
      <img src="" alt="logo" />
      <nav>
        <Link to="/">Home</Link>
        {user ? (
          <span
            onClick={() => {
              signOut(auth)
                .then(() => {})
                .then((error) => {});
            }}
          >
            <Button>Logout</Button>
          </span>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
