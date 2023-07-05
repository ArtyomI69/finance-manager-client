export interface IIncomes {
  id?: number;
  amount: number | null;
  createdAt: number;
  description: string;
  category: { id?: number; name?: string };
}
