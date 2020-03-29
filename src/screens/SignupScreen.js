import React, { useContext, useEffect } from 'react';
import Container from '../components/Container';
import { Context as AuthContext } from '../context/AuthContext'
import AuthenticationForm from '../components/AuthenticationForm';
import Hyperlink from '../components/Hyperlink';

const SignupScreen = () => {

    const { state, signup } = useContext(AuthContext);


    return (
        <Container>
            <AuthenticationForm
                mainHeader="SIGN UP"
                errorMessage={state.errorMessage}
                buttonTitle="Create Account"
                buttonCallback={signup}
            />
            <Hyperlink hyperText="Already have an account? Login!" routeName="Signin"/>
        </Container>
    );
};

SignupScreen.navigationOptions = { headerShown: false };

export default SignupScreen;