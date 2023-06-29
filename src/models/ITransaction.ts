export interface ITransaction {
  id: number;
  category: { id: number; name: string };
  description: string | null;
  amount: number;
  createdAt: number;
}
