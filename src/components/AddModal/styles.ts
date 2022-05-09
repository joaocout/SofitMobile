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
    backgroundColor: COLORS.WHITE,
  },

  text: {
    color: COLORS.SILVER,
    marginBottom: 5,
  },

  input: {
    borderColor: COLORS.ORANGE,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.ORANGE,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: COLORS.WHITE,
  },
});
