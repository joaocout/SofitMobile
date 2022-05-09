import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Home from './pages/Home';
import ExpensesStore from './contexts/ExpensesContext';

const App = () => (
  <NavigationContainer>
    <ExpensesStore>
      <Home />
    </ExpensesStore>
  </NavigationContainer>
);

export default App;
