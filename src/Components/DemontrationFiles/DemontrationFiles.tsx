import React from 'react';
import Input from '../../common/Input';
import Checkbox from '../../common/Checkbox';
import Button from '../../common/Button';

type DemontrationFilesPropsType = {
    textOnTheBtn: string
    checked: boolean
    onChange: (e: boolean) => void
}

function DemontrationFiles(props: DemontrationFilesPropsType) {
    return (
        <div>
            <h3>Demontration of universal Components</h3>
            <Input />
            <Checkbox checked={props.checked} onChange={props.onChange}/>
            <Button textOnBtn={props.textOnTheBtn}/>
        </div>
    )
}

export default DemontrationFiles;