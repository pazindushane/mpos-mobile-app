import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import AntDesign from 'react-native-vector-icons/AntDesign';


export class ReceiveCodeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     

    }

  }
  render() {
    return (
      <View style={styles.container}>
        <FormInput
          placeholder="Enter Code"
          autoCorrect={false}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        />
        <FormButton buttonTitle="Verify Me" />
      </View>
    );
  }
};

export default ReceiveCodeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
