import React from 'react'
import { Link ,NavLink, Outlet} from 'react-router-dom'
import { useAuth } from './auth'

function Navbar() {
  const navLinkStyle=({isActive})=>{
    return{
        fontWeight:isActive?'bold':"normal",
        textDecoration:isActive?"none":""
    

    }

}
const auth=useAuth()
  return (
    <nav>
        <NavLink  style={navLinkStyle} to="/">Home</NavLink>
        <NavLink style={navLinkStyle}  to="/about">about</NavLink>
        <NavLink style={navLinkStyle} to="/products">products</NavLink>
        <NavLink style={navLinkStyle} to="/profile">profile</NavLink>
        {
          !auth.user &&(
            <NavLink style={navLinkStyle} to='/login'>login</NavLink>
          )
        }


    </nav>

  )
}

export default Navbar