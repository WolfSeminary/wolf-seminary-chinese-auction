import * as React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import prizes from './Prizes'
import { useResolvedPath } from 'react-router-dom';

const ThankYouModal = () => {
  const rootRef = React.useRef(null);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  }
  const updateLastName = (event) => {
    setLastName(event.target.value);
  }
  const onCloseModal = () => {
    localStorage.setItem('users', [{ ...localStorage.getItem('users'), 'firstName': firstName, 'lastName': lastName, 'prizesList': prizes }]);
  }
  return (
    <Box
      sx={{
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        // The position fixed scoping doesn't work in IE11.
        // Disable this demo to preserve the others.
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
      }}
      ref={rootRef}
    >
      <Modal
        onClose={onCloseModal}
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        container={() => rootRef.current}
      >
        <Box
          sx={{
            position: 'relative',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: (theme) => theme.shadows[5],
            p: 4,
          }}
        >
          <Typography id="server-modal-title" variant="h6" component="h2">
            תזכו למצוות!
          </Typography>
          <Typography id="server-modal-description" sx={{ pt: 2 }}>
            יישר כוח על השתתפותכם בהחזקת מפעל הבית של סמינר וולף
          </Typography>
          <Typography>על מנת לשמור את נתוניך לצורך עריכת ההגרלות, נא הזן את הפרטים הבאים</Typography>
          <TextField label="שם פרטי" onChange={updateFirstName}></TextField>
          <TextField label="שם משפחה" onChange={updateLastName}></TextField>
          <button onClick={onCloseModal}>שמור פרטים</button>
        </Box>
      </Modal>
    </Box>
  );
}
export default ThankYouModal
