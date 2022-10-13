/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

function CharacterCard({ character, index }) {
  const API_IMG = `https://starwars-visualguide.com/assets/img/characters/${index}.jpg`;
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
      <CardMedia component="img" image={API_IMG} alt="Personagem" />
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h6" component="div">
            {character?.name}
          </Typography>
          <Typography mt={1} component="div">
            Specie: {species?.name ? species.name : 'Unspecified'}
          </Typography>
          <Typography mt={1} component="div">
            Birth Date: {character?.birth_year}
          </Typography>{' '}
          <Typography mt={1} component="div">
            {index}
          </Typography>
        </Box>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button variant="contained" size="small">
            Ver Detalhes
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
