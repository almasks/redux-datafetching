import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'



function iceCreamContainer(props) {
  return (
    <div>
        <h1>Number of iceCream-{props.numberOfIceCreams}</h1>
        <button onClick={props.buyIceCream}>buy cake</button>
    </div>
  )
}
const mapStateToProps=state=>{
    return{
        numberOfIceCreams:state.iceCream.numberOfIceCreams
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(iceCreamContainer)