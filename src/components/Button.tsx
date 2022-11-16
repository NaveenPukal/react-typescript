import React from 'react'

type buttonProps = {
    handleclick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props: buttonProps) {
    return (
        <div><button onClick={props.handleclick}>click</button></div>
    )
}
