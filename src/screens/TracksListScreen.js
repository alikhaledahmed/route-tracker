import React, { useContext } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import { NavigationEvents } from 'react-navigation';
import { Text, ListItem } from 'react-native-elements';
import Container from '../components/Container';
import Spacer from '../components/Spacer';

const TracksList = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <Container>
            <NavigationEvents onWillFocus={fetchTracks} />
            <Spacer>
                <Text h3 style={{ textAlign: "center", fontWeight: "bold", marginVertical: 20 }}>TRACKS LIST</Text>
            </Spacer>
            <Spacer>
                <FlatList
                    data={state}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => {
                        return <TouchableOpacity onPress={() => navigation.navigate('TrackDetails', { _id: item._id })}>
                            <ListItem chevron title={item.name} style={{ borderColor: 'purple', borderWidth: 1, margin: 10 }}/>
                        </TouchableOpacity>;
                    }}
                />
            </Spacer>
        </Container>
    );
};

const styles = StyleSheet.create({});

TracksList.navigationOptions = {
    headerShown: false
};

export default TracksList;