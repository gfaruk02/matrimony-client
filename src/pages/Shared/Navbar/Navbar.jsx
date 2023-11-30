import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useAdmin from '../../../hooks/useAdmin';

function Navbar() {
  const { user, logOut } = useAuth()
  const [isAdmin] = useAdmin()
  const handlesignOut = () => {
    logOut()
      .then(() => console.log('User LogOut Success'))
      .catch(error => console.error(error))
  }
  const pages = <>
    <li className="list-none ml-5 text-lg rounded text-rose-600 font-semibold">
      <NavLink
        to="/"
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : " ",
            padding: isActive ? "4px" : " ",
            rounded: isActive ? "lg" : " ",
            color: isActive ? "#5557B6" : "",
            // backgroundColor: isActive ? "#F9A6E4" : "",
            borderBottom: isActive ? "3px solid #0F13D1" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Home
      </NavLink>
    </li>
    <li className="list-none ml-5 text-lg rounded text-rose-600 font-semibold">
      <NavLink
        to="/biodatas"
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : " ",
            padding: isActive ? "4px" : " ",
            rounded: isActive ? "lg" : " ",
            color: isActive ? "#5557B6" : "",
            // backgroundColor: isActive ? "#F9A6E4" : "",
            borderBottom: isActive ? "3px solid #0F13D1" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Biodatas
      </NavLink>
    </li>
    <li className="list-none ml-5 text-lg rounded text-rose-600 font-semibold">
      <NavLink
        to="/about"
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : " ",
            padding: isActive ? "4px" : " ",
            rounded: isActive ? "lg" : " ",
            color: isActive ? "#5557B6" : "",
            // backgroundColor: isActive ? "#F9A6E4" : "",
            borderBottom: isActive ? "3px solid #0F13D1" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        About Us
      </NavLink>
    </li>
    <li className="list-none ml-5 text-lg rounded text-rose-600 font-semibold">
      <NavLink
        to="/contact"
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : " ",
            padding: isActive ? "4px" : " ",
            rounded: isActive ? "lg" : " ",
            color: isActive ? "#5557B6" : "",
            // backgroundColor: isActive ? "#F9A6E4" : "",
            borderBottom: isActive ? "3px solid #0F13D1" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Contact Us
      </NavLink>
    </li>

    <li className="list-none ml-5 text-lg rounded text-rose-600 font-semibold">
      <NavLink
        to="/register"
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : " ",
            padding: isActive ? "4px" : " ",
            rounded: isActive ? "lg" : " ",
            color: isActive ? "#5557B6" : "",
            // backgroundColor: isActive ? "#F9A6E4" : "",
            borderBottom: isActive ? "3px solid #0F13D1" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Register
      </NavLink>
    </li>
    <li className="list-none ml-5 text-lg rounded text-rose-600 font-semibold">
      <NavLink
        to="/login"
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : " ",
            padding: isActive ? "4px" : " ",
            rounded: isActive ? "lg" : " ",
            color: isActive ? "#5557B6" : "",
            // backgroundColor: isActive ? "#F9A6E4" : "",
            borderBottom: isActive ? "3px solid #0F13D1" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Login
      </NavLink>
    </li>
    {user && isAdmin &&
      <>
        <li className="list-none  ml-5 lg:ml-96 font-bold text-lg rounded text-rose-600 pb-5">
          <NavLink
            to="/dashboard/adminhome"
            style={({ isActive, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : " ",
                padding: isActive ? "4px" : "pl ",
                rounded: isActive ? "lg" : " ",
                color: isActive ? "#5557B6" : "",
                // backgroundColor: isActive ? "#F9A6E4" : "",
                borderBottom: isActive ? "3px solid #0F13D1" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Dashboard
          </NavLink>
        </li>
        <li className='list-none ml-5'>
          <button className='bg-rose-700 rounded-lg hover:bg-rose-400 text-white font-semibold px-2 md:py-2 md:px-4 text-sm md:text-base' onClick={handlesignOut}>Log Out</button></li>

      </>
    }
    {user && !isAdmin &&
      <>
        <li className="list-none  ml-5 lg:ml-96 font-bold text-lg rounded text-rose-600 pb-5">
          <NavLink
            to="/dashboard/userhome"
            style={({ isActive, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : " ",
                padding: isActive ? "4px" : " ",
                rounded: isActive ? "lg" : " ",
                color: isActive ? "#5557B6" : "",
                // backgroundColor: isActive ? "#F9A6E4" : "",
                borderBottom: isActive ? "3px solid #0F13D1" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Dashboard
          </NavLink>
        </li>
        <li className='list-none ml-5'>
          <button className='bg-rose-700 rounded-lg hover:bg-rose-400 text-white font-semibold px-2 md:py-2 md:px-4 text-sm md:text-base' onClick={handlesignOut}>Log Out</button></li>

      </>
    }

  </>
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className='ml-32'>
      <AppBar sx={{ backgroundColor: '#ffffff', color: "blue", mb: 10, }}>
        <Container maxWidth="xl" sx={{ marginLeft: 9 }}>
          <Toolbar disableGutters>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to='/'> <img
                src="https://i.ibb.co/p427nQ5/matrimony-logo.png"
                alt="Logo"
                style={{ maxWidth: '70px', marginRight: '10px' }}
              /></Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <ul tabIndex={0} className="menu menu-sm h-full dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {pages}
                </ul>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img
                src="https://i.ibb.co/p427nQ5/matrimony-logo.png"
                alt="Logo"
                style={{ maxWidth: '70px', marginRight: '10px' }}
              />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;