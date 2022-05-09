import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

import { styles } from './styles';

import { COLORS } from '../../shared/constants';

type LoadingModalProps = {
  visible: boolean;
};

const LoadingModal = ({ visible }: LoadingModalProps) => (
  <Modal visible={visible} transparent animationType="fade">
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <ActivityIndicator color={COLORS.ORANGE} size="large" />
      </View>
    </View>
  </Modal>
);

export default LoadingModal;
