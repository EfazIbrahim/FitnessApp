import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector, FieldArray, reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Button, TextInput } from 'react-native';



const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 70,
        paddingHorizontal: 20
    },
});

class SettingsScreen extends React.Component {

    static propTypes = {
        signOut: PropTypes.func.isRequired
    }
    static FORM_NAME = 'SettingsScreen';
    static FIELD_NAMES = {};

    render() {
        const { signOut } = this.props;
        return (
            <View style={styles.appContainer}>
                <Text>Settings</Text>
                <Button title="Sign Out" onPress={() => signOut()}/>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    signOut: state.app.signOut
});

export default SettingsScreen;