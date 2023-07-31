import React, { useState, useMemo } from "react";
import { StyleSheet, Text, TextInput, Button, View, Image, TouchableOpacity,SafeAreaView } from 'react-native';
import Colors from '../utils/Colors';
import DatePicker from '@react-native-community/datetimepicker';
import RadioGroup from 'react-native-radio-buttons-group';
import DropDownPicker from 'react-native-dropdown-picker';

export default function TaskDetails({ route, navigation }) {
  const { selectedTask } = route.params;
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const radioButtons = useMemo(() => ([
    {
      id: 0, // acts as primary key, should be unique and non-empty string
      label: 'Created',
      value: 0
    },
    {
      id: 1,
      label: 'Pogress',
      value: 1
    },
    {
      id: 2,
      label: 'Comp',
      value: 2
    }
  ]), []);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '15', value: 15 },
    { label: '30', value: 30 },
    { label: '45', value: 45 },
    { label: '60', value: 60 },
    { label: '75', value: 75 }
  ]);

  const [selectedId, setSelectedId] = useState(selectedTask.status);

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.taskInfo}>

        <View style={styles.staticRowContainer}>
          <Text style={styles.text}>Task:</Text>
          <Text style={styles.text}>{selectedTask.task_name}</Text>
        </View>
        <View style={styles.staticRowContainer}>
          <Text style={styles.text}>CreatedDate:</Text>
          <Text style={styles.text}>{selectedTask.created_date}</Text>
        </View>
      </View>
      
      <View style={styles.taskDetails}>
        <View style={styles.dateRowContainer}>
          <Text style={styles.text}>StartDate</Text>

          <TouchableOpacity style={styles.button} onPress={showDatepicker}>
            <Text>{date.toLocaleString()}</Text>
          </TouchableOpacity>

          {/* <Text>selected: {date.toLocaleString()}</Text> */}
          {show && (
            <DatePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}

            />
          )}
        </View>

        <View>
          <Text>Status:</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout='row'
            lable='Status'
          //  containerStyle={{width: 150}}

          />
        </View>
        <View style={{ zIndex: 100 }}>
          <Text>TimeSpend:</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
        
        <View styles={styles.discrptionInput}>
          <Text>Discription:</Text>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={{ height:200, textAlignVertical: 'top',}}/>
        </View>
       
       
      </View>
      </SafeAreaView>
   




  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'aliceblue',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 20
  },
  staticRowContainer: {
    flexDirection: "row",

    // marginVertical:10,
    alignItems: 'center',
    justifyContent: 'center'

  },
  dateRowContainer: {
    flexDirection: "row",

    // marginVertical:10,
    alignItems: 'center',
    justifyContent: 'center'

  },
  text: {
    textAlign: 'center',
    width: 150,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
  lable: {
    flex: 1,
    textAlign: 'left',
    width: 100,
    height: 44,
    // padding: 10,
    marginTop: 20,
    // marginBottom: 10,
    //backgroundColor: '#e8e8e8' 
  },
  discrptionInput: {
    marginTop:5,
    flex: 3,
    // lineHeight: 23,
    //flex: 2,
    textAlignVertical: 'top',
    //borderRadius:26
    borderColor: "blue",
    width: "60%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height:200
  },
  button: {
    //backgroundColor:"blue",
    alignItems: "center",
    // justifyContent:"center",
    //alignSelf:"stretch",
    // paddingVertical:12,
    // paddingHorizontal:32,
    // marginTop:32,
    // marginHorizontal:32,

    //borderRadius:6,

    width: 150,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
  textInput: {

    borderColor: 'black',
    backgroundColor: 'red',
    borderColor: "gray",   
    borderWidth: 1,
    borderRadius: 10,
  },
  taskInfo: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center'

  },
  taskDetails: {
    flex: 3,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },

});