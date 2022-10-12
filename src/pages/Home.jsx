import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import CharacterCard from '../components/CharacterCard';
import Skeletons from '../components/Skeletons';

const API_URL = 'https://swapi.dev/api/people';

function Home() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        <Grid mt={5} container spacing={3}>
          {characters.length === 0 ? (
            <Skeletons />
          ) : (
            characters.map((character) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={character.url}>
                <CharacterCard key={character.url} character={character} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
