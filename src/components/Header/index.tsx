import { Typography } from '@mui/material';
import './index.css';

export const Header = () => {
    return (
        <Typography className='Header' variant="h1" component="div" gutterBottom align='center'
        sx={{ color: '#1faee9' }}>
            Hacker News
        </Typography>
    );
}