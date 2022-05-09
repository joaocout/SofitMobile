export type Expense = {
  _id: string;
  date: string;
  item: string;
  value: number;
  additionalInfo: { paid?: boolean };
};
