import TaskIcon from '@mui/icons-material/TaskAltOutlined';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
 
function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <TaskIcon 
              sx={{ mr: 2 }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Gerenciamento de Projetos
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;