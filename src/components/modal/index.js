import React from "react";
import { Modal, View, Text, Button } from 'react-native'
import { styles } from "../../styles";

const ModalItem = ({ modalVisible, onHandleCancel, onHandleDeleteItem, selectedTask }) =>{
    return(
    <Modal visible={modalVisible} animationType='slide'>
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Task Detail</Text>
      <View style={styles.modalDetailContainer}>
        <Text style={styles.modalDetailText}>Are you sure to delete this item?</Text>
        <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
      </View>
      <View style={styles.modalButtonContainer}>
        <Button 
          title='Cancel'
          color='#28587b'
          onPress={onHandleCancel}
        />
        <Button 
          title='Delete'
          color='#28587b'
          onPress={onHandleDeleteItem}
        />
      </View>
    </View>
  </Modal>
);
};

export default ModalItem;