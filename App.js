import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/homeScreen';
import WorkoutScreen from './src/screens/workoutScreen';
import GoalsScreen from "./src/screens/goalsScreen";
import SettingsScreen from "./src/screens/settingsScreen";
import RoutineScreen from "./src/screens/routineScreen";
import LogoScreen from './src/screens/logoScreen';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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
                            screenOptions={}
                        >
                            <Tab.Screen name="Routines" component={RoutineScreen} />
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

