import React, { useContext } from 'react'
import { usehook } from './UsecontextHook'

function UseStatehookLinkPage() {

    const dis = useContext(usehook)
    const {first, setfirst, arr2, setarr2, obj} = dis

    const arr3 = ()=> {
      
    const updatearr = arr2.map(itm=>{
      if (itm.name==="Tom") {
        
      
      return{...itm,age:440}
      }
      return itm;
      
    })
    setarr2(updatearr)
                   }


                   

  return (
    <div>
        <h3>{first}</h3>
        <button onClick={()=>setfirst("It worked")}>Click</button>
         
        {
            arr2.map((disp)=>
            <h3>{disp.name} {disp.age}</h3>
            )
      }
                  <button onClick={()=>setarr2([{name:"Thomas Chako"}])}>Thomas Chako2</button>
        <button onClick={arr3}>Thomas Chako</button>

        <h1>{obj.name} {obj.age}</h1>

       
        
      
    </div>
    
  )
}

export default UseStatehookLinkPage