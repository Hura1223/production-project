import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  return (
    <div className={classes.Navbar}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
    </div>
  );
};

//1:37 12
