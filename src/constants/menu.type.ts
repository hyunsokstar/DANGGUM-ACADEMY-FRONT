// src\constants\menu.type.ts
// src/constants/menu.type.ts

export interface MenuItemType {
    key: string;
    name: string;
    items?: MenuItemType[]; // 2차 메뉴를 위한 재귀적 구조
    hide?: boolean; // 메뉴 숨김 옵션 (선택 사항)
}
