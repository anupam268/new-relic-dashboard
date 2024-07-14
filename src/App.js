import React from 'react';
import { Container, Typography, AppBar, Toolbar, Box } from '@mui/material';
import FilterBar from './components/FilterBar';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            New Relic Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box mt={2} mb={2}>
        <FilterBar />
      </Box>
      <Typography variant="h5" component="h2" gutterBottom>
        Applications and Related Hosts
      </Typography>
      <Dashboard />
    </Container>
  );
};

export default App;
