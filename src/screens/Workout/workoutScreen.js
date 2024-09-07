import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector, FieldArray, reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {RoutineScreen} from "../Routine/routineScreen";
import CustomButton from "../../components/customButton";

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 10,
        backgroundColor: '#000000',
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 5,
    },
    underline: {
        height: 2,
        backgroundColor: '#ffffff',
        marginTop: 5,
    },
});

class WorkoutScreen extends React.Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired,
        routine: PropTypes.object,
    }
    static FORM_NAME = 'WorkoutScreen';
    static FIELD_NAMES = {};

    handleCreateWorkout = () => {
        this.props.navigation.navigate('CreateWorkout');
    }

    render() {
        return (
            <View style={styles.appContainer}>
                <Text style={styles.title}>Workouts</Text>
                <View style={styles.underline} />
                <CustomButton title="Create Workout +" onPress={this.handleCreateWorkout} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    routine: state.app.routine,
});


export default connect(mapStateToProps)(WorkoutScreen);