import React from "react";
import classes from "./navbar.module.css";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  return (
    <div className={`${classes.container} ${classes.sticky}`}>
      <div className={`${classes.wrapper} ${classes.darkBg}`}>
        <Link to="hero" smooth={true} duration={500} className={classes.left}>
          <h1 className={classes.fancyFont}>Foodex</h1>
        </Link>
        <Link
          to="favoriteFoods"
          smooth={true}
          duration={500}
          className={classes.link}
        >
          Favorite Foods
        </Link>
        <Link
          to="categories"
          smooth={true}
          duration={500}
          className={classes.link}
        >
          Categories
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
