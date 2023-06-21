
// const Pro=({obj1, arr1})=>{


// return(
//     <div>
//         {arr1.map((dis)=>
//         <p>{dis.name} - {dis.age}</p>
//         )}
//         <h5>{obj1.name} - {obj1.age}</h5>
//     </div>
// )
// }
// export default Pro

const Pro=(abc)=>{
    const arr2=abc.arr1;
    const obj2=abc.obj1;
    console.log(arr2, obj2)

    return(
        <div>
            {
                arr2.map((dis)=>
                <p>{dis.name} - {dis.age}</p>
                )
            }
            <h5>{obj2.name}-{obj2.age}</h5>
        </div>
    )
}
export default Pro