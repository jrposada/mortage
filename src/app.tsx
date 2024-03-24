import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Page from './app/page/page';
import { ROUTES } from './routes';
import AppBar from './ui/app-bar/app-bar';

function App() {
    const [open, setOpen] = useState(true);

    const toggleSideMenu = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <AppBar>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleSideMenu}
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
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        <Routes>
                            {ROUTES.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={route.Page}
                                />
                            ))}
                        </Routes>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Page />
        </>
    );
}

export default App;
