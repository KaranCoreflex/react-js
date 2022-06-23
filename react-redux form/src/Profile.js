import React from 'react'
import { useSelector } from 'react-redux';



function Profile() {

    const formData = useSelector(state=>state.form.myForm)
// console.log(formData)
  return (
    <div className='app'>
        <h1>Profile</h1>
        <h2>FirstName:- {formData?.values?.FirstName}</h2>
        <h2>LastName:- {formData?.values?.LastName}</h2>
    </div>

  )
}


export default Profile;