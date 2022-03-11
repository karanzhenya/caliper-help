import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './MyButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    id: string
    openCarType: (id: string) => void
}

const MyButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, openCarType, id,
        ...restProps
    }
) => {
    const finalClassName = `${s.button} ${red ? s.red : s.default} ${className}`

    return (
        <button onClick={() => openCarType(id)}
            className={finalClassName}
            {...restProps}
        />
    )
}

export default MyButton
