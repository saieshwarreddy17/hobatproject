import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

const Verified = () => {
  return (
    <Grid container sx={{ backgroundColor: '#e8fbff', padding: '70px 20px' }}>
      <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', fontWeight: 700, position: 'relative' }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: '20px',fontSize:'28px' }}>
          Let Suppliers find you
        </Typography>
        <div style={{ width: '20%', height: '3px', backgroundColor: 'orange', position: 'absolute', bottom: '5px', left: '55%' }}></div>
      </Grid>
      
      <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant="contained" color="warning" sx={{ fontWeight: 700 }}>
          Get Verified
        </Button>
      </Grid>
    </Grid>  
  );
};

export default Verified;
