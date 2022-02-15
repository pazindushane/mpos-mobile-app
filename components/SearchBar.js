import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/AntDesign';

import ModalDropdown from 'react-native-modal-dropdown';


export default function Searchbar() {
    return (

        <View style={styles.SectionStyle}>

            <FontAwesome name="search" size={20} iconColor='#030303' style={styles.searchIcon} />

            <TextInput
                style={{ flex: 1 }}
                placeholder="Enter Your Email Here"
                underlineColorAndroid="transparent"
            />
            <View style={styles.searchALlbtn}>
                <ModalDropdown options={['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9', 'option one ',]} />
                <FontAwesome name="caret-down" size={20} iconColor='#030303' style={styles.dropdownIcon} />

            </View>


        </View>

    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        
        },

        SectionStyle: {
            width:'100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderWidth: .5,
            borderColor: '#000',
            height: 52,
            borderRadius: 5,
            marginBottom: 5,
            marginTop: 5,
            // marginLeft: 10,
        
        },
        searchIcon: {
            padding: 10,
            alignItems: 'center'
        },
        ImageStyle: {
            padding: 10,
            margin: 5,
            height: 25,
            width: 25,
            resizeMode: 'stretch',
            alignItems: 'center'
        },
        searchALlbtn: {
            display: 'flex',
            borderTopRightRadius: 6,
            borderBottomRightRadius: 6,
            flexDirection: 'row',
            paddingLeft: 8,
            
            height: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#EDEDED'
        },
        dropdownIcon:{
            paddingRight: 8,
            paddingLeft: 8,
            
        }
});
