import React from 'react';
import Link from 'next/link';
import { MenuItemType } from '@/constants/menu.type';

interface RecursiveMenuForSideMenuProps {
    items: MenuItemType[];
    level?: number;
    parentKey?: string;
}

const RecursiveMenuForSideMenu: React.FC<RecursiveMenuForSideMenuProps> = ({ items, level = 0, parentKey = '' }) => {
    return (
        <ul className="space-y-2">
            {items.map((item) => (
                <li key={item.key} style={{ paddingLeft: `${level * 16}px` }}>
                    {item.items ? (
                        <div>
                            <span className="font-semibold text-gray-700 hover:text-purple-600 cursor-pointer">
                                {item.name}
                            </span>
                            <RecursiveMenuForSideMenu
                                items={item.items}
                                level={level + 1}
                                parentKey={item.key}
                            />
                        </div>
                    ) : (
                        <Link
                            href={parentKey ? `/${parentKey}/${item.key}` : `/${item.key}`}
                            className="text-gray-600 hover:text-purple-600"
                        >
                            {item.name}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default RecursiveMenuForSideMenu;