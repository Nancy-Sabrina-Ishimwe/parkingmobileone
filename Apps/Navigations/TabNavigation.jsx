import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Obonescreen} from '../Screens/Obonescreen/Obonescreen'

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <View>
      <Tab.Navigator>
        <Tab.Screen name='OB1' component={Obonescreen}/>
        <Tab.Screen name='OB2' component={Obtwoscreen}/>
        <Tab.Screen name='Register' component={Registerscreen}/>
        <Tab.Screen name='Requestcode' component={Requestcodescreen}/>
        

      </Tab.Navigator>
    </View>
  )
}
