import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState, useContext } from 'react';
import { AuthContext } from "../../context/authContext";
import PopupSignIn from '../popupSingIn';
import PopupSignUp from '../popupSingUp';
import ReactPlayer from 'react-player';
import Grid from '@mui/material/Grid';
import logo from '../../images/logo.mp4';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
// TODO: ask location by useLocation from react-router-dom

const pages = ['homePage', 'prices', 'schedule'];

function ResponsiveAppBar() {
    //const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { token, logout, currentUser } = useContext(AuthContext);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    function navigateTo(path) {
        window.location.href = path;
    }

    if (window.location.pathname === '/enter-ai' || window.location.pathname === '/secretary') {
        return null;
    }

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{ backgroundColor: "black" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography textAlign="center" sx={{
                        mr: 2,
                        fontFamily: "unset",
                        fontWeight: 400,
                        letterSpacing: ".1rem",
                        color: "white",
                        textDecoration: "none",
                    }}>upLine</Typography>
                    <ReactPlayer
                        url={logo}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="190px"
                        height="100%"
                        style={{ position: 'absolute' }}
                    />
                    <Typography textAlign="center" sx={{
                        mr: 2,
                        fontFamily: "unset",
                        fontWeight: 400,
                        letterSpacing: ".1rem",
                        color: "white",
                        textDecoration: "none",
                        width: "180px"
                    }}>Fitness</Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, textAlign: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                //fontSize='100px'
                                onClick={() => navigateTo(`./${page}`)}
                                sx={{ my: 2, color: 'white', display: 'block', textAlign: 'center', marginLeft: '10%',fontFamily: 'Monospace' }}
                            >
                                {page}
                                {page === 'homePage' ? <HomeIcon /> : <></>}
                                {page === 'prices' ? <MonetizationOnIcon /> : <></>}
                                {page === 'schedule' ? <DateRangeIcon /> : <></>}
                            </Button>
                        ))}
                    </Box>
                    {console.log(token)}
                    <Box sx={{ flexGrow: 0 }}>
                        {token ?
                            <>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center" onClick={() => logout()}>sign out</Typography>
                                    </MenuItem>

                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center" onClick={() => navigateTo(`profile`)}>my profile</Typography>
                                    </MenuItem>
                                </Menu> </>
                            : <>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <PopupSignIn />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <PopupSignUp />
                                    </Grid>
                                </Grid> </>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;