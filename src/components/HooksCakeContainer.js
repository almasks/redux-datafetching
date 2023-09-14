import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function HooksCakeContainer() {
    const numberOfCakes=useSelector(state=>state.cake.numberOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>number of cakes-{numberOfCakes}</h1>
        <button onClick={()=>dispatch(buyCake())}> buyCake</button>
    </div>
  )
}

export default HooksCakeContainer