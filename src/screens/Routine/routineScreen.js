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

export class RoutineScreen extends React.Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired,
        routines: PropTypes.array,
    }
    static FORM_NAME = 'RoutineScreen';
    static FIELD_NAMES = {};

    handleCreateRoutine = () => {
        this.props.navigation.navigate('CreateRoutine');
    }

    render() {
        const { routines } = this.props;
        const isRoutineEmpty = Object.keys(routines).length === 0;
        return (
            <View style={styles.appContainer}>
                <Text style={styles.title}>Routines</Text>
                <View style={styles.underline} />
                <CustomButton title="Create Routine +" onPress={this.handleCreateRoutine} />
                <View style={styles.underline} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    routines: state.app.routines,
});


export default connect(mapStateToProps)(RoutineScreen);