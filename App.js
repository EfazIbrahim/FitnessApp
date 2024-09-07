import React, {useState, useEffect} from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import { Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


// Screens
import HomeScreen from './src/screens/homeScreen';
import WorkoutScreen from './src/screens/workoutScreen';
import GoalsScreen from "./src/screens/goalsScreen";
import SettingsScreen from "./src/screens/settingsScreen";
import RoutineScreen from "./src/screens/routineScreen";
import LogoScreen from './src/screens/logoScreen';
import createWorkoutScreen from './src/screens/createWorkoutScreen';

// Icons
import routinesIcon from './assets/calendarIcon.png';
import homeIcon from './assets/homeIcon.png';
import workoutIcon from './assets/workoutIcon.png';
import goalsIcon from './assets/goalsIcon.png';
import settingsIcon from './assets/settingsIcon.png';

// Amplify
import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

import { withAuthenticator } from '@aws-amplify/ui-react-native';

const Tab = createBottomTabNavigator();
const RoutineStack = createStackNavigator();

const RoutineStackNavigator = () => {
    return (
        <RoutineStack.Navigator initialRouteName={"Routine"}
        >
            <RoutineStack.Screen name="Routine" component={RoutineScreen}
                options={{headerShown: false}}
            />
            <RoutineStack.Screen name="CreateWorkout" component={createWorkoutScreen}
                options={{
                    headerStyle: { backgroundColor: 'black' },
                    headerTintColor: 'white',
                    title : 'Back to Routines',
                }}
            />
        </RoutineStack.Navigator>
    );
};

class AppUnlocked extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Tab.Navigator initialRouteName = "Home" backBehavior = "history"
                        screenOptions={({ route }) => ({
                            headerShown: false,
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;
                                if (route.name === 'Home') {
                                    iconName = homeIcon;
                                } else if (route.name === 'Workouts') {
                                    iconName = workoutIcon;
                                } else if (route.name === 'Goals') {
                                    iconName = goalsIcon;
                                } else if (route.name === 'Settings') {
                                    iconName = settingsIcon;
                                } else if (route.name === 'Routines') {
                                    iconName = routinesIcon;
                                }
                                return <Image source={iconName} style={{ width: size, height: size }} />;

                            },
                            tabBarActiveTintColor: 'tomato',
                            tabBarInactiveTintColor: 'white',
                            tabBarStyle: { backgroundColor: 'black' },
                        })}
                    >
                        <Tab.Screen name="Routines" component={RoutineStackNavigator} />
                        <Tab.Screen name="Goals" component={GoalsScreen} />
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Workouts" component={WorkoutScreen} />
                        <Tab.Screen name="Settings" component={SettingsScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}

const MainApp =  withAuthenticator(AppUnlocked);

export default App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust time as necessary
    }, []);

    return isLoading ? <LogoScreen /> : <MainApp />;
};

