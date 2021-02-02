import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = ()=>{
    if(user){
         auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          alt = ""
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to ={!user && '/login'}>
        <div onClick = {handleAuthentication} className="header__navOption">
          <span className="header__navOptionLineOne">{!user ? 'Hello Guest' : user?.email}</span>
          <span className="header__navOptionLineTwo">{user ? 'Sign Out' : 'Sign In' }</span>
        </div>
        </Link>
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Returns</span>
          <span className="header__navOptionLineTwo">& Orders</span>
        </div>
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Your</span>
          <span className="header__navOptionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header__navOptionBasket">
          <ShoppingBasketIcon />
          <span className="header__navOptionLineTwo header__basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
