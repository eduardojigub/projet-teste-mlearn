/* eslint-disable react/jsx-one-expression-per-line */
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Details() {
  const [characterDetails, setCharacterDetails] = useState([]);
  // const [movies, setMovies] = useState([]);
  const { characterId } = useParams();
  const API_IMG_DETAILS = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`;
  const getCharacterDetails = async () => {
    const response = await fetch(`https://swapi.dev/api/people/${characterId}`);
    const data = await response.json();
    setCharacterDetails(data, characterId);
  };

  useEffect(() => {
    getCharacterDetails();
  }, []);

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card text-black">
              <i className="fab fa-apple fa-lg pt-3 pb-1 px-3" />
              <img
                src={API_IMG_DETAILS}
                className="card-img-top"
                alt="Apple Computer"
              />
              <div className="card-body">
                <div className="text-center">
                  <p className="text-muted mb-4">{characterDetails?.name}</p>
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>Birth Date: {characterDetails?.birth_year}</span>
                    <span>Eye Color: {characterDetails?.eye_color}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Gender: {characterDetails?.gender}</span>
                    <span>Hair Color: {characterDetails?.hair_color}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Height: {characterDetails?.height}</span>
                    <span>Mass: {characterDetails?.mass}</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                  <span>Skin Color: {characterDetails?.skin_color}</span>
                  <span>HomeWorld: {characterDetails?.homeworld}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
