import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { DashboardScreen } from '../screens/dashboard/DashboardScreen';
/*import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { NotificationsScreen } from '../screens/notifications/NotificationsScreen';
import { AnalyticsScreen } from '../screens/analytics/AnalyticsScreen'; */
import { HomeScreen } from '../screens/home/HomeScreen';

export type BottomTabParamList = {
    Dashboard: undefined;
    Analytics: undefined;
    Notifications: undefined;
    Profile: undefined;
    Settings: undefined;
    HomeScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabIcon = (emoji: string) => ({ focused, color, size }: any) => (
    <Text style={{ fontSize: size * 0.8, color: focused ? color : '#8F9BB3' }}>
        {emoji}
    </Text>
);

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                //tabBarActiveTintColor: '#3366FF',
                tabBarInactiveTintColor: '#8F9BB3',
                tabBarStyle: {
                  //  backgroundColor: '#FFFFFF',
                    borderTopWidth: 1,
                    //borderTopColor: '#E4E9F2',
                    paddingTop: 8,
                    paddingBottom: 8,
                    height: 65,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                    marginTop: 4,
                },
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: TabIcon('🏠'),
                }}
            />
            {/* <Tab.Screen
                name="Analytics"
                component={AnalyticsScreen}
                options={{
                    tabBarLabel: 'Analytics',
                    tabBarIcon: TabIcon('bar-chart-outline'),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: TabIcon('bell-outline'),
                    tabBarBadge: 99,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: TabIcon('person-outline'),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: TabIcon('settings-outline'),
                }}
            /> */}
           {/*  <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: TabIcon('home-outline'),
                }}
            /> */}
        </Tab.Navigator>
    );
};
