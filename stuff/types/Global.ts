export interface Project {
  id: string;
  title: string;
  category: string;
  color: string;
  icon: any;
}

export interface Task {
  id: string;
  title: string;
  time: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}