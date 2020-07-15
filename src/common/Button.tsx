import React from 'react';
import s from './Button.module.css'

export type ButtonPropsType = {
    textOnBtn: string
    onClick?: () => void
    style?: {}
    redBtn?: boolean
}



function Button (props: ButtonPropsType) {
    return (
    <button style={props.style} className={s.btn} onClick={props.onClick}>{props.textOnBtn}</button>
    )
}

export default Button;