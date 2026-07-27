import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import navbar  from './components/navbar';


function App() {
  const [Value, setValue] = useState()

  return (
    <div className="App">
      <navbar/>     
      {/* we can now make our app in parts */}
      <div className='value'> {Value} </div>
      <button onClick={()=>{setValue(Value + 1)}}>click me</button>
    </div>  //concise code
  );
}

export default App;
