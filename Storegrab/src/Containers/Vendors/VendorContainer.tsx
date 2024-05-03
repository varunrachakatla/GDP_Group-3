import React, { useContext, useEffect, useState } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

import { useAppTheme } from '../../styles/theme/theme';
import AppPageWrapper from '../../shared/AppPageWrapper';
import LocationContainer from '../../Components/Location/LocationContainer';

const VendorContainer: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const { colors } = useAppTheme();
  return (
    <AppPageWrapper>
<Modal
  animationType="slide"
  transparent={true}
  visible={isModalVisible}
  onRequestClose={() => {
    setIsModalVisible(false)
  }}>
  <View
    style={{
      height: '50%',
      marginTop: 'auto',
      backgroundColor:'blue'
    }}>
      <LocationContainer />
  </View>
</Modal>
    </AppPageWrapper>
  );
};

export default VendorContainer;
