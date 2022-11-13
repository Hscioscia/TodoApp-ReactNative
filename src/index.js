import { useState } from 'react';
import {View, Text} from 'react-native';
import { styles } from './styles';
import { AddItem, TaskItem } from './components/index';
import ModalItem from './components/modal';
import Flist from './components/list';


export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleTask = () => {
    setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}]);
    setTask('');
  }

  const onHandleSelected = (item) => {
    setSelectedTask(item);
    setModalVisible(!modalVisible);
  }

  const renderItem = ({item}) => (
    <TaskItem item={item} onHandleSelected={onHandleSelected} />
  )

  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  }

  const onHandleDeleteItem = () => {
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
    setModalVisible(!modalVisible);
  }

  const onHandleChange = (text) => setTask(text);

  return (
    <View style={styles.container}>
      <AddItem  task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
      <View style={styles.listContainer}>
      <Text style={styles.listTitle}>Todo List</Text>
      </View>
      <ModalItem onHandleCancel={onHandleCancel} onHandleDeleteItem={onHandleDeleteItem} modalVisible={modalVisible} />
      < Flist renderItem={renderItem} taskList={taskList} />
     </View>
  );
}

