/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const API_IMG = 'https://starwars-visualguide.com/assets/img/characters/1.jpg';

function CharacterCard({ character }) {
  const [species, setSpecies] = useState('');

  const getSpecies = async () => {
    const response = await fetch(character.species[0]);
    const data = await response.json();
    setSpecies(data);
  };

  useEffect(() => {
    getSpecies();
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={API_IMG} alt="Olá, eu sou o Luke" />
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h6" component="div">
            {character.name}
          </Typography>
          <Typography mt={1} component="div">
            {species.name}
          </Typography>
          <Typography mt={1} component="div">
            {character.birth_year}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
