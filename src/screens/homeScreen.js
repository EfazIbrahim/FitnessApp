import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector, FieldArray, reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Button, TextInput } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 70,
        paddingHorizontal: 20,
    },

});

export class HomeScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired
    }
    static FORM_NAME = 'HomeScreen';
    static FIELD_NAMES = {};
    // handlePress = () => {
    //     let {navigation} = this.props;
    //     navigation.navigate('Workout');
    // }

    render() {
        return (
            <View style={styles.appContainer}>
                <Text>HomePage</Text>
                {/*<Button title='Tap Me' onPress={this.handlePress}></Button>*/}
            </View>
        );
    }
}
let mapStateToProps = state => ({
    // goals: formValueSelector(HomeScreen.FORM_NAME)(state, HomeScreen.FIELD_NAMES.GOALS),
    // enteredText: formValueSelector(HomeScreen.FORM_NAME)(state, HomeScreen.FIELD_NAMES.ENTERED_TEXT)
});
// let initialFormValues = {
//     [HomeScreen.FIELD_NAMES.GOALS]: [],
//     [HomeScreen.FIELD_NAMES.ENTERED_TEXT]: ''
// };
let reduxFormConfig = {
    form: HomeScreen.FORM_NAME,
    // initialValues: initialFormValues
};
let ReduxForm = reduxForm(reduxFormConfig)(HomeScreen);
export default connect(mapStateToProps)(ReduxForm);
