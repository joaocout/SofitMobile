import { StyleSheet } from 'react-native';

import { COLORS } from '../../shared/constants';

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#00000080',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },
});
