import React from 'react'
import { useSelector } from 'react-redux'

function LeftBar() {

    const name = useSelector((state)=>state.user.name)
  return (
    <div>
        <h4>Logout ({name})</h4>
    </div>
  )
}

export default LeftBar