import React, { useState } from "react";
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


function App() {
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [users, setUsers] = useState([])

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



  return (
    <div className="App">
      <div className="container">
      <h1>User Onboarding App</h1>
      <Form values={formValues} change={onChange} errors={formErrors} submit={onSubmit} />
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
