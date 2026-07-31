import React, {useEffect} from 'react'

const Navbar = ({color}) => {

      // CASE 1 : Run On Every Render
  useEffect(() => {
    alert("hey i will run on every render")
  }, [])
  
  // CASE 2 : Run Only on First Render
  useEffect(() => {
    alert("I Run Only On First Render")
  }, [first])


  // CASE 3 : Runs Only On Certain Values Changes
    useEffect(() => {
    alert("I Am Running Bcos Color Was Changed")
    setColor(color + 1)
  }, [color])

  // EXAMPLE Of CleanUp Function
  useEffect(() => {
    alert("hello first render here of app.jsx")
  
    return () => {
      alert("component was Unmounted")      // runs when component is removed by some condition
    }
  }, [])

  return (
    <div>
      i am navbar of {color} color hehe...
    </div>
  )
}

export default Navbar
