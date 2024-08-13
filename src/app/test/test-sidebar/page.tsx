import React from 'react'
import { ADMIN_MENU_ITEMS } from '@/constants/menu';
import RecursiveMenuForSideMenu from '@/components/Common/RecursiveMenuForSideMenu';


type Props = {}

const TestSideBar = (props: Props) => {
    return (
        <div>
            <RecursiveMenuForSideMenu items={ADMIN_MENU_ITEMS} />
        </div>
    )
}

export default TestSideBar