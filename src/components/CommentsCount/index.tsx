import { Badge, Container } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { ICommentsCount } from "../../types";

export const CommentsCount = (props: ICommentsCount) => {
    return (
        <Container sx={{paddingTop: '13px'}}>
            <Badge color="primary" badgeContent={props.descendants}> 
                <ChatBubbleOutlineIcon />
            </Badge>
        </Container>
    );
}