import { IItem } from "../../types";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';

export const Item = ({ title, score, by, time }: IItem) => {
    return(
        <Card sx={{ maxWidth: '100%', borderRadius: '15px', padding: '10px' }}>
            <CardActionArea >
                <Typography variant="h6" sx={{ padding: '5px', textTransform: 'uppercase', color: '#1faee9',  fontWeight: 'bold' }} component={Link} to="/news-page">
                    {title}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', padding: '5px' }}>
                    <Typography variant="body1" color="text.secondary" sx={{textTransform: 'capitalize'}}>
                        Author: {by}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Publication date: {new Date(time * 1000).toLocaleDateString('en-US')}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Rating: {score}
                    </Typography>
                </Box>
            </CardActionArea>
      </Card>
    );
};

