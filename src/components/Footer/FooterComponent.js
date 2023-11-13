import React from 'react'
import { Link } from 'react-router-dom'
const FooterComponent = () => {
  return (
    <div>
    <footer className='text-white py-4 bg-dark'>
      <div className='container'>
        <nav className='row'>
          <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
            <img src='./pokemonlogo.png' className='mx-2' height='80' alt='Pokemon Logo'></img>
          </Link>

          <ul className='col-12 col-md-3 list-unstyled'>
            <li className='font-weight-bold mb-2 text-center'>
              POKEMON
            </li>
            <li className='text-center'>
              On this website you can get information about your favorite pokemons.
            </li>
          </ul>

          <ul className='col-12 col-md-3 list-unstyled'>
            <li className='font-weight-bold mb-2 text-center'>
              LINKS
            </li>
            <li className='text-center'>
              <Link to='/pokemon' className='text-reset'>Pokemon</Link>
            </li>
            <li className='text-center'>
              <Link to='/items' className='text-reset'>ITEMS</Link>
            </li>
          </ul>

          <ul className='col-12 col-md-3 list-unstyled'>
            <li className='font-weight-bold mb-2 text-center'>
              SOCIAL NETWORKS
            </li>
            <li className='d-flex justify-content-between'>
              <i className="bi bi-github "></i>
              <i className="bi bi-steam"></i>
              <i className="bi bi-twitter-x"></i>
            </li>
          </ul>

          <div className='containter'>
              <p className='text-center mb-0 mt-2'>By Ludoviko451</p>
          </div>


        </nav>
      </div>
    </footer>
    </div>
  )
}

export default FooterComponent