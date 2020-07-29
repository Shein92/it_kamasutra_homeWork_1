import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

type EditableSpanPropsType = {
    message: string,
    onChange: (text: string) => void
}

function EditableSpan(props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState<boolean>(false)

    function changeSpan(event: ChangeEvent<HTMLInputElement>) {
        let text = event.currentTarget.value;
        props.onChange(text);
    }

    function onKeyPressHandler(event: KeyboardEvent<HTMLInputElement>) {
        if(event.charCode === 13) {
            props.onChange(props.message);
            setEditMode(!editMode);
        }
    }

    return (
        <div>
            {editMode ? 
            <input value={props.message} onBlur={() => setEditMode(!editMode)} autoFocus onChange={changeSpan} onKeyPress={onKeyPressHandler}/> : 
            <span onDoubleClick={()=>setEditMode(!editMode)}>{props.message}</span>}
        </div>
    );
}

export default EditableSpan;