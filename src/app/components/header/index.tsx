import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import SideMenu from './nav';
import Logo from './logo';
import LogoMobile from './logoMobile';
import SideNavButton from './sideNavButton';
import Links from './links';
import UserMenu from './userMenu';


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar 
          position="fixed"
          sx={{
              backdropFilter: 'blur(8px)',
              backgroundColor: 'rgba(0,0,0,0)',
              border: '2px solid white'
          }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Logo />

            <SideNavButton 
              handleOpenNavMenu={handleOpenNavMenu}
            />

            <LogoMobile />

            <Links
              handleCloseNavMenu={handleCloseNavMenu}
            />

            <UserMenu 
              anchorElUser={anchorElUser}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseUserMenu={handleCloseUserMenu}
            />
          </Toolbar>
        </Container>
      </AppBar>
      <SideMenu 
        open={anchorElNav !== null && anchorElNav !== undefined}
        setOpen={setAnchorElNav}
        handleCloseNavMenu={handleCloseNavMenu}
      />
    </>
  );
}
export default ResponsiveAppBar;