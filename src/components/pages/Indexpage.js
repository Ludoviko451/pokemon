import React from 'react'
import ImageCarousel from '../Carousel';
import Pokemoninfo from '../Pokemoninfo';
import Opening from '../Opening';
import FooterComponent from '../Footer/FooterComponent';
export const indexpage = () => {
  return (
    <div>
      <Pokemoninfo></Pokemoninfo>
      <ImageCarousel></ImageCarousel>
      <Opening></Opening>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default indexpage