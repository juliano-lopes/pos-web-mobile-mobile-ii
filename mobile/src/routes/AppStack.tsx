import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// 1. IMPORTAR o componente GestureHandlerRootView
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 

import Landing from '../pages/Landing';
import GiveClasses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createNativeStackNavigator();

function AppStack() {
  return (
    // 2. ENVOLVER a navegação no GestureHandlerRootView
    <GestureHandlerRootView style={{ flex: 1 }}> 
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Landing" component={Landing} />
          <Screen name="GiveClasses" component={GiveClasses} />
          <Screen name="Study" component={StudyTabs} />
        </Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default AppStack;