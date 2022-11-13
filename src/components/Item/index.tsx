import { IItem } from "../../types";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';

export const Item = ({ name, rating, author, date }: IItem) => {
    return(
        <Card sx={{ maxWidth: '100%', borderRadius: '15px', padding: '10px' }}>
            <CardActionArea >
                <Typography variant="h6" sx={{ padding: '5px', textTransform: 'uppercase', color: '#1faee9',  fontWeight: 'bold' }} component={Link} to="/news-page">
                    {name}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', padding: '5px' }}>
                    <Typography variant="body1" color="text.secondary">
                        Author:{author}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Publication date: {date}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Rating: {rating}
                    </Typography>
                </Box>
            </CardActionArea>
      </Card>
    );
};

