import { Box, Link } from "@mui/material";
import { useEffect } from "react";
import { BackButton } from "../../components/BackButton";
import { Comments } from "../../components/Comments";
import { Item } from "../../components/Item";
import { useAppDispatch } from "../../store/hooks";
import { IItem } from "../../types";
import { getRootComments } from "../../utils/api/comments";

export const ItemPage = (props: IItem) => {
    const dispatch = useAppDispatch();
    
    // useEffect(() => {
    //     if (props.kids.length !== 0) {
    //         dispatch(getRootComments(props.kids));
    //     }
    // });

    return (
        <Box sx={{ width: '100%', height: '600px', backgroundColor: '#19191b'}}>
            <BackButton />
            <Box sx={{ width: '80%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Item {...props} /> 
                <Link href={props.url} underline="hover" target="_blank" rel="noopener">LINK: {props.url}</Link> 
                <Comments descendants={props.descendants} /> 
            </Box>
        </Box>
    );
};