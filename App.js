import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import CalendarPage from './calendarPage.js'
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerNavigator from "./DrawerNavigation";

export default function App() {
  const dummyData=[{type:'',startTime:'',endTime:'',subTitle:'',}]
  const [items,setItems]=useState([]);
  const [currentDay,setCurrentDay]=useState('');
  const [currentMonth,setCurrentMonth]=useState('');
  const monthNames= ["January","February","March","April","May","June","July",
  "August","September","October","November","December"];

 
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>

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
