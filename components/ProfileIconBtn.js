import React from 'react';
import { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  useColorScheme
} from 'react-native';


export default function ProfileIconbtn({ navigation }) {
  return (
    <View style={styles.profileBtnIcon}>
    <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
      <Image source={require('../assets/photo.jpg')} style={styles.profileImg} />
    </TouchableOpacity>
  </View>
  
  );
}

const styles = StyleSheet.create({
    profileBtnIcon: {

        alignItems: 'flex-end',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
      },
      profileImg: {
        borderRadius: 10,
        width: 32,
        height: 32,
        borderWidth: 1,
        borderColor: 'white',
      },
});
