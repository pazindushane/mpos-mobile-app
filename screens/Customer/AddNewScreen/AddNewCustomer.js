import React, { useRef } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Animated,
    Text,
    TextInput,
} from 'react-native';


import { BANNER_H } from '../../constants';



import Header from '../../../components/Header';
import ComponentButton from '../../../components/ComponentButton';
import Searchbar from '../../../components/SearchBar';





const AddNewCustomer = ({ navigation }) => {



    const scrollA = useRef(new Animated.Value(0)).current;



    return (
        <Fragment>

            <Header navigation={navigation} tittle="Add Outlet" />


            <Animated.ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollA } } }],
                    { useNativeDriver: true },
                )}
                scrollEventThrottle={16}
            >
                <Animated.View


                    style={styles.safeAreaContainer(scrollA)}>

                    <ComponentButton
                        buttonTitle="Send"
                        onPress={() => navigation.navigate('Promos')}
                        imgeLocation={require('../../../assets/icon/send.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />



                </Animated.View>
                <View style={styles.detailsCardOuter}>
                    <View style={styles.inputContainer}>

                        <TextInput

                            style={styles.inputField}
                            numberOfLines={1}
                            placeholder='Customer Name(full)'
                            placeholderTextColor="#666"

                        />

                    </View>
                    <View style={styles.inputContainer}>

                        <TextInput

                            style={styles.inputField}
                            numberOfLines={1}
                            placeholder='NIC'
                            placeholderTextColor="#666"

                        />

                    </View>
                    <View style={styles.inputContainer}>

                        <TextInput

                            style={styles.inputField}
                            numberOfLines={1}
                            placeholder='Address'
                            placeholderTextColor="#666"

                        />

                    </View>
                    <View style={styles.inputContainer}>

                        <TextInput

                            style={styles.inputField}
                            numberOfLines={1}
                            placeholder='etc'
                            placeholderTextColor="#666"

                        />

                    </View>


                </View>
            </Animated.ScrollView>



        </Fragment >
    );

}
export default AddNewCustomer;
const styles = StyleSheet.create({

    safeAreaContainer: scrollA => ({
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        transform: [
            {
                translateY: scrollA.interpolate({
                    inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
                    outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
                }),
            },
            {
                scale: scrollA.interpolate({
                    inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
                    outputRange: [2, 1, 0.5, 0.5],
                }),
            },
        ],
    }),

    detailsCardOuter: {
        backgroundColor: '#E4D9D9',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flex: 1
    },
    inputContainer: {

        marginBottom: 10,
        width: '100%',
        height: 40,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
    },

    inputField: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        fontSize: 16,
        borderRadius: 5,

    },



});
