import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import CustomButton from "../../components/customButton";
import {setWorkouts} from '../../redux/actions';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 10,
        backgroundColor: '#000000',
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 5,
    },
    underline: {
        height: 2,
        backgroundColor: '#ffffff',
        marginTop: 5,
    },
    input: {
        height: 40,
        borderColor: '#ffffff',
        borderWidth: 1,
        color: '#ffffff',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export class CreateWorkoutScreen extends React.Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired,
        routine: PropTypes.array,
        workouts: PropTypes.array,
        setWorkouts: PropTypes.func.isRequired,
    }
    static FORM_NAME = 'CreateWorkoutScreen';
    static FIELD_NAMES = {};

    state = {
        workoutName: '',
        exercises: [],
    };

    handleCreateWorkout = () => {
        const { workoutName, exercises } = this.state;
        const newWorkout = { name: workoutName, exercises };
        this.props.setWorkouts(newWorkout);
        console.log(this.props.workouts);
        this.props.navigation.navigate('Workouts');
    }


    render() {
        const { routine } = this.props;

        return (
            <View style={styles.appContainer}>
                <Text style={styles.text}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter workout name"
                    placeholderTextColor="#888"
                    onChangeText={(text) => this.setState({ workoutName: text })}
                />
                <CustomButton title="Create Workout" onPress={this.handleCreateWorkout} />

            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    workouts: state.app.workouts,
});

const mapDispatchToProps = {
    setWorkouts,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkoutScreen);