import React from 'react';
import { Card, CardContent, Typography, Box, Paper, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const statusColors = {
  error: '#f44336',
  warning: '#ff9800',
  success: '#4caf50',
};

const lightStatusColors = {
  error: '#ffebee',   // light red
  warning: '#fffde7', // light yellow
  success: '#e8f5e9', // light green
};

const AppNameBox = styled(Box)(({ status }) => ({
  backgroundColor: lightStatusColors[status],
  color: 'black',
  padding: '8px',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
}));

const MetricsBox = styled(Box)({
  padding: '16px',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '0px', // Ensure it aligns with the AppNameBox
});

const MetricsRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
});

const ApplicationCard = ({ app }) => {
  const statusClass = app.status;

  return (
    <Paper elevation={3}>
      <Card
        sx={{
          position: 'relative',
          borderTop: `5px solid ${statusColors[statusClass]}`,
          transition: 'transform 0.2s',
          height: '270px', // Adjusted height for the card
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      >
        <Box>
          <AppNameBox status={statusClass}>
            <Typography variant="h6" component="h2" noWrap sx={{ fontSize: '0.9rem' }}>
              {app.name}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>
              Violations: {app.violations}
            </Typography>
          </AppNameBox>
          <MetricsBox>
            <MetricsRow>
              <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>Apdex: {app.apdex}</Typography>
              <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>Error Rate: {app.errorRate}</Typography>
            </MetricsRow>
            <MetricsRow>
              <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>Throughput: {app.throughput}</Typography>
              <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>Web Resp. Time: {app.responseTime}</Typography>
            </MetricsRow>
          </MetricsBox>
          <Divider sx={{ margin: '0 16px' }} />
        </Box>
        <CardContent sx={{ paddingTop: 0 }}>
          <Typography variant="body2" sx={{ fontSize: '0.7rem' }}>Related Hosts: {app.hosts}</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ApplicationCard;
