import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SingleItem.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    id: string
    callback: (id: string) => void
}

const SingleItem: React.FC<SuperButtonPropsType> = (
    {
         className, callback, id,
        ...restProps
    }
) => {
    const finalClassName = `${s.button} ${s.default} ${className}`

    return (
        <button onClick={() => {callback(id)}}
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SingleItem
