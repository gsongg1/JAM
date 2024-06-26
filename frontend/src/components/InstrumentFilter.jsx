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
      renderInput={(params) => <TextField {...params} label="Instrument" />}
    />
  );
}

const instruments = [
  { instrument: 'Guitar'},
  { instrument: 'Bass'},
  { instrument: 'Drums'},
  { instrument: 'Keyboard'},
];