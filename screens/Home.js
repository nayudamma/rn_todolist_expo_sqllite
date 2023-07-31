import React,{useState,useEffect} from "react";
import { StyleSheet,StatusBar, View,Text,TouchableOpacity } from 'react-native';
import Header from '../components/Header'

export default function Home({ navigation }) { 
  gotoToTaskList=(subject)=> {
   // alert(subject);
    navigation.navigate('TaskList',{subject:subject})

  };
  return(
    <View style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
      <Header title="Sylabus Tracker" />
      <Text style={styles.lable}>Select Subject</Text>
      <TouchableOpacity style={styles.button} onPress={()=>gotoToTaskList('Math')}>
        <Text style={{color:"white"}}>Maths</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>gotoToTaskList('Scince')}>
        <Text style={{color:"white"}}>Science</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>gotoToTaskList('Scocial')}>
        <Text style={{color:"white"}}>Scocial</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>gotoToTaskList('English')}>
        <Text style={{color:"white"}}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>gotoToTaskList('French')}>
        <Text style={{color:"white"}}>French</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>gotoToTaskList('AI')}>
        <Text style={{color:"white"}}>AI</Text>
      </TouchableOpacity>
             
    </View>   
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     
    },
    lable:{
      fontSize: 18,
      textAlign:'center',
      
      color: "black",
      fontWeight: "bold",
  
    },
    textView: {
      backgroundColor: "#ff0066",
      height: 80,
      
    },
    text: {
        textAlign:'left',
        marginTop: "10%",
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
      },
      button:{
        backgroundColor:"blue",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"stretch",
        paddingVertical:12,
        paddingHorizontal:32,
        marginTop:32,
        marginHorizontal:32,
       
        borderRadius:6,
       },
});