import React, {memo, useState} from "react";
import "./Navbar.scss";
import {Link} from "react-router-dom";

const navigationLinks = [
    {
        desc: "Главная",
        link: "/car"
    },
    {
        desc: "Форма для отправки информации",
        link: "/send"
    },
    {
        desc: "Обновления",
        link: "/news"
    },
]

export default memo(function Navbar() {
    console.log('navbar')
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
            <Link to={navigationLinks[0].link} className="nav_brand">
                Помощник в определении сторон суппортов
            </Link>
            <ul className={active}>
                {navigationLinks.map((item) =>
                    <li className="nav_item">
                        <Link to={item.link} className="nav_link">
                            {item.desc}
                        </Link>
                    </li>
                )}
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"/>
                <div className="line2"/>
                <div className="line3"/>
            </div>
        </nav>
    );
})