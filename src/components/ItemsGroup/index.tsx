import { Box } from "@mui/material";
import { Item } from "../Item";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from "react";
import { getItemsId, getItems } from "../../utils/api/items";
import { IItem } from "../../types";

export const ItemsGroup = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.items.items);
    const itemsId = useAppSelector(state => state.items.itemsId);
    const status = useAppSelector(state => state.items.status);

    useEffect(() => {
        const fetchData = (async () => {
            await dispatch(getItemsId());
        });
        const fetchData1 = (async () => {
            await dispatch(getItems(itemsId));
        });
        if (status === 'pending') {
            fetchData();
        }

        if (status === 'fulfilled') {
            fetchData1();
        }
    }, [status]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '15px', width: '80%', margin: '0 auto' }}>
            {items.map((item: IItem, index) => {
                return <Item {...item} key={index} />
            })}
        </Box>
    );
};