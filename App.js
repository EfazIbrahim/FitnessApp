import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/homeScreen';
import WorkoutScreen from './src/screens/workoutScreen';
import GoalsScreen from "./src/screens/goalsScreen";
import SettingsScreen from "./src/screens/settingsScreen";
import RoutineScreen from "./src/screens/routineScreen";
import LogoScreen from './src/screens/logoScreen';
import { Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routinesIcon from './assets/calendarIcon.png';
import homeIcon from './assets/homeIcon.png';
import workoutIcon from './assets/workoutIcon.png';
import goalsIcon from './assets/goalsIcon.png';
import settingsIcon from './assets/settingsIcon.png';

const Tab = createBottomTabNavigator();

class App extends React.Component {
    state = {
        isLoading: true,
    };

    componentDidMount() {
        // Simulate an async operation like fetching data
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 2000); // Adjust time as necessary
    }

    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    {this.state.isLoading ? (
                        <LogoScreen />
                    ) : (
                        <Tab.Navigator initialRouteName = "Home" backBehavior = "history"
                            screenOptions={({ route }) => ({
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
                                tabBarInactiveTintColor: 'gray',
                            })}
                        >
                            <Tab.Screen name="Routines" component={RoutineScreen}/>
                            <Tab.Screen name="Goals" component={GoalsScreen} />
                            <Tab.Screen name="Home" component={HomeScreen} />
                            <Tab.Screen name="Workouts" component={WorkoutScreen} />
                            <Tab.Screen name="Settings" component={SettingsScreen} />
                        </Tab.Navigator>
                    )}
                </NavigationContainer>
            </Provider>
        );
    }
}

export default App;

