import React from 'react';
import {Link} from "react-router-dom";
import s from './LinkButton.module.css'
import Button from "@mui/material/Button";

type linkButtonPropsType = {
    link: string
    children: string
}

export const LinkButton = ({link, children}: linkButtonPropsType) => {
    return <div className={s.linkButton}>
        <Link to={link} className={s.link}>
            <Button variant={"contained"}>
                {children}
            </Button>
        </Link>
    </div>
};