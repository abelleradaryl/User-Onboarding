import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import schema from "./Validation/formSchema";

import axios from "axios";
import * as yup from "yup";


const initialFormValues = {
  username: "",
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  username: "",
  email: '',
  password: '',
  terms: ""
}

const initialDisabled = true


function App() {
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [users, setUsers] = useState([])
const [disabled, setDisabled] = useState(initialDisabled) 

const onChange = (name, value) => {
  validate(name, value);
  setFormValues({...formValues, [name]: value});
}

const onSubmit = () => {
  axios.post("https://reqres.in/api/users", formValues)
  .then(resp => {
    console.log(resp)
    setUsers([resp.data, ...users ])
  })
  .catch(error => console.error(error))
}

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ""}))
    .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
}

useEffect(() => {
  // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div className="App">
      <div className="container">
      <h1>User Onboarding App</h1>
      <Form 
      values={formValues} 
      change={onChange} 
      errors={formErrors} 
      disabled={disabled}
      submit={onSubmit} />

      {users.map( user => {
        return (
          <div className="user" key={user.id}>
          <p>{user.username}</p>
          <p>{user.createdAt}</p>
        </div>
      )})}
    </div>
    </div>
  );
}

export default App;
