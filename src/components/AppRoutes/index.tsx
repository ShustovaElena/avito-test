import { Routes, Route } from 'react-router-dom';
import { ItemPage } from '../../pages/ItemPage';
import { MainPage } from '../../pages/MainPage';
import { useAppSelector } from '../../store/hooks';


const AppRoutes = () => {
    const item = useAppSelector(state => state.items.item);

    return (
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news-page" element={<ItemPage {...item} />} />
        </Routes>
    );
};

export default AppRoutes;
