import React from 'react'
type personsListProps={
    names:{
        first:string,
        last:string
    }[]
}
export default function PersonList(props:personsListProps) {
  return (
    <div>
        <h2>{props.names.map((list)=>(
            <div>{list.first} {list.last}</div>
        ))}</h2>

    </div>
  )
}
