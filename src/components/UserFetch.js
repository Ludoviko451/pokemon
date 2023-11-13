import React, { useState, useEffect } from 'react';

const UserFetch = (url) => {
  const [result, setResult] = useState({ loading: true, data: null });

  useEffect(() => {
    const getData = async () => {
      try {
        setResult({ loading: true, data: null });
        const resp = await fetch(url);
        const data = await resp.json();
        setResult({ loading: false, data });
      } catch (error) {
        console.error('Error fetching data:', error);
        setResult({ loading: false, data: null });
      }
    };

    getData();
  }, [url]);

  return result;
};

export default UserFetch;
