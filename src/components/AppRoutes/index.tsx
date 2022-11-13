import { Routes, Route } from 'react-router-dom';
import { ItemPage } from '../../pages/ItemPage';
import { MainPage } from '../../pages/MainPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/news-page" element={<ItemPage />} />
    </Routes>
  );
};

export default AppRoutes;
