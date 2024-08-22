export interface User {
  id: number;
  username: string;
  passwordHash: string;
  roles: string[];
}

export interface Role {
  name: string;
  permissions: string[];
}