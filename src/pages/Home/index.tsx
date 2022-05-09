import React, { useEffect, useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './styles';

import { COLORS } from '../../shared/constants';
import Card from '../../components/Card';
import { ExpensesContext } from '../../contexts/ExpensesContext';
import { getExpenses } from '../../api';
import LoadingModal from '../../components/LoadingModal';
import AddModal from '../../components/AddModal';
import EditModal from '../../components/EditModal';

import type { Expense } from '../../shared/types';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState({} as Expense);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const { expenses, setExpenses } = useContext(ExpensesContext);

  useEffect(() => {
    const fetch = async () => {
      const { expenses: expensesResponse } = await getExpenses(1);
      setExpenses(expensesResponse);
      setLoading(false);
    };
    fetch();
  }, [setExpenses]);

  const header = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Olá!{'\n'}Aqui você tem acesso a suas últimas despesas.
      </Text>
      <Text style={styles.subtitleText}>
        Tocando nos ícones à direita, é possível remover ou editar suas
        dispesas.
      </Text>
      <Text style={styles.subtitleText}>
        Utilizando o ícone no canto inferior direito, é possível adicionar novas
        dispesas.
      </Text>
    </View>
  );

  const renderItem: ListRenderItem<Expense> = ({ item }) => (
    <Card
      onEdit={(expense: Expense) => {
        setSelected(expense);
        setEditModalVisible(true);
      }}
      expense={item}
      startLoading={() => setLoading(true)}
      stopLoading={() => setLoading(false)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList<Expense>
        data={expenses}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainer}
        ListHeaderComponent={header}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setAddModalVisible(true)}>
        <Icon name="add-circle" color={COLORS.ORANGE} size={48} />
      </TouchableOpacity>

      <LoadingModal visible={loading} />

      <AddModal
        visible={addModalVisible}
        startLoading={() => setLoading(true)}
        stopLoading={() => setLoading(false)}
        dismiss={() => setAddModalVisible(false)}
      />

      <EditModal
        visible={editModalVisible}
        expense={selected}
        startLoading={() => setLoading(true)}
        stopLoading={() => setLoading(false)}
        dismiss={() => setEditModalVisible(false)}
      />
    </View>
  );
};

export default Home;
