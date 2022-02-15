import React, { useState, useRef } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Animated,

} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { BANNER_H } from '../constants';
import OffersCard from '../../components/OffersCard';
import DetailsCard from '../../components/DetailsCard';

import Searchbar from '../../components/SearchBar';
import Header from '../../components/Header';
import ComponentButton from '../../components/ComponentButton';
import ExcessInvoice from '../../components/ExcessInvoice';

const OutletPayment = ({ navigation }) => {

    const scrollA = useRef(new Animated.Value(0)).current;




    return (
        <Fragment>

            <Header navigation={navigation} tittle="Payment" />


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
                        buttonTitle="Done"
                        onPress={() => navigation.navigate('OutletPayment')}
                        imgeLocation={require('../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />
                    <Searchbar />

                </Animated.View>

                <View style={styles.detailsCardOuter}>


                    <TouchableOpacity onPress={() => navigation.navigate('CreateCheque')}>
                        <ExcessInvoice />
                    </TouchableOpacity>
                    <ExcessInvoice />
                    <ExcessInvoice />
                    <ExcessInvoice />



                </View>
            </Animated.ScrollView>

        </Fragment >
    );

}
export default OutletPayment;
const styles = StyleSheet.create({







    safeAreaContainer: scrollA => ({
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
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
        marginTop: 5,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        height: '100%'
    },



});
