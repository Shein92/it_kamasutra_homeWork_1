import React, { ChangeEvent, KeyboardEvent, CSSProperties } from 'react';
import s from './Input.module.css';

type InputPropsType = {
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void
    style?: CSSProperties
}

function Input (props: InputPropsType) {

    return (
            <input style={props.style} className={s.inputStyle} type="text" value={props.value}
                onChange={props.onChange} onKeyPress={props.onKeyPress}
            ></input>
    )
}

export default Input;