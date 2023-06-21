
const Pro2=({obji2, arry2})=>{
    
    return(
    <div>
        <h5>{obji2.name}-{obji2.age}</h5>
        {arry2.map((dis)=>
        <p>{dis.name}-{dis.age}</p>
        )}
    </div>
    ) 
}
export default Pro2