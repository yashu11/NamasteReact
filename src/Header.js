import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import UserContext from "./UserContext";
import useOnline from "./utils/useOnline";
const Header = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);

  const isOnline = useOnline();
  console.log(isOnline);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-slate-50 md:bg-amber-100">
      <Logo />
      <div className="nav-items">
        <ul className="flex py-2">
          <h1> {isOnline ? "🟢" : "⛔"}</h1>
          <li className="px-2 border border-violet-900">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 border border-violet-900">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 border border-violet-900">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-2 border border-violet-900">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2 border border-violet-900">
          <Link to="/cart">Cart</Link>
          </li>
          {/* {user.name} */}
          <li className="px-2 border border-violet-900">
            {isLoggedin ? (
              <button onClick={() => setIsLoggedIn(false)}>Log out</button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)}>Log In</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
