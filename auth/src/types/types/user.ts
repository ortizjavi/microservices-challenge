export interface User {
  id: string;
  email: string;
  password?: string;
  deleted: boolean;
  created_at?: Date;
  updated_at?: Date;
}
