import React from 'react';
// import Logo from '../assets/logos/logo-primary.svg?react';
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Container,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  Link,
  Box,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [age, setAge] = React.useState('EN');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <AppBar position="sticky" color="transparent" sx={{ bgcolor: 'background.default', py: 2 }} elevation={0}>
      <Toolbar>
        <Container sx={{ display: 'flex', alignItems: 'center', height: '64px' }} maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            {/* <Logo /> */}
          </Box>
          <Box sx={{ flexGrow: 1 }} display="flex">
            <Link component={NavLink} to="/">
              <Typography color="text.primary" pr={10}>
                About us
              </Typography>
            </Link>
            <Typography component={RouterLink} to="/how-works" color="text.primary">
              How it works
            </Typography>
          </Box>
          <Box display="flex" gap={1}>
            <FormControl variant="standard" sx={{ mx: 2, minWidth: 20 }}>
              <Select value={age} label="Age" onChange={handleChange}>
                <MenuItem value={'EN'}>
                  <Typography>En</Typography>
                </MenuItem>
                <MenuItem value={'PL'}>
                  <Typography>Pl</Typography>
                </MenuItem>
                <MenuItem value={'UA'}>
                  <Typography>Ua</Typography>
                </MenuItem>
              </Select>
            </FormControl>
            <Button color="secondary" variant="outlined">
              <Typography color="text.primary" variant="button">
                Log in
              </Typography>
            </Button>
            <Button color="secondary" variant="contained">
              <Typography variant="button">Sign up</Typography>
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
