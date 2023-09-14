import React from 'react'
import { useAuth } from './components/auth'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

function RequireAuth({children}) {
    const auth=useAuth()
    const location=useLocation()
    if(!auth.user){
        return <Navigate to="/login" state={{path:location.pathname}}></Navigate>
    }
  return (
    <div>{children}</div>
  )
}

export default RequireAuth