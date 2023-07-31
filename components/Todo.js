import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  MaterialCommunityIcons
} from '@expo/vector-icons';
import { typography, colors } from '../utils/styles';

export const TodoStatus = {
  open: 'open',
  inProgress: 'inProgress',
  completed: 'completed',
};

/* const localStyles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLeft: {
    marginRight: '5px',
    marginTop: '2px'
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderBottom: `1px solid ${colors.lightGrey}`,
    elevation: 5,
    position: 'relative',
  }
}); */
const localStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
               
    },
});


const Todo = ({ index, title, description, status, updateList }) => {
  let checkIcon = <MaterialCommunityIcons
    name="checkbox-blank-outline"
    size={24}
    color={colors.lightGrey}
   // style={localStyles.iconLeft}
  />;

  if (status === TodoStatus.inProgress) {
    checkIcon = <MaterialCommunityIcons 
      name="checkbox-intermediate"
      size={24}
      color={colors.skyBlue}
    //   style={localStyles.iconLeft}
    />;
  } else if (status === TodoStatus.completed) {
    checkIcon = <MaterialCommunityIcons
      name="checkbox-marked"
      size={24}
      color={colors.green}
      //style={localStyles.iconLeft}
      title="complete"
    />
  }

  return (
    <View style={localStyles.container}>
      {checkIcon}    
      <TouchableOpacity
      // style={localStyles.todo}
        
        onPress={() => {
        
          let updatedStatus;
          if (status === TodoStatus.open) {
            updatedStatus = TodoStatus.inProgress;
          } else if (status === TodoStatus.inProgress) {
            updatedStatus = TodoStatus.completed;
          } else if (status === TodoStatus.completed) {
            updatedStatus = TodoStatus.open;
          }
          updateList && updateList((list) => {
            list[index].status = updatedStatus;
            return [...list];
          })
        }}>
        
          <Text style={typography.h4}>
            {title.charAt(0).toUpperCase()}
            {title.slice(1)}
          </Text>
      
      </TouchableOpacity>
    </View >
  );
};

Todo.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  status: PropTypes.oneOf(Object.values(TodoStatus)),
 // updateSelf: PropTypes.func.isRequired,
};

export default Todo;