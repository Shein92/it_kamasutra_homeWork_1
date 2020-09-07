import React from 'react';
import EditableSpan from '../../common/EditableSpan';
import Button from '../../common/Button';

type ChangeSpanPropsType = {
    message: string,
    onChange: (text: string) => void
    onSaveClick: () => void
    onRestoreClick: () => void
}

const ChangeSpan = React.memo((props: ChangeSpanPropsType) => {

    return (
        <div>
            <EditableSpan message={props.message} onChange={props.onChange}/>
            <Button textOnBtn={"Save Data"} onClick={props.onSaveClick}/>
            <Button textOnBtn={"Restore Data"} onClick={props.onRestoreClick}/>
        </div>
    )
})

export default ChangeSpan;