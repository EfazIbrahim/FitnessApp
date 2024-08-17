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

export default class WorkoutScreen extends React.Component {

    static propTypes = {

    }
    static FORM_NAME = 'WorkoutScreen';
    static FIELD_NAMES = {};

    render() {
        return (
            <View style={styles.appContainer}>
                <Text>Workouts</Text>
            </View>
        );
    }
}