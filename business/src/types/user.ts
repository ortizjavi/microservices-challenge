export interface User {
  id: string;
  email: string;
  password?: string;
  deleted: boolean;
  created_at?: string;
  updated_at?: string;
}
