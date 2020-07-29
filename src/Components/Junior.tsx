import React, { useState } from 'react';
import ChangeSpan from './ChangeSpan/ChangeSpan';

const styles: Object = {
    textAlign: 'center',
    marginTop: '50px'
}

type StateType = {
    x: string
    // y: number
}

export function saveState<T> (key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}

function Junior() {

    let [value, setValue] = useState<string>('hi');

    function changeValue(text: string) {
        setValue(text);
    }

    const state: StateType = restoreState<StateType>("test", {x: value});

    function onSaveClick() {
        saveState<StateType>("test", {x: value})
    }
    
    function onRestoreClick() {
        setValue(state.x)
    }
    return (
        <div style={styles}>
            <ChangeSpan message={value} onChange={changeValue} onSaveClick={onSaveClick} onRestoreClick={onRestoreClick}/>
        </div>
    )
}

export default Junior;