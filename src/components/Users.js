import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
  return (
<>
        <div>Users list</div>
        <h6>User1</h6>
        <h6>User2</h6>
        <h6>User3</h6>
       <Outlet></Outlet>

    
</>  )
}

export default Users