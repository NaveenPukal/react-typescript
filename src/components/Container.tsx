import React from 'react'
type containerProps = {
    styles: React.CSSProperties
}
export default function Container(props: containerProps) {
    return (
        <div style={props.styles}>Container</div>
    )
}
