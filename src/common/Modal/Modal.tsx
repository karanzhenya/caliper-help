import React from "react";
import './ModalStyle.css';
import MyForm from "../MyForm/MyForm";

type ModalType = {
    active: boolean
    carId: string
    modelId: string
    modelType: string
    setActive: (activeStatus: boolean) => void
    children: React.ReactChild | React.ReactNode
}

const Modal = ({active, setActive, children, carId, modelId, modelType}: ModalType) => {
    return (
        <div className={active ? `modal active` : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modalContent active' : 'modalContent'} onClick={e => e.stopPropagation()}>
                {children}
                {children === '' ?
                    <MyForm modelId={modelId} modelType={modelType} setActive={setActive} carId={carId}/> : null}
            </div>
        </div>
    )
}

export default Modal;