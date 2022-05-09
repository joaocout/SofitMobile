import axios from 'axios';

import type { Expense } from '../shared/types';

import { API_TOKEN } from 'react-native-dotenv';

const token = API_TOKEN;

axios.defaults.baseURL =
  'https://sofit-mobile-challenge.herokuapp.com/expenses';
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export async function getExpenses(
  page: number,
): Promise<{ expenses: Array<Expense>; error: boolean }> {
  try {
    const response = await axios.get('', { params: { page, perPage: 15 } });
    return { expenses: response.data, error: false };
  } catch (error) {
    return { expenses: [], error: true };
  }
}

export async function removeExpense(id: string) {
  try {
    await axios.delete(id);
    return { error: false };
  } catch (error) {
    return { error: true };
  }
}

export async function addExpense({
  name,
  value,
}: {
  name: string;
  value: string;
}): Promise<{ id: string; error: boolean; date: Date }> {
  const date = new Date();
  try {
    const response = await axios.post('', {
      date: date,
      item: name,
      value: value,
      additionalInfo: {},
    });
    return { id: response.data, error: false, date: date };
  } catch (error) {
    return { id: '', error: true, date: date };
  }
}

export async function editExpense(
  id: string,
  {
    name,
    value,
  }: {
    name: string;
    value: string;
  },
): Promise<{ error: boolean; date: Date }> {
  const date = new Date();
  try {
    await axios.put(id, {
      date: date,
      item: name,
      value: value,
      additionalInfo: {},
    });
    return { date, error: false };
  } catch (error) {
    return { date, error: true };
  }
}
