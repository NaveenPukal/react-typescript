import React from 'react'
type GreetProps = {
  name: string,
  age?: number,
  isLoggedIn: boolean
}
export default function Greet(props: GreetProps) {
  const { age = 0 } = props
  return (
    <div>
      {props.isLoggedIn ? `Welcome ${props.name} you are learning typescript..Your age is ${props.age}` : 'Welcome Guest'}
    </div>
  )
}

