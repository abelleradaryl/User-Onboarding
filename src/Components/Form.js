import React from 'react';

const Form = (props) => {
  const {change, submit, errors} = props;
  const {username, email, password, terms, checked} = props.values;

  const onSubmit = event => {
    event.preventDefault()
    submit()
  }

  const onChange = event => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse)
  }

  return (
    <div>
        <p>{errors.usename}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.terms}</p>
        <h2>Add User</h2>
        <form className='input' onSubmit={onSubmit}>
            <label>Name:
            <input
                placeholder='Enter Name'
                value={username}
                onChange={onChange}
                name="username"
                type='text'
            />
            </label>

            <label>Email
            <input
                placeholder='Enter Email'
                value={email}
                onChange={onChange}
                name="email"
                type='email'
            />
            </label>

            <label>Password
            <input
                placeholder='Create Password'
                value={password}
                onChange={onChange}
                name="password"
                type="password"
            />
            </label>

            <label>Agree to Terms Of Service
            <input
                type="checkbox"
                name="terms"
                value={password}
                checked={checked}
                onChange={onChange}
            />
            </label>
            <input type="submit" value="Create User!"/>
        </form>
    </div>
  )
}

export default Form