import { useState } from 'react'
import './App.css'
import { botones } from './constants'

function App() {
  const [op, setOp] = useState("")
  const [resultado,setResultado] =useState("0")
  const [opm,setOpm] =useState("")
  
  const operacion =(btn)=>{
    if(btn=="AC"){ 
       setOp("")
       setResultado(0)
       setOpm("")
       return
    }
    if(btn=="C"){ 
      setOp(op.slice(0,-1))
      setOpm(opm.slice(0,-1))
      return
   }
    if(btn=="=" && op!=""){ 
      function resolver(fn){
        return new Function('return '+fn);
      }
      setResultado(resolver(op))
      setOp(resolver(op))
      setOpm(resolver(op))
      return
    }
    if(btn=="X"){ 
      setOp(op+"*")
      setOpm(opm+"x")
      return
   }  
   if(btn!="=" ){
      
      setOp(op+btn.toString())
      setOpm(opm+btn.toString())
      
    }
       
  }
  return (
    <>
      <div className="front">
      <h1 className="title">Calculadora</h1>
      <label>{resultado}</label>
      <input className="resultado" placeholder={opm}/> 
      </div>
      
      <div className="botones">
        {
        botones.map((boton,index)=>{
          return(
            <button key={index} index={index} onClick={()=>operacion(boton)}>{boton}</button>
          )
        }) 
        }
      </div>
    </>
  )
}
export default App