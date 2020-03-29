import React, { useState, useContext } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext'
import {NavigationEvents} from 'react-navigation';
import { View } from 'react-native';

const AuthenticationForm = ({ mainHeader, errorMessage, buttonTitle, buttonCallback }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={{ marginTop: 150, marginBottom: 10 }}>
        <NavigationEvents onWillBlur={clearErrorMessage}/>
        <Spacer>
            <Text h3 style={{ textAlign: "center" }}>{ mainHeader }</Text>
        </Spacer>
        <Spacer>
            <Input
                label="Email"
                placeholder="email@domain.com"
                value={email}
                onChange={(event) => {
                    event.persist();
                    setEmail(event.nativeEvent.text);
                }}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </Spacer>
        <Spacer>
            <Input
                label="Password"
                placeholder="********"
                value={password}
                onChange={(event) => {
                    event.persist();
                    setPassword(event.nativeEvent.text);
                }}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
        </Spacer>
    
        { errorMessage ?
            <Spacer>
                <Text style={{ color: 'red', alignSelf: "center", fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
                    { errorMessage }
                </Text>
            </Spacer>
            : null
        }

        <Spacer>
            <Button
                title={ buttonTitle }
                buttonStyle={{ borderColor: 'black', width: 150, alignSelf: "center", marginTop: 10 }}
                titleStyle={{ color: 'black' }}
                type="outline"
                onPress={() => buttonCallback({ email, password })}
            />
        </Spacer>
    </View>
    );

};

export default AuthenticationForm;