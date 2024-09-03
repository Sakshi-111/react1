
import { useState } from 'react';
import './App.css'

function App() {
  let[counter,setcounter]=useState(0);
  const addvalue=()=>{

      
    
    
    console.log("value added",counter);
    setcounter(counter+1);
  }
  const rv=()=>{
    
 if(counter>0){
  setcounter(counter-1);

 }
    
  }
    
   
   
  
  
  

  return (
    <>
    <h1>chai</h1>
    <h2>counter value :{counter} </h2>
    <button onClick={addvalue}>Add value</button>
    <button onClick={rv}>Remove value</button>
    </>
  )
}

export default App
