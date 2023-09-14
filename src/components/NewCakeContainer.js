import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'



function NewCakeContainer(props) {
    const [number,setNumber]=useState(1)
  return (
    <div>
        <h1>Number of cakes-{props.numberOfCakes}</h1>
        <input type='text' value={number} onChange={e=>setNumber(e.target.value)}></input>
        <button onClick={()=>props.buyCake(number)}>buy cake{number}</button>
    </div>
  )
}
const mapStateToProps=state=>{
    return{
        numberOfCakes:state.cake.numberOfCakes
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyCake:(number)=>dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)