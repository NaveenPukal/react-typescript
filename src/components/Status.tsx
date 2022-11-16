import React from 'react'

type statusProps ={
    status:string
}

export default function Status(props:statusProps) {
    let message
    if(props.status === 'loading'){
        message = 'Loading...'
       
    }else if(props.status === 'success'){
        message = 'Data fetched succefully'
    }else if(props.status ==='error'){
        message = 'Error fetching data'
    
    }else{
        message = 'Empty'
    }
  return (
    <div><h2>status - {message}</h2>
   </div>
  )
}
