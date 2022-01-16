import * as React from 'react';
import Button from '@mui/material/Button';
import PanToolIcon from '@mui/icons-material/PanTool';
import Stack from '@mui/material/Stack';

export default function SubmitButton() {
    return (
        <div style={{ display: 'flex', width: '30vw', justifyItems: 'center' }}>
            <Stack direction="column" spacing={2}>
                <Button direction="column" variant="contained" endIcon={<PanToolIcon />}> 
                    אשר הכנסת סכום מדויק לתשלום בקופות הייעודיות
                </Button>
            </Stack>
        </div>
    );
}