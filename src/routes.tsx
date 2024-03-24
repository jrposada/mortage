import Typography from '@mui/material/Typography';
import { t } from 'i18next';
import Page from './app/page/page';

export const ROUTES = [
    {
        path: '/',
        Title: (
            <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
            >
                {t('side-menu.calculator')}
            </Typography>
        ),
        Page: <Page></Page>,
    },
];
