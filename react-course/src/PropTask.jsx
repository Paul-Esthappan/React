
const PropTask=(dis)=> {
    const age2=dis.age1
    console.log(age2)

    
    
    
  return (
    <div>
        <p>{age2}</p>
        <p>
            {
            ((age2 == 18) || (age2 > 18) ?  "Adult" : "Minnor")  
            }</p>
        
    </div>

  )
}

export default PropTask