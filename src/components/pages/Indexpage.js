import React from 'react'
import ImageCarousel from '../Carousel';
import Pokemoninfo from '../Pokemoninfo';
import Opening from '../Opening';
export const indexpage = () => {
  return (
    <div>
      <Pokemoninfo></Pokemoninfo>
      <ImageCarousel></ImageCarousel>
      <Opening></Opening>
    </div>
  )
}

export default indexpage