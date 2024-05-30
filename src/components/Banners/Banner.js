import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import bannerOne from '../../assets/images/bannerOne.png';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const OverlayBox = styled(Box)({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(7, 47, 87, 0.7)', // Adjust the opacity as needed
    zIndex: 1,
  },
  '> *': {
    position: 'relative',
    zIndex: 2,
  },
});

const Banner = () => {
  return (
    <OverlayBox sx={{ 
      backgroundImage: `url(${bannerOne})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '400px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'column',
      padding: '20px', // Add padding for better spacing
    }}>
      <Typography className='bannerheadone' variant="h2" fontWeight={600} sx={{ color: '#fff', marginBottom: '20px' }}>
        Are You a Supplier?
      </Typography>
      <Typography className='bannerheadtwo' variant="h4" fontWeight={700} sx={{ color: '#fff', marginBottom: '20px' }}>
        Explore Matching Opportunities
      </Typography>
      <Box className='bannerboxone' sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <TextField className='bannertextone'
          placeholder="Search your required service here"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ color: 'orange' }} />
            ),
            sx: {
              width: '300px', 
              backgroundColor: 'white', 
              marginTop: '10px', 
              marginBottom: '10px', 
              border: 'none', // Remove border
              '& fieldset': { border: 'none' } // Ensure the outlined variant has no border
            } 
          }}
        />
        <TextField className='bannertexttwo'
          placeholder="Search your desired location here"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <LocationOnIcon sx={{ color: 'orange' }} />
            ), 
            sx: { 
              width: '300px', 
              backgroundColor: 'white',
              marginLeft: '20px', 
              marginTop: '10px', 
              marginBottom: '10px', 
              border: 'none', // Remove border
              '& fieldset': { border: 'none' } // Ensure the outlined variant has no border
            } 
          }}
        />
        <Button className='bannerbuttonone' variant="contained" color="success" sx={{ margin:'10px' }}>
          Search
        </Button>
      </Box>
      <Typography sx={{ color: 'white' }}>
        Are you Ready?
        <Link 
          className='post-requirement' 
          to="/your-post-requirement-url" 
          underline="hover" 
          style={{ color: 'white', marginTop: '10px' }} // Use style prop to ensure white color
        >
          Click here if you are looking to post a requirement
        </Link>
      </Typography>
    </OverlayBox>
  );
};

export default Banner;
