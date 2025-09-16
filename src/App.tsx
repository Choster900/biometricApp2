import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import * as eva from '@eva-design/eva';

import React from 'react'
import { Text, useColorScheme, View } from 'react-native'
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { AuthProvider } from './presentation/providers/AuthProvider';
import { ApplicationProvider } from '@ui-kitten/components';

export const App = () => {

    const colorScheme = useColorScheme();

    const theme = colorScheme === 'dark' ? eva.dark : eva.light;

    const backgroundColor = colorScheme === 'dark' ? theme['color-basic-800'] : theme['color-basic-100'];

    return (
        <ApplicationProvider  {...eva} theme={theme}>
            <NavigationContainer>
                <AuthProvider>
                    <StackNavigator />
                </AuthProvider>
            </NavigationContainer>
        </ApplicationProvider>
    )
}
