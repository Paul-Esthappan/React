import React from 'react'
import ToggleTask from './ToggleTask'
import { useNavigate } from 'react-router-dom'



function RouterDom() {

  const task=useNavigate()
  const ToggleTask1=()=>{
  
    task("/ToggleTask1")
  }
  



  return (
    <div>
        <h1>Hello World</h1>
        <a href="ApiData">Api Data</a>
        <a href="Button"><button>Cick</button></a>
        <button onClick={ToggleTask1}>Click2</button>
        
    </div>
  )
}

export default RouterDom



{/* 
    In main file add tags
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RouterDom/>}/>
                <Route path='/ApiData' element={<> <RouterDom/><ApidataTask/> </>}/>
            </Routes>
        </BrowserRouter> 
*/}