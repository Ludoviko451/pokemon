import React, { useEffect } from 'react';
import useFetch from '../UserFetch';
import Cards from '../cards/Cards';
import FooterComponent from '../Footer/FooterComponent'
const Pokemon = () => {
  const [url, setUrl] = React.useState('https://pokeapi.co/api/v2/pokemon/');
  const state = useFetch(url);
  const { loading, data } = state;

  useEffect(() => {
    if (loading) {
      console.log("Loading...");
    } else {
      console.log(data.results);
    }
  }, [loading, data]);

  return (
    <div>

      {
        loading
        ?
        <h1>Loading...</h1>
        :
        <div>
        <Cards results={data.results}></Cards>

        <div className='container m-auto text-center'>
            <button onClick={()=> setUrl(data.previous)}className='m-2 btn btn-dark'>Previous</button>
            <button onClick={()=> setUrl(data.next)}className='m-2 btn btn-dark'>Next</button>
        </div>
        </div>

      }

    <FooterComponent></FooterComponent>

    </div>

  );
};

export default Pokemon;
