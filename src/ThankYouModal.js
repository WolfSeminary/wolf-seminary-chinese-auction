import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const ThankYouModal = (props) => {
  const rootRef = React.useRef(null);
  function onCloseModal() {
    props.setShouldShowThankYouModal(false);
  }
  return (
    <Box
      onClose={() => onCloseModal}
      sx={{
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        '@media all and (-ms-high-contrast: none)': {
          display: 'none',
        },
      }}
      ref={rootRef}
    >
      <Modal
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
          <TextField label="שם פרטי"></TextField>
          <TextField label="שם משפחה"></TextField>
        </Box>
      </Modal>
    </Box>
  );
}
export default ThankYouModal
