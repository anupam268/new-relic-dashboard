import React from 'react';
import { Grid } from '@mui/material';
import ApplicationCard from './components/ApplicationCard';
import applications from './data/applications';

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      {applications.map((app, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <ApplicationCard app={app} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
