import React, { createContext, useState } from 'react';

import type { Expense } from '../shared/types';

type ExpenseContextParams = {
  expenses: Array<Expense>;
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
};

const initialExpenses: Array<Expense> = [];

const ExpensesStore: React.FC = ({ children }) => {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const ExpensesContext = createContext<ExpenseContextParams>(
  {} as ExpenseContextParams,
);

export default ExpensesStore;
