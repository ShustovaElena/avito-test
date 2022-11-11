import { Header } from '../../components/Header';
import { ItemsGroup } from '../../components/ItemsGroup';
import { UpdateButton } from '../../components/UpdateButton';

export const MainPage = () => {
    return (
        <>
            <Header />
            <UpdateButton />
            <ItemsGroup />
        </>
    );
}