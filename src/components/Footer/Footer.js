import React from 'react';
import { Box, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logoOne from '../../assets/images/logoOne.png';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#123557', color: '#fff', padding: '40px 70px' }}>
      <Divider sx={{ borderColor: '#fff', mb: 3 }} />

      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={6}>
          <Box className='footerboxtwo' display="flex" alignItems="center">
            <Typography variant="h6" sx={{ mr: 2 }}>
              <img className='footerimageone' src={logoOne} alt="Logo" style={{ height: '100px', width: '150px' }} />
            </Typography>
            <Grid container spacing={4}>
              <Grid item>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>Company</Typography>
                <Link href="#" color="inherit" sx={{ display: 'block', marginTop: 1, textDecoration: 'none', fontWeight: 300 }}>About</Link>
                <Link href="#" color="inherit" sx={{ display: 'block', marginTop: 1, textDecoration: 'none', fontWeight: 300 }}>FAQ</Link>
              </Grid>
              <Grid item>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>Terms</Typography>
                <Link href="#" color="inherit" sx={{ display: 'block', marginTop: 1, textDecoration: 'none', fontWeight: 300 }}>Data</Link>
                <Link href="#" color="inherit" sx={{ display: 'block', marginTop: 1, textDecoration: 'none', fontWeight: 300 }}>Privacy</Link>
                <Link href="#" color="inherit" sx={{ display: 'block', marginTop: 1, textDecoration: 'none', fontWeight: 300 }}>Accessibility</Link>
              </Grid>
              <Grid item>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>Related</Typography>
                <Link href="#" color="inherit" sx={{ display: 'block', marginTop: 1, textDecoration: 'none', fontWeight: 300 }}>Find Buyer</Link>
                <Link href="#" color="inherit" sx={{ display: 'block', marginTop: 1, textDecoration: 'none', fontWeight: 300 }}>Feedback</Link>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="flex-end" alignItems="center">
          <Box className='footerboxthree' textAlign="right">
            <Box>
              <IconButton href="#" color="inherit" sx={{ border:' 1px solid #fff',borderRadius:'50%',mr: 1}}>
                <LinkedInIcon />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ border:' 1px solid #fff',borderRadius:'50%',mr: 1}}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ border:' 1px solid #fff',borderRadius:'50%',mr: 1}}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ border:' 1px solid #fff',borderRadius:'50%',mr: 1}}>
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: '#fff', mt: 3 }} />
    </Box>
  );
};

export default Footer;
