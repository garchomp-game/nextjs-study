// src/atoms/postsAtom.ts
import { atom } from 'recoil';

export type Post = {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
};

export const postsState = atom<Post[]>({
  key: 'postsState',
  default: [],
});
