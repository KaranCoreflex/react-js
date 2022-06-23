import React from 'react'

type ProfileProps = {
    name:string
}

function profile(props:ProfileProps) {
  return (
    <div>Name:- {props.name}</div>
  )
}

export default profile