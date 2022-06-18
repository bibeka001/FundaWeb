import React from 'react'
const Parent = (props) => {
  return (
    <>
    <h1>Hello Parent</h1>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.Qualification}</h1>
    </>

  )
}

export default Parent