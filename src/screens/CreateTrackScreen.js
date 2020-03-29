import React, { useContext, useCallback } from 'react';
import Container from '../components/Container';
import Spacer from '../components/Spacer';
import { Text } from 'react-native-elements';
import TrackForm from '../components/TrackForm';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

const CreateTrackScreen = ({ isFocused }) => {

    const { state : { recording, locations }, addLocation } = useContext(LocationContext);
    const callback = useCallback(
        location => {
            addLocation(location, recording);
        },
        [recording],
    );
    
    const [error] = useLocation(isFocused || recording, callback);
    
    return (
        <Container>
            <Spacer>
                <Text h3 style={{ textAlign: "center", fontWeight: "bold", marginTop: 20 }}>CREATE TRACK</Text>
            </Spacer>
            <Spacer/>
            <Spacer>
                <Map/>
            </Spacer>
            <Spacer>
                { error ?
                    <Text style={{ color: 'red', alignSelf: "center", fontSize: 20 }}>
                        Please enable location services!
                    </Text>
                    : null
                }
            </Spacer>
                <TrackForm />
        </Container>
    );
};

CreateTrackScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <MaterialIcons name="add" size={30}/>
};

export default withNavigationFocus(CreateTrackScreen);