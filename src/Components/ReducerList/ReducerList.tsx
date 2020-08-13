import React from 'react';
import { StateOfUsersType } from '../../state/homeWorkReducer';
import Button from '../../common/Button';

type ReducerListPropsType = {
    people: Array<StateOfUsersType>,
    onUpClick: () => void
    onDownClick: () => void
    onYearsClick: () => void
    onAllClick: () => void
}

function ReducerList (props: ReducerListPropsType) {
    return (
        <div >
            <h3>List of people</h3>
            <ul>
                {props.people.map(people => 
                    <li>{people.name}</li>
                )}
            </ul>
            <Button textOnBtn={"All people"} onClick={props.onAllClick}/>
            <Button textOnBtn={"UP"} onClick={props.onUpClick}/>
            <Button textOnBtn={"DOWN"} onClick={props.onDownClick}/>
            <Button textOnBtn={"18+ years old"} onClick={props.onYearsClick}/>
        </div>
    )
}

export default ReducerList;