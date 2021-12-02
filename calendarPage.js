import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { Animated,FlatList,ScrollView, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Easing } from 'react-native-reanimated';
import { isLoading, getSchedule } from './databaseAPI';
const CalendarContent=({allTasks})=>
{
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  // var allTasks={'2021-11-18':[{type:'',startTime:'11:00',endTime:'12:00',subTitle:'MCO to EGY'},{type:'',startTime:'2:00',endTime:'5:00',subTitle:'Medical Checkup'},{type:'',startTime:'2:00',endTime:'5:00',subTitle:'Medical Checkup'}],
  // '2021-11-22':[{type:'',startTime:'12:00',endTime:'3:00',subTitle:'EGY to MCO'}]
  // }
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
    return (
  
      <View style={{flex:1}}>
       <View style={{flex:1,justifyContent:'flex-start',height:'80%',backgroundColor:'white'}}>
  
         <Calendar
          //loadItemsForMonth={loadItems}
         // items={allTasks}
          selected={'2021-11-18'}
          renderItem={renderItem}
         onDayPress={(day)=>{console.log("WTF"); updateDay(day.year+"-"+day.month+"-"+day.day)}}
         //onMonthChange={}
        />
             </View>
  
          <Animated.View style={[ 
            {
              position:'absolute',
              top:(0.48*windowHeight),
              left:0,
              right:0,
              transform: [
                {  translateY: calenderHeight } 
              ]
            } 
          ]}
          >
        <View>
          <TouchableOpacity onPress={  ()=>{
            if(toogle)
            {
              val=-50/100*windowHeight;
            }
            else{val=0}
            toogle= !(toogle);
            Animated.spring(calenderHeight, {
              toValue: val,
               
              easing:Easing.bounce,
              duration: 2000,
              useNativeDriver: true 
            }).start( );}
          }>
            
        <View style={{flexDirection:'row',justifyContent:'space-between',
          shadowColor: '#000',
          backgroundColor:'white',
          padding:15,
          
          }} >
        <Text>{day}</Text>
        <Icon name="long-arrow-up" size={15} color="black" type="font-awesome" 
        
        />
  
        </View>
        </TouchableOpacity>
  
        </View>
  
        <FlatList
          
          style={{backgroundColor:'white',height:windowHeight}}
          data={allTasks[day]}
          renderItem={({item})=>renderItem(item)}/>
        </Animated.View>
  
  
  
      </View>
  
  
    );
}


const CalendarPage=(navigation)=>
{
  const API_URL = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://192.168.1.111:3000';
  const ran = true;
  const [allTasks, setallTasks] = useState([])
useEffect(() => {
  fetch( `${API_URL}/getSchedule`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`, 
    },
  })
  .then(async res => { 
    try {
        const jsonRes = await res.json();
        console.log('HIII');
        if (res.status === 200) {
          
            console.log(jsonRes);
            setallTasks(jsonRes);
  
        }
    } catch (err) {
        console.log(err);
    };
  
  })
  .catch(err => {
    console.log(err);
  })
},[] )
 
  return(
<View style={{flex:1}}>
  {allTasks && <CalendarContent allTasks={allTasks}></CalendarContent>}
</View>
  
  )

  
 
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CalendarPage;
