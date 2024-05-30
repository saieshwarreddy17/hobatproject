import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logoTwo from '../../assets/images/logoTwo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', width: '100%' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 4 }}>
            <img src={logoTwo} alt="Logo" style={{ height: '100px', width: 'auto' }} />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0, mr: 3 }}>
            <Button sx={{ color: '#6d6e71', mr: 2 }} component={Link} to="/find-suppliers">
              Find Suppliers
            </Button>
            <Button sx={{ color: '#6d6e71', mr: 2 }} onClick={handleMenuOpen}>
              Find Service Tags
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/service-tag-1">Service Tag 1</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/service-tag-2">Service Tag 2</MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/service-tag-3">Service Tag 3</MenuItem>
            </Menu>
            <Button sx={{ mt: 1, mb: 1, pl: 4, pr: 4, backgroundColor: 'white', color: '#00732f', border: '1px solid green', '&:hover': { backgroundColor: 'darkgreen', color: 'white' }, fontWeight: 600 }} component={Link} to="/login">
              Login / Sign Up
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              sx={{ color: 'black' }}
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <List>
          <ListItem button component={Link} to="/find-suppliers" onClick={handleDrawerToggle}>
            <ListItemText primary="Find Suppliers" />
          </ListItem>
          <ListItem button onClick={handleMenuOpen}>
            <ListItemText primary="Find Service Tags" />
            </ListItem>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ '& .MuiPaper-root': { width: '200px' } }}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/service-tag-1">Service Tag 1</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/service-tag-2">Service Tag 2</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/service-tag-3">Service Tag 3</MenuItem>
          </Menu>
          <ListItem button component={Link} to="/login" onClick={handleDrawerToggle}>
            <ListItemText primary="Login / Sign Up" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
