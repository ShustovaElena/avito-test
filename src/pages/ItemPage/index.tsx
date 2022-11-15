import { Box, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton";
import { Comments } from "../../components/Comments";
import { Item } from "../../components/Item";
import { Preloader } from "../../components/Preloader";
import { useAppDispatch } from "../../store/hooks";
import { IItem } from "../../types";
import { getRootComments } from "../../utils/api/comments";

export const ItemPage = (props: IItem) => {
    const { descendants, url, kids, id } = props;
    const dispatch = useAppDispatch();
    const [isPreloader, setIsPreloader] = useState(true);
    
    useEffect(() => {
        if (descendants === 0) {
            dispatch(getRootComments([])).then(() => setIsPreloader(false));
        } else {
            dispatch(getRootComments(props.kids)).then(() => setIsPreloader(false));
        }
    });

    return (
        <>
            <Box sx={{ width: '100%', minHeight: '600px', backgroundColor: '#19191b', paddingBottom: '50px'}}>
                <BackButton />
                <Box sx={{ width: '80%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Item {...props} /> 
                    <Link href={url} underline="hover" target="_blank" rel="noopener">LINK: {props.url}</Link> 
                    {isPreloader ? (<Preloader />) : (
                    <Comments descendants={descendants} kids={kids} id={id} />)}
                </Box>
            </Box>
        </>
    );
};