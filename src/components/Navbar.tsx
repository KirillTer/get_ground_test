import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RouteNames } from './AppRouter';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const publicMenuItems = [
    {
      key: "/books",
      'data-testid': "books-link",
      onClick: () => navigate(RouteNames.HOME),
      label: 'Home'
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {publicMenuItems.map((page) => (
            <MenuItem key={page.label}>
              <Typography textAlign="center">{page.label}</Typography>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
 
export default Navbar;