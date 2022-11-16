import React from 'react'
type inputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export default function Input(props: inputProps) {
    return (
        <div>
            <input type='text' value={props.value} onChange={props.handleChange}></input>
        </div>
    )
}
