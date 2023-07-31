import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Todo, { TodoStatus } from './Todo';

const List = ({ list, updateList }) => {
  let TodoView = (
    <Text>No Todos added.</Text>
  );

  if (list && list.length) {
    const ListView = list.map((todo, i) => {
      return (
        <Todo key={`todo-${i}`} index={i} {...todo} updateList={updateList} />
      )
      if (list && list.length) {
        const ListView = list.map((todo, i) => {
          return (
            <Todo key={`todo-${i}`} index={i} {...todo} updateList={updateList} />
          )
        });
    
        TodoView = (
          <View>
            {ListView}
          </View>
        )
      }
    
    });

    TodoView = (
      <View>
         {ListView} 
         
       
      </View>
    )
  }

  return TodoView;
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.oneOf(Object.values(TodoStatus)),
  })),
  updateList: PropTypes.func.isRequired,
};

export default List;