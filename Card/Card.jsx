import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 275 }}>
      <CardContent>
      <Chip label="Descaracterizado" color="error" variant="outlined" size="small"/>
        <Typography variant="h6" component="div">
          Igreja de santo antonio
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Praca do Patriarca
        </Typography>
        <Typography variant="body2">
          Alem da reconstruçao da fachada, em 1899 verificase
          no fundo do lote, onde atualmentese localiza o velario...
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver mais</Button>
      </CardActions>
    </Card>
  );
}