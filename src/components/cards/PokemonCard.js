import React from 'react';
import useFetch from '../UserFetch';

const PokemonCard = ({url}) => {
  const state=useFetch(url )// Ajusta la URL según sea necesario
  const { loading, data } = useFetch(url);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='card' style={{ width: '14rem' }}>
          <div className='card-header'>
            <h5 className='card-title'>{data.id}</h5>
          </div>
          <div className='card-body'>
            <img src={data.sprites.front_default} alt='pokemon' />
          </div>
          <div className='card-footer'>
            <p className='card-text text-capitalize'>
              {data.forms.map((form) => form.name).join(', ')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
