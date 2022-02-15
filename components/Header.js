import React, { useRef } from 'react';
import {
    TouchableOpacity,

    Image,
} from 'react-native';
import { Fragment } from 'react';
import { SafeAreaView } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Header = ({ navigation,tittle }) => {
    return (
      
                <View
                    style={styles.header}>
                    <View style={styles.headerBtnContainer}>
                        <TouchableOpacity onPress={() =>navigation.goBack()}>
                            <AntDesign
                                style={styles.icon}
                                name="arrowleft"
                                size={35}
                                color="white"

                            />
                        </TouchableOpacity>
                        <View style={{ width: 8 }}>

                        </View>
                        <TouchableOpacity onPress={() =>navigation.navigate('HomeScreen')}>
                            <FontAwesome
                                name="home"
                                size={35}
                                color="white"

                            />
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={styles.headerText}>
                        {tittle}
                    </Text>

                    <View style={styles.profileBtnIcon}>
                        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                            <Image source={require('../assets/photo.jpg')} style={styles.profileImg} />
                        </TouchableOpacity>
                    </View>
                </View>
       
    );
}
export default Header;
const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#3F50B4',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        display: 'flex',

    },
    headerText: {
        flex: 1,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileBtnIcon: {

        alignItems: 'flex-end',

    },
    headerBtnContainer: {
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 2,
        flexDirection: 'row',
        height: 'auto',
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 1,
        paddingRight: 5,
        justifyContent: 'space-between'
    },

    profileImg: {
        borderRadius: 5,
        width: 39,
        height: 39,
        borderWidth: 1,
        borderColor: 'white',
    },





});
