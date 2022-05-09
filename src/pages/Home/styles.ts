import { StyleSheet } from 'react-native';

import { COLORS } from '../../shared/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },

  listContentContainer: {
    paddingHorizontal: 40,
    paddingBottom: 88,
  },

  headerContainer: {
    marginTop: 40,
    paddingHorizontal: 10,
  },

  headerText: {
    color: COLORS.DARK,
    fontSize: 18,
    fontWeight: 'bold',
  },

  subtitleText: {
    marginTop: 5,
    color: COLORS.SILVER,
  },

  addButton: {
    opacity: 1,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
