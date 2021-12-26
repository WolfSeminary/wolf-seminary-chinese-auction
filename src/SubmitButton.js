import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Box, Icon } from '@mui/material';

export default function SubmitButton() {
    return (
        <Stack direction="col" spacing={2}>

            {/* <Button variant="contained" endIcon={<SendIcon />}> */}
            <Button variant="contained">
                אשר הכנסת סכום מדויק לתשלום בקופות הייעודיות
            </Button>
            <Box>
                👇
            </Box>
        </Stack>
    );
}