import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { withNavigation } from 'react-navigation';

const Hyperlink = ({ navigation, hyperText, routeName }) => {
    return (
        <Spacer>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                <Text style={{ fontSize: 16, color: 'purple', fontWeight: "bold", alignSelf: "center" }}>
                    { hyperText }
                </Text>
            </TouchableOpacity>
        </Spacer>
    );
};

export default withNavigation(Hyperlink);