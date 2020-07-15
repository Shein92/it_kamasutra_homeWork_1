import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import s from './InputAlert.module.css';
import Input from '../../common/Input';
import Button from '../../common/Button';

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
        color: lengthItem ? "#4CAF50" : "black"
    }

    let inputNewStyle = {
        margin: "0 auto",
        fontSize: "20px",
        display: 'block'
    }

    let btnNewStyle={
        margin: '0px auto',
        marginTop: '10px',
        display: 'block'
    }

    return (
        <div className={s.wrapper}>
            {/* <input
                className={s.input}
                type="text"
                value={name}
                onChange={onChangeValue}
                onKeyPress={onKeyPressed}
            /> */}
            <Input style={inputNewStyle} value={name} onChange={onChangeValue} onKeyPress={onKeyPressed}/>
            {/* <button className={s.btn} onClick={sayThatName}>SAY MY NAME!</button> */}
            <Button redBtn={true} style={btnNewStyle} textOnBtn={"SAY MY NAME!"} onClick={sayThatName}/>
            <div className={s.spanElement}>Has a length of <span style={spanStyle}>{lengthItem}</span></div>
        </div>
    )
}

export default InputAlert;