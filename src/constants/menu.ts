// src/constants/menu.ts
import { MenuItemType } from "./menu.type";

export const ADMIN_MENU_ITEMS: MenuItemType[] = [
    {
        key: 'test',
        name: '컴퍼넌트 테스트',
        items: [
            { key: 'test-sidebar', name: '사이드바' },
            { key: 'test-image-edit', name: '이미지 편집기' },
            { key: 'test-data-grid', name: '데이터 그리드' },
            { key: 'test-dash-board', name: '대쉬 보드' },
            { key: 'test-form', name: '폼 관리' },
        ],
    },
    {
        key: 'dummy1',
        name: '더미 데이터 1',
        items: [
            { key: 'dummy1-item1', name: '더미 항목 1-1' },
            { key: 'dummy1-item2', name: '더미 항목 1-2' },
            { key: 'dummy1-item3', name: '더미 항목 1-3' },
            { key: 'dummy1-item4', name: '더미 항목 1-4' },
            { key: 'dummy1-item5', name: '더미 항목 1-5' },
        ],
    },
    {
        key: 'dummy2',
        name: '더미 데이터 2',
        items: [
            { key: 'dummy2-item1', name: '더미 항목 2-1' },
            { key: 'dummy2-item2', name: '더미 항목 2-2' },
            { key: 'dummy2-item3', name: '더미 항목 2-3' },
            { key: 'dummy2-item4', name: '더미 항목 2-4' },
            { key: 'dummy2-item5', name: '더미 항목 2-5' },
        ],
    },
]
