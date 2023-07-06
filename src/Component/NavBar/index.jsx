import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Badge, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useContext } from "react";
import Language from "../../Context/Language";
import "./style.css";
const NavBar = () => {
  // For NavBar Toggle
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useContext(Language);
  const toggleOpen = () => {
    setOpen((open) => !open);
  };
  const favoriteList = useSelector((state) => state.favoriteMovie.favoriteList);
  return (
    <div>
      <div className="NavBar">
        <div className="container h-100 d-flex justify-content-between align-items-center">
          <div className="Logo">
            Movie
            <span>Box</span>
          </div>
          <div className={open ? "Links open" : "Links"}>
            <NavLink exact to="/">
              Home
            </NavLink>
            {/* <NavLink to="/About">About</NavLink> */}
            <NavLink to="/Movie">Movie</NavLink>
            <NavLink to="/Series">Series</NavLink>
            <NavLink to="/Search">Search</NavLink>
            <NavLink to="/Favorite">
              <Badge color={"primary"} badgeContent={favoriteList.length}>
                Favorite
              </Badge>
            </NavLink>
            <select
              className="form-select"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              aria-label="Default select example"
            >
              <option value="en">English</option>
              <option value="ar">عربي</option>
            </select>

            <i className="fas fa-times" onClick={toggleOpen}></i>
          </div>
          <div className="BurgarMenu" onClick={toggleOpen}>
            <span className="up my-2"></span>
            <span className="down"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
