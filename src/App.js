import React from 'react';
import { Container, Typography, Grid, AppBar, Toolbar, Switch, FormControlLabel, Box } from '@mui/material';
import ApplicationCard from './components/ApplicationCard';
import applications from './data/applications';
import FilterBar from './components/FilterBar';

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
      <Grid container spacing={3}>
        {applications.map((app, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ApplicationCard app={app} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
