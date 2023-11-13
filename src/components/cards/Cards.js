import React from 'react'
import PokemonCard from './PokemonCard'
import './Cards.css'
const Cards = ({results}) => {

  return (
    <div className='container'>
        <ul className='cards'>
            {
                results.map(p=> (
                    <li className='card-item'key={p.name}>
                        <PokemonCard url={p.url}></PokemonCard>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Cards