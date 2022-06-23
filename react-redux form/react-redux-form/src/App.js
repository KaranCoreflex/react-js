import React, { useState } from 'react';
import './App.css';
import {Field, reduxForm} from 'redux-form'
import Profile from './Profile';

function App(props) {
  // console.log(props);
  const [showPropfile, setProfile] = useState(false)
  const {handleSubmit} = props;
  return (
    <div className="App">
      <h1>Form in Redux</h1>
      <form onSubmit={handleSubmit((formValues)=>{
        // console.log(formValues)
        setProfile(true);
      })}>
        <label>First name</label>
        <Field type='text' name='FirstName' component='input' /> <br />
        <label>Last name</label>
        <Field type='text' name='LastName' component='input' />
        <button type='submit'>Submit</button>

        {showPropfile? <Profile/> : null}
      </form>
    </div>
  );
}


export default reduxForm({
  form:"myForm"
})(App);
