import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { setRoutine } from '../../redux/actions';
import CustomButton from "../../components/customButton";

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

export class CreateRoutineScreen extends React.Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired,
        routines: PropTypes.array,
    }
    static FORM_NAME = 'CreateRoutineScreen';
    static FIELD_NAMES = {};

    render() {
        const { routines } = this.props;

        return (
            <View style={styles.appContainer}>
                <Text style={styles.text}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Routine name"
                    placeholderTextColor="#888"
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    routines: state.app.routines,
});


export default connect(mapStateToProps)(CreateRoutineScreen);