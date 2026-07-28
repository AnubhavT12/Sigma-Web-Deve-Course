import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import navbar  from './components/navbar';
import footer from './components/footer';


function App() {
  const [Value, setValue] = useState()

  return (
    <div className="App">
      <navbar logotext="AVT Code"/>     
      {/* we can now make our app in parts */}
      <div className='value'> {Value} </div>
      <button onClick={()=>{setValue(Value + 1)}}>click me</button>
      <footer/>
    </div>  //concise code
  );
}

export default App;
