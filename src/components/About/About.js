import React, { useState } from 'react';
import { Grid, Typography, Button, Tabs, Tab, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import YouTubeIcon from '@mui/icons-material/YouTube';
// Correct the file path and include the correct case
import imageOne from '../../assets/images/imageOne.jpg'; // Use the correct case

const About = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Grid container sx={{ paddingTop: '40px', paddingBottom: '40px' }}>
      {/* First 50% */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', padding: '0px 60px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Ready to dive into HABOT?
        </Typography>
        <Typography sx={{ fontWeight: 400, mt: 2, mb: 4, fontSize: '15px' }} variant="body1" color='#151515' gutterBottom>
          Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
        </Typography>
        <Button variant="contained" color="success" sx={{ textAlign: 'center', mr: 30 }} endIcon={<ArrowForwardIcon />}>
          Sign Up today!
        </Button>
      </Grid>
      
      {/* Second 50% */}
      <Grid item xs={12} md={6} sx={{ padding: '0px 60px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <Button variant="outlined" color="warning" sx={{ width: '100%', padding: '10px 0px', color: '#000' }}>
              Abu Dhabi
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <Button variant="outlined" color="warning" sx={{ width: '100%', padding: '10px 0px', color: '#000' }}>
              Dubai
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <Button variant="outlined" color="warning" sx={{ width: '100%', padding: '10px 0px', color: '#000' }}>
              Sharjah
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <Button variant="outlined" color="warning" sx={{ width: '100%', padding: '10px 0px', color: '#000' }}>
              Fujairah
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <Button variant="outlined" color="warning" sx={{ width: '100%', padding: '10px 0px', color: '#000' }}>
              Ras Al Khaimah
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'center' }}>
            <Button variant="outlined" color="warning" sx={{ width: '100%', padding: '10px 0px', color: '#000' }}>
              Umm Al Quwain
            </Button>
          </Grid>
        </Grid>
      </Grid>
      
      {/* Below section with YouTube and Tabs */}
      <Box sx={{ width: '100%', backgroundColor: '#072f57', paddingTop: '60px', paddingBottom: '60px', margin: '60px 60px' }}>
        <Grid container>
          {/* First 50% with YouTube link */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ position: 'relative' }}>
              <img src={imageOne} alt="YouTube Thumbnail" style={{ width: '100%', height: '250px', borderRadius: '5px' }} />
              <Button
                sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'red' }}
                onClick={() => window.open('https://www.youtube.com/watch?v=IZLp-TZyDkQ', '_blank')}
              >
                <YouTubeIcon sx={{ fontSize: 60 }} />
              </Button>
            </Box>
          </Grid>

          {/* Second 50% with Tabs */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              aria-label="buyer-seller-tabs"
              sx={{
                '.MuiTabs-indicator': { backgroundColor: 'orange' },
                '.MuiTab-root': { fontWeight: 700, color: 'white' },
                '.Mui-selected': { color: 'orange !important' } // Use !important to ensure the color is applied
              }}
            >
              <Tab label="Buyer" />
              <Tab label="Seller" />
            </Tabs>
            <Box sx={{ paddingTop: '20px' }}>
              {tabIndex === 0 && (
                <Box>
                  <ul style={{ color: 'white', padding: '0', listStyleType: 'none' }}>
                    <li className="custom-list-item">Post your requirements.</li>
                    <li className="custom-list-item">Sit back for multiple suppliers to contact you.</li>
                    <li className="custom-list-item">Choose among the suppliers based on the ratings and reviews.</li>
                  </ul>
                </Box>
              )}
              {tabIndex === 1 && (
                <Box>
                  <ul style={{ color: 'white', padding: '0', listStyleType: 'none' }}>
                    <li className="custom-list-item">Register your products or services.</li>
                    <li className="custom-list-item">Get noticed by potential buyers.</li>
                    <li className="custom-list-item">Expand your business network.</li>
                  </ul>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default About;
