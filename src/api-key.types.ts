export interface ApiKey {
  id: number;
  key: string;
  userId: number;
  createdAt: Date;
  isActive: boolean;
}