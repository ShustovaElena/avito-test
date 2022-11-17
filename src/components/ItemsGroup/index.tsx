import { Box } from "@mui/material";
import { Item } from "../Item";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from "react";
import { getItems } from "../../utils/api/items";
import { IItem } from "../../types";

export const ItemsGroup = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.items.items);

    useEffect(() => {
        dispatch(getItems());
    }, []);

    (function() {
        const intervalCall = setInterval(() => {
            dispatch(getItems());
        }, 60000);
        return () => {
            clearInterval(intervalCall);
        };
    }());

    return (
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '15px', width: '80%', margin: '0 auto' }}>
                {items.map((item: IItem, index) => {
                    return <Item {...item} key={index} />
                })}
            </Box>
    );
};