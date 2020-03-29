import React, { useContext } from 'react';
import { NavigationEvents } from 'react-navigation'
import Container from '../components/Container';
import { Context as AuthContext } from '../context/AuthContext'
import AuthenticationForm from '../components/AuthenticationForm';
import Hyperlink from '../components/Hyperlink';

const SigninScreen = () => {
    
    const { state, signin } = useContext(AuthContext);

    return (
        <Container>
            <AuthenticationForm
                mainHeader="SIGN IN"
                errorMessage={state.errorMessage}
                buttonTitle="Login"
                buttonCallback={signin}
            />
            <Hyperlink hyperText="Do not have an account? Create one!" routeName="Signup"/>
        </Container>
    );
};

SigninScreen.navigationOptions = { headerShown: false };

export default SigninScreen;