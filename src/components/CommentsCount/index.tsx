import { Badge, Container } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useAppSelector } from "../../store/hooks";

export const CommentsCount = () => {
    const item = useAppSelector((state) => state.items.item);

    return (
        <Container sx={{paddingTop: '13px'}}>
            <Badge color="primary" badgeContent={item.descendants}> 
                <ChatBubbleOutlineIcon />
            </Badge>
        </Container>
    );
}