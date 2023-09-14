import React from 'react'
import { Link, useParams } from 'react-router-dom'

function UserDetails() {
    const params=useParams()
    const userId=params.userId
  return (
    <div>
   UserDetails{userId}
        </div>
  )
}

export default UserDetails