import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    MaterialCommunityIcons
  } from '@expo/vector-icons';
  import { typography, colors } from '../utils/styles';
export const TaskStatus = {
    open: 0,
    
    inProgress: 1,
    completed: 2,
  };
const Task = (props) => {
    let status=props.status;
    let checkIcon = <MaterialCommunityIcons
    name="checkbox-blank-outline"
    size={24}
    color={colors.lightGrey}
   // style={localStyles.iconLeft}
  />;

  if (status === TaskStatus.inProgress) {
    checkIcon = <MaterialCommunityIcons 
      name="checkbox-intermediate"
      size={24}
      color={colors.skyBlue}
    //   style={localStyles.iconLenpx ft}
    />;
  } else if (status === TaskStatus.completed) {
    checkIcon = <MaterialCommunityIcons
      name="checkbox-marked"
      size={24}
      color={colors.green}
      //style={localStyles.iconLeft}
      title="complete"
    />
  }
    
  return (
    <View style={styles.container}>
   
      {checkIcon}    
      
        <Text >{props.text}</Text>
    </View>
   
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
               
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        alignSelf:"stretch",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        
      },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  
});

export default Task;