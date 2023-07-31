import React,{useState,useEffect} from "react";
import { StyleSheet,View,Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import SubjectWiseTodoList from './screens/SubjectWiseTodoList';
import TaskDetails from './screens/TaskDetails'

import dataservice from './sqllitedata/dataservice'

export default function App() {

  const [isLoading,setIsLoading] = useState(true);
  const Stack = createNativeStackNavigator();
  //const [names,setNames] = useState([]);
  const service = dataservice();
  useEffect(()=>{
    //console.log("in use efeect before initialization");
    if(service.initializeDatabase()  ){
      //console.log("in use efeect after initialization------");
      //setNames(service.fetchTaskList());
      //console.log("in use efeect after setnames----------");      
      
     // console.log("names length:"+names.length);
      setIsLoading(false);

    }

  },[]);
 
  if(isLoading){
    return (
      <View style={styles.container}>
        <Text>Loading data.....</Text>
      </View>
  )
  }
  return(
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TaskList" component={SubjectWiseTodoList} />
        <Stack.Screen name="TaskDetails" component={TaskDetails} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
 
 
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  textView: {
    backgroundColor: "#ff0066",
    height: 80,
  },
  text: {
    textAlign: "center",
    marginTop: "10%",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  inputBox: {
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 20,
    height: 40,
  },
});