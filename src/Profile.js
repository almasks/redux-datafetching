import React from 'react'
import { useAuth } from './components/auth'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const auth=useAuth()
    const navigate=useNavigate()
    const handleLogout=()=>{
        auth.logOut()
        navigate('/')
    }
  return (
    <div><p>welcome {auth.user}</p>
    <button onClick={handleLogout}>Logout</button>
    </div>

  )
}

export default Profile