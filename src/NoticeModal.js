<<<<<<< HEAD
import * as React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 35f3100e43bb9b0fbfac4c75a86589d5f6c216a5
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

<<<<<<< HEAD
const BonussCard=()=> {
  const rootRef = React.useRef(null);

=======
const BonussCard = () => {
  const rootRef = React.useRef(null);
>>>>>>> 35f3100e43bb9b0fbfac4c75a86589d5f6c216a5
  return (
    <Box
      sx={{
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
<<<<<<< HEAD
        // The position fixed scoping doesn't work in IE11.
        // Disable this demo to preserve the others.
=======
>>>>>>> 35f3100e43bb9b0fbfac4c75a86589d5f6c216a5
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
            !כרטיס בונוס
          </Typography>
          <Typography id="server-modal-description" sx={{ pt: 2 }}>
<<<<<<< HEAD
         
           קנית 3 כרטיסים מאותה קטגוריה בחר מתנה נוספת בחינם 
=======
            קנית 3 כרטיסים מאותה קטגוריה בחר מתנה נוספת בחינם
>>>>>>> 35f3100e43bb9b0fbfac4c75a86589d5f6c216a5
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
export default BonussCard;
