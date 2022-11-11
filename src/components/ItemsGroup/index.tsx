import { Box } from "@mui/material";
import { Item } from "../Item";

export const ItemsGroup = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '15px', width: '80%', margin: '0 auto' }}>
            <Item name='Президент Сербии Вучич признал, что ошибся в прогнозах по обороне Херсона Россией' rating={5.5} author='John Lennon' date={'12.11.22'} />
            <Item name='Полковник Макгрегор: США и Украина создали иллюзию готовности к переговорам с Россией' rating={5.5} author='John Lennon' date={'12.11.22'} />
        </Box>
    );
};