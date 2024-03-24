import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// Data for days
const days = [
  { label: 'Monday' },
  { label: 'Tuesday' },
  { label: 'Wednesday' },
  { label: 'Thursday' },
  { label: 'Friday' },
  { label: 'Saturday' },
  { label: 'Sunday' },
];

// Data for instruments
const instruments = [
  { label: 'Guitar' },
  { label: 'Bass' },
  { label: 'Drums' },
  { label: 'Keyboard' },
];

export default function Filter() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open Filter
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Filter</DialogTitle>
        <DialogContent>
          <Autocomplete
            disablePortal
            id="combo-box-demo-days"
            options={days}
            sx={{ width: 300, mb: 2 }}
            renderInput={(params) => <TextField {...params} label="Availability" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo-instruments"
            options={instruments}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Instrument" />}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
