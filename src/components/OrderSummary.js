import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    const navigate=useNavigate()
  return (
    <div>
        yourr order succesfully placed!!!
        <button onClick={()=>navigate(-1)}>go back</button>
    </div>
  )
}

export default OrderSummary