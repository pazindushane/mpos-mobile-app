import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import Header from '../../components/Header';

export class ForgetPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }

  }
  render() {
    return (
      <View style={styles.container}>
        <FormInput
          placeholder="New Password"
          autoCorrect={false}
          style={styles.newPasswordInput}
        />
        <FormInput
          placeholder="Confirm Password"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          placeholder="Phone Number or Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormButton
          buttonTitle="Send Code"
          onPress={() => this.props.navigation.navigate('ReceiveCode')}
        />
      </View>
    );
  }
};

export default ForgetPasswordScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  newPasswordInput: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
