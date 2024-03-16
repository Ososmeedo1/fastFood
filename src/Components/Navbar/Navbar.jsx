import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/fast-food-logo.svg'

export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg bg-black navbar-dark position-sticky top-0 z-3">
  <div className="container">
    <Link className="navbar-brand" to={'/'}><img src={logo} className='w-75'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link main-color" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-color" to={'categories'}>Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-color" to={'ingredients'}>Ingredients</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link main-color" to={'contact'}>Contact</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  </>
}
