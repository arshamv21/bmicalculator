

import './App.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function App() {

const [weight,setWeight] = useState(0)
const [height,setHeight] = useState(0)
const [bmi,setBmi] = useState('')
const [msg,setMsg] =useState('') 

  const handleCalculate = (e)=>{
         e.preventDefault()
        if(weight===0 || height===0){
          alert('hello please enter a valid number')

        }
        else{
          let bmicalculate = (weight / (height*height)*703)
          setBmi(bmicalculate.toFixed(1))

          if(bmi < 25){
            setMsg('you are under weight')
          }else if(bmi>= 25 && bmi<30){
            setMsg('you are a healthy weight')
          }else{
            setMsg('you are overweight')
          }
        }

        
  }
  let reload =()=>{
    window.location.reload()
  }
  
  return (
    <>
           <div  style={{height:'100vh'}} className=' bg-info d-flex justify-content-center align-items-center '>
          <div  className='bg-light p-5 rounded' style={{width:'500px'}}>
          <Form onSubmit={handleCalculate}>
          <Form.Group className="mb-3">
         
           <Form.Label>weight</Form.Label>
          <Form.Control type="text" placeholder="weight" value={weight} onChange={(e)=>setWeight(e.target.value)} />
          <Form.Label>height</Form.Label>
          <Form.Control type="text" placeholder="height" value={height} onChange={(e)=>setHeight(e.target.value)}  />
          </Form.Group>
          <div className='mb-4 d-flex justify-content-between'>
          <Button  type="submit">Submit</Button>
          <Button onClick={reload} type="submit">Reload</Button>
          </div>
          
           </Form>
           <div className='center'>
            <h3>your bmi is : {bmi}</h3>
            <p>{msg}</p>
           </div>
           
          </div>
           </div>
    </>
  )
}

export default App
