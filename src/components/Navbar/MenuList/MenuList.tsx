import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {navigationLinks} from "../../../features/contstants/Links";

type MenuListType = {
    activeClassName: string
}

function MenuList({activeClassName}: MenuListType) {

    return (
        <ul className={activeClassName}>
            {navigationLinks.map((item) =>
                <li className="nav_item" key={item.link}>
                    <Link to={item.link} className="nav_link">
                        {item.desc}
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default MenuList;