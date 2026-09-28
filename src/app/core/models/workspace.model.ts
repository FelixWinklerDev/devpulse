export type Priority = 'low' | 'medium' | 'high';
export type CardStatus = 'todo' | 'in-progress' | 'done';

export interface TaskCard {
  id: string;
  title: string;
  description?: string;
  status: CardStatus;
  priority: Priority;
  tags: string[];
  createdAt: Date;
}

export interface Column {
  id: CardStatus;
  title: string;
}

export interface NoteDocument {
  id: string;
  title: string;
  content: string;
  tags: string[];
  updatedAt: Date;
}