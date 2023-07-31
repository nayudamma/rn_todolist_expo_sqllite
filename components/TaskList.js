import React from 'react';
import { StyleSheet,
    Text, View,TouchableOpacity } from 'react-native';
import Task from './Task';
import {
    MaterialCommunityIcons
  } from '@expo/vector-icons';

const TaskList = props => {
     const tasks = props.taskList;
     taskPressed = props.taskPressed;
     return tasks.map((task, index) => {
        //console.log("show tasks--index-----"+index);
       
           return (
            <TouchableOpacity key={index} onPress={()=>taskPressed(task)}>

              <Task text={task.task_name} status={task.status} /> 
            </TouchableOpacity>
          )
           });
     
    }
const styles = StyleSheet.create({
        container: {
          flex: 1,
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
        input:{
          borderWidth:1,
          borderColor:"blue",
          alignSelf:"stretch",
          margin:32,
          height:64,
          borderRadius:6,
          paddingHorizontal:16,
          fontSize:24,
          fontWeight:"300",
         
         },
         button:{
          backgroundColor:"blue",
          alignItems:"center",
          justifyContent:"center",
          alignSelf:"stretch",
          paddingVertical:12,
          paddingHorizontal:32,
          marginBottom:32,
            
          borderRadius:6,
         },
         space: {
          width: 20, 
          height: 20,
        },
      });
      
export default TaskList;