export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  description: string;
  tech: string;
}

export interface Architect {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface GridSlot {
  id: number;
  status: 'available' | 'locked' | 'active';
  date: string;
}