import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: 'white', fontWeight: 'bold' }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' , fontWeight: 'bold' }}>
            CRUD React
          </Typography>
          <Button color="inherit" sx={{ color: 'white', fontWeight: 'bold' }}>65070141</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
