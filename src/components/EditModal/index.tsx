import React, { useState, useContext } from 'react';
import { Modal, View, TextInput, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { editExpense } from '../../api';
import { ExpensesContext } from '../../contexts/ExpensesContext';

import type { Expense } from '../../shared/types';

type EditModalProps = {
  visible: boolean;
  expense: Expense;
  startLoading: () => void;
  stopLoading: () => void;
  dismiss: () => void;
};

const EditModal = ({
  expense,
  visible,
  startLoading,
  stopLoading,
  dismiss,
}: EditModalProps) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const { setExpenses } = useContext(ExpensesContext);

  const edit = async () => {
    startLoading();

    const { error, date } = await editExpense(expense._id, {
      name: name.length ? name : expense.item,
      value: value.length ? value : expense.value.toString(),
    });

    if (!error) {
      setExpenses((prev) => {
        return prev.map((elem) => {
          if (elem._id === expense._id) {
            return {
              ...elem,
              item: name.length ? name : expense.item,
              value: value.length ? Number(value) : expense.value,
              date: `${date}`,
            };
          }
          return elem;
        });
      });
    }

    setValue('');
    setName('');

    stopLoading();
    dismiss();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Qual é o novo identificador dessa despesa? Caso deixado em branco, o
            nome anterior será mantido. (máximo de 15 caracteres)
          </Text>
          <TextInput
            placeholder={expense.item}
            maxLength={15}
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <Text style={styles.text}>
            Qual é o novo valor dessa despesa? Caso deixado em branco, o valor
            anterior será mantido.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder={`${expense.value}`}
              value={value}
              onChangeText={setValue}
              style={[styles.input, { minWidth: 80, maxWidth: 160 }]}
              keyboardType="numeric"
            />
            <Text style={[styles.text, { marginLeft: 10 }]}>reais</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => edit()}>
            <Text style={styles.buttonText}>Pronto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
