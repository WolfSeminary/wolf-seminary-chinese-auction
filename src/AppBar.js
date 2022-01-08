// const AppBar =()=>{



// }
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
//import { Menu as MenuIcon } from "@material-ui/icons";

export default function MyAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ברוכים הבאים למכירת החסד של סמינר וולף
                       <br/>
                        מפעל הבית
                        {/* <p style={{ margin: '0px' }}>מפעל הבית</p> */}
                    </Typography>
                  
                </Toolbar>
              
            </AppBar>
        </Box>
    );
}