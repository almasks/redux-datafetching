import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
  return (
    <div>
        <Link to="featured">featured</Link>
        <Link to="new">new</Link>
        <Outlet></Outlet>

    </div>
  )
}

export default Products