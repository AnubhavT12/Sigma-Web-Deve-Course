import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Anubhav")
  // const [form, setForm] = useState({name:"" , phone:""})
  const [form, setForm] = useState({})

  const HandleClick = () => {
    alert("button was clicked")
  }

  const HandleMouseOver = () => {
    alert("Mouse Was over")
  }

  const HandleChange = (e) => {
    // setname(e.target.value)     //now we can type our values React: always sets a value of usestate perm
    // setForm(e.target.name)

    setForm({...form, [e,target.name]:e.target.value})
    console.log(form)     //it runs before the upper setform func. so latest value is not consolelogged
  }

  return (
    <>
      <div className="button">
        <button onClick={HandleClick}>Click Me</button>
        <button onMouseOver={HandleMouseOver}>Click Me</button>
      </div>

      <input type="text"  placeholder='Email add.' name='email' value={form.name ? form.name : ""} onChange={HandleChange}/>
      <input type="number" placeholder='Phone No.' name='phone' value={form.phone ? form.phone : ""} onChange={HandleChange}/>
    </>
  )
}

export default App
