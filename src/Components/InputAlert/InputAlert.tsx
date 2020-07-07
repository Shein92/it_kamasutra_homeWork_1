import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import s from './InputAlert.module.css';

type InputAlertPropsType = {
    sayName: (newName: string) => void
}

function InputAlert(props: InputAlertPropsType) {
    let [name, setName] = useState("");

    function onChangeValue(event: ChangeEvent<HTMLInputElement>) {
        setName(event.currentTarget.value);
    };

    function sayThatName() {
        props.sayName(name);
        setName("")
    }
    function onKeyPressed (event: KeyboardEvent<HTMLInputElement>) {
        if (event.charCode === 13) {
            sayThatName();
        }
    }

    return (
        <div className={s.wrapper}>
            <input
                className={s.input}
                type="text"
                value={name}
                onChange={onChangeValue}
                onKeyPress={onKeyPressed}
            />
            <button className={s.btn} onClick={sayThatName}>SAY MY NAME!</button>
        </div>
    )
}

export default InputAlert;