import React from 'react'
import { personName } from './Person.types'
export default function Person(props: personName) {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}
