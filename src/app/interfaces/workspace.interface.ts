import { WorkspaceEnum } from '../enums/workspace.enum';

export interface Week {
    title: string;
    imageUrl: string;
    tag: string;
}
export interface Workspace {
    title: string;
    imageUrl: string;
    tag: WorkspaceEnum;
}

