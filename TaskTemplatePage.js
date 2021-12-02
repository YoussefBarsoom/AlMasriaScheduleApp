import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { Animated,FlatList,ScrollView, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Easing } from 'react-native-reanimated';

const TaskTemplatePage=({route,navigation})=>
{
//Data is already sorted by DATE
//
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const allTasks = route.params;
let val =0;
var toogle=true;

 const dummyData=[{type:'',startTime:'11:00',endTime:'12:00',subTitle:'MCO to EGY'}]
 // const [items,setItems]=useState([]);
  const [currentDay,setCurrentDay]=useState('');
  const [day,setDay]=useState('');
  const [listHeight,setHeight]=useState('30%');
var calenderHeight= new Animated.Value(0);
  const [currentMonth,setCurrentMonth]=useState('');
  const monthNames= ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];

  const loadItems=(day)=> {
      
    }
   const timeToString=(time)=> {
      const date = new Date(time);
      return date.toISOString().split('T')[0];
    }
    const updateDay =(day)=>{

            setDay(day);
        
    }
  const renderItem=(taskItem)=>{
    return(
      <View style={{ width:'100%',alignItems:'flex-start',height:100}}>
          <View style={{margin:10,flexDirection:'row',flex:2,alignItems:'center', justifyContent:'flex-start',width:'100%'}}>
            <View style={{width:'25%', height:'100%', justifyContent:'center' }}>
            <Icon size={50} name='airplane-outline' type='ionicon' color='#545454'/>
            </View>
          <View style={{flexDirection:'column', height:'100%',padding:10}}>
          <Text style= {{fontWeight:'bold',fontSize:20}}>{taskItem.subTitle}</Text>
          <Text style= {{}}>{taskItem.startTime} to {taskItem.endTime}</Text>

          </View>
          </View>
      </View>
    )
  } 
  const renderHeader=(title)=>{
    console.log(title)
    return(
      <View style={{ width:'100%',paddingHorizontal:10 ,paddingVertical:5}}>
          
          <Text style= {{fontWeight:'bold',fontSize:20}}>{title}</Text>

      </View>
    )
  }

  const renderList =(taskList)=>{
    let i=0;
    var output=[];
    for (const date in taskList) {
      console.log(date)
      output[i]=renderHeader(date+'');
      i++
      for(const item in taskList[date])
      { 
        console.log(taskList[date][item])
        output[i]=renderItem(taskList[date][item]);
        i++;
      }
    }
    return(<View>{output}</View>)
    
  }
  return (

    <ScrollView style={{flex:1 , padding:8,backgroundColor:'white'}}>
  {renderList(allTasks)}

    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TaskTemplatePage;
