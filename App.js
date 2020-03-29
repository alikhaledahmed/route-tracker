import React from 'react';
import { setNavigator } from './src/navigationRef'
// Screens
import AccountScreen from './src/screens/AccountScreen';
import CreateTrackScreen from './src/screens/CreateTrackScreen';
import TracksListScreen from './src/screens/TracksListScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
// Navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// Providers
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

const tracksFlow = createStackNavigator({
    TracksList: TracksListScreen,
    TrackDetails: TrackDetailsScreen
});

tracksFlow.navigationOptions = {
    title: 'Tracks',
    tabBarIcon: <MaterialCommunityIcons name="road-variant" size={25}/>
}

const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        Signin: SigninScreen,
        Signup: SignupScreen
    }), 
    authenticatedFlow: createBottomTabNavigator({
        tracksFlow,
        CreateTracks: CreateTrackScreen,
        Account: AccountScreen
    })
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <TrackProvider>
            <LocationProvider>
                <AuthProvider>
                    <App ref={(navigator) => { setNavigator(navigator) }} />
                </AuthProvider>
            </LocationProvider>
        </TrackProvider>
    );
};