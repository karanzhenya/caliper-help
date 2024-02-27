import React from 'react';

type BurgerMenuType = {
    callback: () => void,
    classNames: string
}

function BurgerMenu({callback, classNames}: BurgerMenuType) {
    return (
        <div onClick={callback} className={classNames}>
            <div className="line1"/>
            <div className="line2"/>
            <div className="line3"/>
        </div>
    );
}

export default BurgerMenu;