// types.ts
export interface IExamInfo {
    id: number;
    title: string;
    subject: string;
    date: string;
    questionCount: number;
}

// types.ts
export interface IFileItem {
    id: number;
    name: string;
    type: 'folder' | 'item'; // 'file'과 'exam' 타입은 필요하지 않으므로 제거
    children?: IFileItem[];
    url?: string; // URL 속성 추가
}

export interface FileExplorerProps {
    onSelectItem: (item: IFileItem, path: string[]) => void;
    data: IFileItem[];
}
