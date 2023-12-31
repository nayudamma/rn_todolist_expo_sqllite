import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Colors from '../utils/Colors';
const Header = props =>{
    return(
        <View style={styles.header}> 
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  header:{
      width:'100%',
      height:70,
      paddingTop:20,
      backgroundColor:Colors.primary,
      alignItems:'center',
      justifyContent:'center'
  },
  headerTitle:{
    color:'black',
    fontSize:18,
    alignItems:'center',
    justifyContent:'center'
  },
});

export default Header;