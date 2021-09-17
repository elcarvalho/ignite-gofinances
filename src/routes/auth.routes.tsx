import React from 'react';

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  const stackOptions: StackNavigationOptions = {
    headerShown: false
  };

  return (
    <Navigator screenOptions={stackOptions}>
      <Screen name="SigIn" component={SignIn} />
    </Navigator>
  );
}
