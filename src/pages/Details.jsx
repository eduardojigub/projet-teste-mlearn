import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Details() {
  const [characterDetails, setCharacterDetails] = useState([]);
  // const [movies, setMovies] = useState([]);
  const { characterId } = useParams();

  const getCharacterDetails = async () => {
    const response = await fetch(`https://swapi.dev/api/people/${characterId}`);
    const data = await response.json();
    setCharacterDetails(data);
  };

  useEffect(() => {
    getCharacterDetails();
  }, []);

  return (
    <>
      <div>{characterDetails?.name}</div>
      <div>{characterDetails?.birth_year}</div>
      <div>{characterDetails?.eye_color}</div>
      <div>{characterDetails?.gender}</div>
      <div>{characterDetails?.hair_color}</div>
      <div>{characterDetails?.height}</div>
      <div>{characterDetails?.mass}</div>
      <div>{characterDetails?.skin_color}</div>
      <div>{characterDetails?.homeworld}</div>
      <div>{characterDetails?.species}</div>
    </>
  );
}

export default Details;
