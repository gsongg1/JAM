import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Availibility" />}
    />
  );
}

const days = [
  { instrument: 'Monday'},
  { instrument: 'Tuesday'},
  { instrument: 'Wednesday'},
  { instrument: 'Thursday'},
  { instrument: 'Friday'},
  { instrument: 'Saturday'},
  { instrument: 'Sunday'},
];