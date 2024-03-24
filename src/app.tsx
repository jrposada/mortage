import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import AppBar from './ui/app-bar/app-bar';
import AppDrawer from './ui/app-drawer/app-drawer';

function App() {
    const [open, setOpen] = useState(true);

    const toggleAppDrawer = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleAppDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Routes>
                            {ROUTES.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={route.Title}
                                />
                            ))}
                        </Routes>
                    </Toolbar>
                </AppBar>
                <AppDrawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleAppDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav" style={{ overflow: 'hidden' }}>
                        {ROUTES.map((route) => (
                            <React.Fragment key={route.path}>
                                {route.navItem}
                            </React.Fragment>
                        ))}
                        {/* <Divider sx={{ my: 1 }} /> */}
                    </List>
                </AppDrawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Routes>
                        {ROUTES.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.Page}
                            />
                        ))}
                    </Routes>
                </Box>
            </Box>
        </>
    );
}

export default App;
