import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {CalendarStackNavigtor,FlightsStackNavigtor,MedicalStackNavigtor,DashBoardStackNavigtor} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Calendar"  component={CalendarStackNavigtor} />

       <Tab.Screen name="Medical" component={MedicalStackNavigtor} /> 
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;