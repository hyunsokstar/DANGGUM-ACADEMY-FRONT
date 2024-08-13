// // components/RecursiveMenu.tsx

// import { MenuItemType } from '@/constants/menu.type';
// import React from 'react';

// interface RecursiveMenuForSideMenuProps {
//     items: MenuItemType[];
//     level?: number; // 들여쓰기 수준을 위한 level 추가
//     backgroundColor?: string; // 배경색을 위한 속성 추가
// }

// const RecursiveMenuForSideMenu: React.FC<RecursiveMenuForSideMenuProps> = ({ items, level = 0, backgroundColor = '#ffffff' }) => {
//     return (
//         <ul style={{ paddingLeft: `${level * 20}px`, backgroundColor: backgroundColor }}> {/* 들여쓰기 및 배경색 적용 */}
//             {items.map((item) => (
//                 <li key={item.key}>
//                     {item.url ? (
//                         <a href={item.url} className={item.children ? 'font-bold' : ''}>{item.name}</a>
//                     ) : (
//                         <span className={item.children ? 'font-bold' : ''}>{item.name}</span>
//                     )}
//                     {item.children && item.children.length > 0 && (
//                         <RecursiveMenuForSideMenu items={item.children} level={level + 1} backgroundColor={backgroundColor} />
//                     )}
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default RecursiveMenuForSideMenu;

import React from 'react'

type Props = {}

const index = (props: Props) => {
    return (
        <div>index</div>
    )
}

export default index