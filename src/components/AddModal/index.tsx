import React, { useState, useContext } from 'react';
import { Modal, View, TextInput, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { addExpense } from '../../api';
import { ExpensesContext } from '../../contexts/ExpensesContext';

type AddModalProps = {
  visible: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  dismiss: () => void;
};

const AddModal = ({
  visible,
  startLoading,
  stopLoading,
  dismiss,
}: AddModalProps) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const { setExpenses } = useContext(ExpensesContext);

  const add = async () => {
    startLoading();
    const { id, error, date } = await addExpense({ name, value });

    if (!error) {
      setExpenses((prev) => [
        {
          _id: id,
          item: name,
          value: Number(value),
          additionalInfo: {},
          date: `${date}`,
        },
        ...prev,
      ]);
    }
    stopLoading();
    dismiss();
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>
            Como você gostaria de identificar sua nova despesa? (máximo de 15
            caracteres)
          </Text>
          <TextInput
            maxLength={15}
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <Text style={styles.text}>Qual é o valor de sua nova despesa?</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              value={value}
              onChangeText={setValue}
              style={[styles.input, { minWidth: 80, maxWidth: 160 }]}
              keyboardType="numeric"
            />
            <Text style={[styles.text, { marginLeft: 10 }]}>reais</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => add()}>
            <Text style={styles.buttonText}>Pronto</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddModal;
