import React, {memo, useState} from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom";
import MenuList from "./MenuList/MenuList";
import {navigationLinks} from "../../features/contstants/Links";
import BurgerMenu from "../../common/BurgerMenu/BurgerMenu";

export default memo(function Navbar() {

    const [active, setActive] = useState("nav_menu");
    const [icon, setIcon] = useState("nav_toggler");
    const navToggle = () => {
        if (active === "nav_menu") {
            setActive("nav_menu nav_active");
        } else setActive("nav_menu");
        if (icon === "nav_toggler") {
            setIcon("nav_toggler toggle");
        } else setIcon("nav_toggler");
    };

    return (
        <nav className="nav">
            <Link to={navigationLinks[1].link} className="nav_brand">
                Помощник в определении сторон суппортов
            </Link>
            <MenuList activeClassName={active}/>
            <BurgerMenu callback={navToggle} classNames={icon}/>
        </nav>
    );
})