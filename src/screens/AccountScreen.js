import React, { useContext } from 'react';
import Container from '../components/Container';
import { Context as AuthContext } from '../context/AuthContext'
import Spacer from '../components/Spacer'
import { Button, Text } from 'react-native-elements'
import { EvilIcons } from '@expo/vector-icons';

const AccountScreen = () => {

    const { signout } = useContext(AuthContext);

    return (
        <Container>
            <Spacer>
                <Spacer>
                    <Text h3 style={{ textAlign: "center", fontWeight: "bold", marginTop: 20 }}>Profile</Text>
                </Spacer>
                <Button
                    title="SIGN OUT"
                    buttonStyle={{ borderColor: 'black', width: 300, marginVertical: 200, alignSelf: "center" }}
                    titleStyle={{ color: 'black' }}
                    type="outline"
                    onPress={signout}
                />
            </Spacer>
        </Container>
    );
};

AccountScreen.navigationOptions = {
    title: 'Profile',
    tabBarIcon: <EvilIcons name="user" size={30} />
};

export default AccountScreen;