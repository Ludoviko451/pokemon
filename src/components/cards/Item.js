import React from 'react';
import useFetch from '../UserFetch';
import Modal from './Modal'
const Item = ({url}) => {
  const state=useFetch(url )// Ajusta la URL según sea necesario
  const { loading, data } = useFetch(url);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='card' style={{ width: '14rem' }} data-bs-toggle="modal" data-bs-target={`#id${data.id}`}>
          <div className='card-header'>
            <h5 className='card-title'>{data.id}</h5>
          </div>
          <div className='card-body'>
            <img src={data.sprites.default} alt='pokemon' />
          </div>
          <div className='card-footer'>
            <p className='card-text text-capitalize'>
              {data.name}
            </p>
          </div>
          <Modal id={`id${data.id}`} title={data.name} content={data.effect_entries[0].effect} />
        </div>

      )}
    </div>
  );
};

export default Item;
