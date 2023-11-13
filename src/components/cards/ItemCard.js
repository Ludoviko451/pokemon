import React from 'react'
import Item from './Item'
import './Cards.css'
const ItemCard = ({results}) => {

  return (
    <div className='container'>
        <ul className='cards'>
            {
                results.map(p=> (
                    <li className='card-item'key={p.name}>
                        <Item url={p.url}></Item>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ItemCard