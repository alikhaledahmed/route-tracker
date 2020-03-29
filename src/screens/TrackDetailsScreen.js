import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Container from '../components/Container';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import Spacer from '../components/Spacer';

const TrackDetails = ({ navigation }) => {

    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;

     return (
        <Container>
            <Spacer>
                <Text h3 style={{ textAlign: "center", fontWeight: "bold", marginTop: 20 }}>{ track.name }</Text>
            </Spacer>
            <Spacer>
                <MapView style={styles.map}
                    initialRegion={{
                        longitudeDelta: 0.01,
                        latitudeDelta: 0.01,
                        ...initialCoords
                    }}
                >
                    <Polyline coordinates={track.locations.map(location => location.coords)}/>
                </MapView>
            </Spacer>
        </Container>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

TrackDetails.navigationOptions = { headerShown: false };

export default TrackDetails;