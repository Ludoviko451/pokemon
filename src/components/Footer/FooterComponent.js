import React from 'react'
import { Link } from 'react-router-dom'
const FooterComponent = () => {
  return (
    <div>
    <footer className='text-white py-4 bg-dark'>
      <div className='container'>
        <nav className='row'>
          <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
            <img src='./pokemonlogo.png' className='mx-2' width='150' alt='Pokemon Logo'></img>
          </Link>
          {/* Agrega más enlaces según sea necesario */}
        </nav>
      </div>
    </footer>
    </div>
  )
}

export default FooterComponent