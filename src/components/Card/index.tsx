import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './styles';

import { COLORS } from '../../shared/constants';
import { formatDate } from '../../utils';
import { removeExpense } from '../../api';
import { ExpensesContext } from '../../contexts/ExpensesContext';

import type { Expense } from '../../shared/types';

type CardProps = {
  expense: Expense;
  onEdit: (expense: Expense) => void;
  startLoading: () => void;
  stopLoading: () => void;
};

const Card = ({ expense, startLoading, stopLoading, onEdit }: CardProps) => {
  const { setExpenses } = useContext(ExpensesContext);

  const remove = async () => {
    startLoading();
    const { error } = await removeExpense(expense._id);
    if (!error) {
      setExpenses((prev) => prev.filter((item) => item._id !== expense._id));
    }
    stopLoading();
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.darkText, styles.bold]}>{expense.item}</Text>
        <Text style={styles.greyText}>{formatDate(expense.date)}</Text>
        {expense.additionalInfo.paid ? (
          <Text style={styles.greyText}>Paga</Text>
        ) : (
          <Text style={styles.greyText}>Em aberto</Text>
        )}
        <Text style={styles.valueText}>R$ {expense.value.toFixed(2)}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            remove();
          }}>
          <Icon name="delete" size={24} color={COLORS.DARK} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onEdit(expense);
          }}>
          <Icon name="edit" size={24} color={COLORS.DARK} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
