import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { AuthProvider } from './presentation/providers/AuthProvider';

export const App = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <StackNavigator />
            </AuthProvider>
        </NavigationContainer>
    )
}
