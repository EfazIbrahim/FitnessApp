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
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '80%',
        marginRight: 8,
        padding: 8
    },
});

export class Environment extends React.Component {
    static propTypes = {
        goals: PropTypes.array.isRequired,
        enteredText: PropTypes.string.isRequired,
    }
    static FORM_NAME = 'goalForm';
    static FIELD_NAMES = {GOALS: 'goals', ENTERED_TEXT: 'enteredText'};

    goalInputHandler(enteredText) {
        console.log(enteredText);
    }

    addGoalHandler() {
        console.log('Button was pressed');
    }

    render() {
        return (
            <View style={styles.appContainer}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Add your course goal!' onChangeText={this.goalInputHandler}
                               style={styles.textInput}></TextInput>
                    <Button title='ADD' onPress={this.addGoalHandler}></Button>
                </View>
                <View>
                    <Text>List Goals</Text>
                </View>
            </View>
        );
    }
}
let mapStateToProps = state => ({
    goals: formValueSelector(Environment.FORM_NAME)(state, Environment.FIELD_NAMES.GOALS),
    enteredText: formValueSelector(Environment.FORM_NAME)(state, Environment.FIELD_NAMES.ENTERED_TEXT)
});
let initialFormValues = {
    [Environment.FIELD_NAMES.GOALS]: [],
    [Environment.FIELD_NAMES.ENTERED_TEXT]: ''
};
let reduxFormConfig = {
    form: Environment.FORM_NAME,
    initialValues: initialFormValues
};
let ReduxForm = reduxForm(reduxFormConfig)(Environment);
export default connect(mapStateToProps)(ReduxForm);
