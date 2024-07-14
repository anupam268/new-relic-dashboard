import React from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';

const FilterBar = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Show Metrics"
      />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Show Hosts"
      />
    </Box>
  );
};

export default FilterBar;
