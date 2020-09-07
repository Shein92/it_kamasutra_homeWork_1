import React, { ChangeEvent, useCallback } from 'react';

type RangePropsType = {
    minVaue: number,
    maxValue: number,
    value: number,
    onChange: (value: number) => void
}

const Range = React.memo((props: RangePropsType) => {

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(+event.currentTarget.value)
    },[props])

    return (
        <div>
            {props.minVaue}<input type="range" 
                            style={{cursor: 'pointer'}}
                            min={props.minVaue} 
                            max={props.maxValue} 
                            value={props.value} 
                            onChange={onChange}
                            step={1}
                            />{props.maxValue}
        </div>
    )
})

export default Range;