import React from 'react';

const Opening = () => {
  return (
    <div className='container mb-5'>
      <h1 className='text-white p-2 bg-dark text-center'>OPENING</h1>
      <div className='d-flex justify-content-center'>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rg6CiPI6h2g?si=3NpMziFOykbWZEZ0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Opening;
