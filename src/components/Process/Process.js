import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import buyerIcon from '../../assets/images/buyerIcon.png';
import connectIcon from '../../assets/images/connectIcon.png';
import contactsIcon from '../../assets/images/contactsIcon.png';
import reviewsIcon from '../../assets/images/reviewsIcon.png';
import signupIcon1 from '../../assets/images/signupIcon1.png';
import suppliersIcon from '../../assets/images/suppliersIcon.png';

const iconStyle = {
  width: 60,
  height: 60,
  paddingTop: '20px',
  paddingBottom: '20px',
};

const Process = () => {
  return (
    <Box className='processbox' mt={6} px={10} pb={14}>
      <Typography className='processheadone' variant="h4" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>How it Works</Typography>
      
      <Typography className='processheadtwo' variant="body1" sx={{ mb: 5, textAlign: 'center', padding: '0px 200px' }}>
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
      </Typography>

      <Grid container spacing={0}>
        {[
          { title: 'Select Your Role and Sign Up', image: signupIcon1 },
          { title: 'Buyers Post Your Requirements', image: buyerIcon },
          { title: 'Review, Select, and Contact the Best Suppliers', image: reviewsIcon },
          { title: 'Suppliers Complete your profile and get notified for opportunities', image: suppliersIcon },
          { title: 'Contact to Buyers and Share your Quote for the service', image: contactsIcon },
          { title: 'Both the Parties can Connect and Make Business Leave a Feedback', image: connectIcon },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ bgcolor: index % 2 === 0 ? '#e8fbff' : 'white', height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={item.image} alt={`${item.title} icon`} style={iconStyle} />
                <Typography className='processtitle' variant="h6" gutterBottom sx={{padding:'0px 40px', fontWeight:600,fontSize:'17px', textAlign:'center'}}>{item.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Process;
