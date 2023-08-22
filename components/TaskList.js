import React from 'react';
import {
  StyleSheet,
  Text, View, TouchableOpacity
} from 'react-native';
import Task from './Task';
import { Ionicons } from '@expo/vector-icons';
import {
  MaterialCommunityIcons
} from '@expo/vector-icons';
const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,

  },
});



const TaskList = props => {
  const tasks = props.taskList;
  taskPressed = props.taskPressed;
  deleteItemPressed = props.deleteItemPressed;
  return tasks.map((task, index) => {
    //console.log("show tasks--index-----"+index);
    console.log("show tasks--index-----"+index);
    console.log("task status-----"+task.status);
    return (
      <View key={index} style={localStyles.container}>
        <TouchableOpacity onPress={() => taskPressed(task)}>

          <Task text={task.task_name} status={task.status} taskId={task.id} deletePressed={deleteItemPressed} />


        </TouchableOpacity>
        {/* <Ionicons
            name={'remove-circle'}
            size={25}
            //color={'white'}
            //style={{ marginRight: 15 }}
            //onPress={() => navigation.navigate('Home')}
          /> */}
      </View>

    )
  });

}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    margin: 30

  },
  input: {
    borderWidth: 1,
    borderColor: "blue",
    alignSelf: "stretch",
    margin: 32,
    height: 64,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 24,
    fontWeight: "300",

  },
  button: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 32,

    borderRadius: 6,
  },
  space: {
    width: 20,
    height: 20,
  },
});

export default TaskList;