import React,{useState,useEffect} from "react";
import { StyleSheet, Text,TextInput,Button, View,Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

import { TaskStatus } from '../components/Task';
import { colors } from '../utils/styles';
import List from '../components/List'; 
import TaskList from '../components/TaskList'
import dataservie from "../sqllitedata/dataservice";
import * as SQLite from 'expo-sqlite';
import {Keyboard} from 'react-native';
const service = dataservie();

const localStyles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: 10,
             
  },
});

const initialList = [
  {
    title: 'This is a todo title',
    description: 'Detailed notes for the Todo',
    status: TaskStatus.open
  },
  {
    title: 'This is another todo',
    description: 'Additional details of the TOdo',
    status: TaskStatus.inProgress
  },
  {
    title: 'This is the third todo',
    description: 'Third todo description',
    status: TaskStatus.completed
  }
];
const db = SQLite.openDatabase('SylabusTrackerexpo.db');

export default function SubjectWiseTodoList({route, navigation }) {
  const [ list, updateList ] = useState(initialList);
  const [ newEntry, updateEntry ] = useState('');
  const [taskName, setTaskName] = useState(null);
  const [tasks,setTasks] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const{subject} = route.params;

  /* useEffect(()=>{
    console.log("in use efeect before fetch records");
    setNames(service.fetchTaskList());
    setIsLoading(false) ; 
  
  },[]);
  if(isLoading){
    console.log("in is loading");
    return (
      <View style={styles.container}>
        <Text>Loading data.....</Text>
      </View>
  )
  } */

  useEffect(()=>{
    
     console.log("in use effect");
     
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Sylabus_Tasklist where subject=?',[subject],
        (txObj, resultSet) => setTasks(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    });
   // console.log("names length"+names.length());
    setIsLoading(false);

  },[]);

  if(isLoading){
    return (
      <View style={styles.container}>
        <Text>Loading data.....</Text>
      </View>
  )
  }
  
  console.log("tasks length:"+tasks.length);
  const showTasks = ()=>{
    //console.log("show tasks-------");
    return tasks.map((task, index) => {
     // console.log("show tasks--index-----"+index);
      return (
        <View key={index} style={styles.row}>
          <Text>{task.task_name}</Text>
         
        </View>
      );
    });
  }
 
  const addTaskToList = () => {
    console.log("in add task to list---------------------");
    db.transaction(tx => {
      tx.executeSql('INSERT INTO Sylabus_tasklist (task_name,status,subject,created_date) values (?,?,?,date(\'now\',\'localtime\'))', 
                        ['This is MATH task',0,'MATH'],
        (txObj, resultSet) => {
          console.log("record inserted");
        },
        (txObj, error) => console.log(error)
      );
    });
    return true;
  }  
  const handleAddTask = () =>{
    console.log("in handle task");
    
    if(taskName===null) return;
    db.transaction(tx => {
      tx.executeSql('INSERT INTO Sylabus_tasklist (task_name,status,subject,created_date) values (?,?,?,date(\'now\',\'localtime\'))', 
                        [taskName,0,subject],
        (txObj, resultSet) => {
          console.log("record inserted");
        },
        (txObj, error) => console.log(error)
      );
    });
    setTasks([...tasks, {

              task_name: taskName,
              description: '',
              status: TaskStatus.open ,
              subject:{subject}
            }])
    setTaskName(null);
  }
  const handleTaskPressed =(task)=>{
    //
    //alert('in handle task'+task.id);
    navigation.navigate('TaskDetails',{selectedTask:task})

  }

  /* const fetchTaskList = () =>{
    console.log("in fetch list-------------------------");
   let retrivedNames = [];
   db.transaction(tx => {
       tx.executeSql('SELECT * FROM Sylabus_Tasklist', null,
         (txObj, resultSet) =>  
           { 
              console.log("result set length---"+resultSet.rows.length);
               for (let i = 0; i < resultSet.rows.length; i++) {
                   console.log("in for loop");
                   console.log(resultSet.rows.item(i));
               retrivedNames.push(resultSet.rows.item(i));
               console.log("retrived names length"+retrivedNames.length);
               }
           },
         (txObj, error) => console.log(error)
       );
     }); 
 
    console.log("retrived names length------------------"+retrivedNames.length);

     return retrivedNames;


  }*/
  
  return(
    <View style={styles.container}>
      {/* <Button style={styles.button} onPress={addTaskToList} title="Add Name"  />
      <Button style={styles.button} onPress={fetchTaskList} title= "retrive Name"  /> */}
      <View style={localStyles.container}>
        <Text style={{color:"blue",fontSize:24}}>Subject:</Text>
        <Text style={{fontSize:24,textAlign:'center'}}>{subject}</Text>
      </View>
      <View style={localStyles.container}>
      <TextInput style={styles.input} placeholder={'Write a task'} value={taskName} onChangeText={text =>{setTaskName(text)}}  />
      <TouchableOpacity onPress={() =>{Keyboard.dismiss(); handleAddTask()}
    }>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        </View>
      {/* <TextInput
        
          placeholder='Add any task ..'
          autoCapitalize="none"
          onChangeText={(text)=>{
            updateEntry(text);
          }}
          onSubmitEditing={(event) => {
            updateList([...list, {
              title: event.nativeEvent.text,
              description: '',
              status: TodoStatus.open
            }])
            updateEntry('');
          }}
          value={newEntry}
        /> */}
      
      <Card>
       
        <TaskList taskList={tasks} taskPressed={handleTaskPressed} />  
     
           {/* {showTasks()}  */}
      
      </Card>
     
    </View>
   
  );
        }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   

    
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 280,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  
});