import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarPage from './calendarPage.js'
import TaskTemplatePage from './TaskTemplatePage.js';
const Stack = createNativeStackNavigator();
const allTask={'2021-11-18':[{type:'',startTime:'11:00',endTime:'12:00',subTitle:'MCO to EGY'},{type:'',startTime:'2:00',endTime:'5:00',subTitle:'Medical Checkup'},{type:'',startTime:'2:00',endTime:'5:00',subTitle:'Medical Checkup'}],
'2021-11-22':[{type:'',startTime:'12:00',endTime:'3:00',subTitle:'EGY to MCO'}]}
const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };
const CalendarStackNavigtor= ()=> {
 
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Calendar" component={CalendarPage} />

      </Stack.Navigator>

  );
}
const DashBoardStackNavigtor= ()=> {
 
    return (
  
      <Stack.Navigator>
          <Stack.Screen name="Calendar" component={CalendarPage} />
        </Stack.Navigator>
  
    );
  }
  const MedicalStackNavigtor= ()=> {
 
    return (
  
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen  name="Medical"  initialParams={allTask}  component={TaskTemplatePage} />
        </Stack.Navigator>
  
    );
  }
  const FlightsStackNavigtor= ()=> {
 
    return (
  
      <Stack.Navigator>
          <Stack.Screen name="Flights" component={CalendarPage} />
        </Stack.Navigator>
  
    );
  }

export {CalendarStackNavigtor,FlightsStackNavigtor,MedicalStackNavigtor,DashBoardStackNavigtor};