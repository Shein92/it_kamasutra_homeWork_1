import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import s from './InputAlert.module.css';

type InputAlertPropsType = {
    sayName: (newName: string) => void,
    counter: () => number
}

function InputAlert(props: InputAlertPropsType) {
    let [name, setName] = useState("");
    let [lengthItem, setLengthItem] = useState <number>(0)

    function onChangeValue(event: ChangeEvent<HTMLInputElement>) {
        setName(event.currentTarget.value);
    };

    function sayThatName() {
        props.sayName(name);
        setLengthItem(props.counter)
        setName("")
    }
    function onKeyPressed(event: KeyboardEvent<HTMLInputElement>) {
        if (event.charCode === 13) {
            sayThatName();
        }
    }

    let spanStyle = {
        fontWeight: lengthItem ? 900 : 400,
        color: lengthItem ? "red" : "black"
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
            <div className={s.spanElement}>Has a length of <span style={spanStyle}>{lengthItem}</span></div>
        </div>
    )
}

export default InputAlert;