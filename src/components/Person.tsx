import React from 'react'
type personName={
    name:{
    first:string,
    last:string
   }
}
export default function Person(props:personName) {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}
