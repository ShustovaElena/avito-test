import { Box, Link } from "@mui/material";
import { BackButton } from "../../components/BackButton";
import Comments from "../../components/Comments";
import { Item } from "../../components/Item";

export const ItemPage = () => {
    return (
        <Box sx={{ width: '100%', height: '600px', backgroundColor: '#19191b'}}>
            <BackButton />
            <Box sx={{ width: '80%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <Item name='Президент Сербии Вучич признал, что ошибся в прогнозах по обороне Херсона Россией' rating={5.5} author='John Lennon' date={'12.11.22'} /> 
                {/* TODO Поменять href на ссылку */}
                <Link href="#" underline="hover">LINK: {'ТУТ БУДЕТ ССЫЛКА'}</Link> 
                <Comments /> 
            </Box>
        </Box>
    );
};