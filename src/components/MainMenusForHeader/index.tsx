import React from 'react';
import { ADMIN_MENU_ITEMS } from '@/constants/menu';
import RecursiveMenu from '../RecursiveMenu';

const MainMenusForHeader: React.FC = () => {
    return (
        <nav className="w-full">
            <RecursiveMenu items={ADMIN_MENU_ITEMS} />
        </nav>
    );
};

export default MainMenusForHeader;