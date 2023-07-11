import { useState } from 'react';
import './App.css';

const Input = ({id, title, }) => {
  const [text, setText] = useState('');
  const onChangeHandler = (e) => {
    setText(e.target.value)
  }
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <br />
      <input type="" id={id} value={text} onChange={onChangeHandler}/>
    </>
  )
}

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setEmail(e.target.email.value);
  }
  return(
    <div className='box'>
      <form onSubmit = { onSubmitHandler } className='container'>
        <h1>My First React Form</h1>
        <Input id = "name" title= "Name:" className='nameInput'></Input>
        <br />
        <Input id = "email" title= "Email:" className='emailInput' ></Input>
        <br />
        <button className='btn'>Submit</button>
      </form>
      <div className='container'>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
    
  )
}

export default App
