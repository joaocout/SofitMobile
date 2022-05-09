import { StyleSheet } from 'react-native';

import { COLORS } from '../../shared/constants';

export const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.SILVER,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  textContainer: {
    flexShrink: 1,
    marginRight: 20,
  },

  greyText: {
    color: COLORS.SILVER,
  },

  darkText: {
    color: COLORS.DARK,
  },

  valueText: {
    color: COLORS.ORANGE,
    fontSize: 18,
    fontWeight: 'bold',
  },

  bold: {
    fontWeight: 'bold',
  },

  iconContainer: {
    justifyContent: 'space-between',
  },
});
