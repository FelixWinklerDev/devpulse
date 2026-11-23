export type Priority = 'low' | 'medium' | 'high';
export type CardStatus = 'open' | 'invites' | 'cancellation' | 'ghosting';

export interface ApplicationCard {
  id: string;
  company: string;
  city: string;
  role: string;
  status: CardStatus;
  priority: Priority;
  appliedAt: Date;
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