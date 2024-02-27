import React from 'react';
import {Link} from "react-router-dom";
import s from './LinkButton.module.css'

type linkButtonPropsType = {
    link: string
    children: string
    callback: () => void
}

export const LinkButton = ({link, children, callback}: linkButtonPropsType) => {
    return <Link to={link} className={s.linkButton} onClick={callback}>
        {children}
    </Link>
};