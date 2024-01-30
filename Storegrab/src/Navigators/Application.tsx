import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeContainer from '../Containers/WelcomeContainer/HomeContainer';

const Stack = createNativeStackNavigator();

function ApplicationNavigator() {
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeContainer} />
                </Stack.Navigator>
            </NavigationContainer>
    );
}


export default ApplicationNavigator
