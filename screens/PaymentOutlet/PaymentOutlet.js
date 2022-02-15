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



import { BANNER_H } from '../constants';

import DetailsCard from '../../components/DetailsCard';

import Searchbar from '../../components/SearchBar';
import Header from '../../components/Header';
import ComponentButton from '../../components/ComponentButton'
import ExcessInvoice from '../../components/ExcessInvoice'
const PaymentOutlet = ({ navigation }) => {

    const scrollA = useRef(new Animated.Value(0)).current;




    return (
        <Fragment>

            <Header navigation={navigation} tittle="Excess" />


            {/* <Animated.ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollA } } }],
                    { useNativeDriver: true },
                )}
                scrollEventThrottle={16}
            > */}
            <Animated.View
                style={styles.safeAreaContainer}>

                <ComponentButton
                    buttonTitle="Pay"
                    // onPress={() => navigation.navigate('Item')}
                    imgeLocation={require('../../assets/icon/checkbox.png')}
                    buttonColor={'white'}
                    fontColor={'black'}
                />




                <Searchbar />


            </Animated.View>

            <View style={styles.detailsCardOuter}>
                <ComponentButton
                    buttonTitle="Bills"
                    onPress={() => navigation.navigate('OutletPayment')}
                    imgeLocation={require('../../assets/icon/invoice.png')}
                    buttonColor={'white'}
                    fontColor={'black'}
                />


                <View style={styles.btnOuter}>


                    <View style={styles.btninnerItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('Price')}>
                            <View style={styles.btnIconWrapper}>
                                <Image source={require('../../assets/icon/cash-payment.png')} style={styles.btnImages} />
                            </View>
                            <Text style={styles.btnTextWrapper}>
                                Price
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.btninnerItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('Card')}>
                            <View style={styles.btnIconWrapper}>
                                <Image source={require('../../assets/icon/card.png')} style={styles.btnImages} />
                            </View>
                            <Text style={styles.btnTextWrapper}>
                                Card
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.btninnerItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('CreateCheque')}>
                            <View style={styles.btnIconWrapper}>
                                <Image source={require('../../assets/icon/cheque.png')} style={styles.btnImages} />
                            </View>
                            <Text style={styles.btnTextWrapper}>
                                Cheque
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.btnOuter1}>

                    <View style={styles.btninnerItem}>
                        <TouchableOpacity onPress={() => navigation.navigate('Excess')}>
                            <View style={styles.btnIconWrapper}>
                                <Image source={require('../../assets/icon/piggy-bank1.png')} style={styles.btnImages} />
                            </View>
                            <Text style={styles.btnTextWrapper}>
                                Excess
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
            {/* </Animated.ScrollView> */}

        </Fragment >
    );

}
export default PaymentOutlet;
const styles = StyleSheet.create({




   
    safeAreaContainer: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',

        //     transform: [
        //         {
        //             translateY: scrollA.interpolate({
        //                 inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
        //                 outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        //             }),
        //         },
        //         {
        //             scale: scrollA.interpolate({
        //                 inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
        //                 outputRange: [2, 1, 0.5, 0.5],
        //             }),
        //         },
        //     ],
        // }
    },
    // ),
    detailsCardOuter: {
        backgroundColor: '#E4D9D9',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        display: 'flex',
        flex: 1,
        height: '100%'
    },

    ////////////button
    btnOuter: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center'


    },
    btnOuter1: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 5,
        marginBottom: 10,
        justifyContent: 'flex-start',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center'


    },
    btninnerItem: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 3,
        width: '32%',
        height: 80,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        elevation: 5,
        borderRadius: 7,

    },

    btnIconWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        marginTop: 10,

    },
    btnTextWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        fontWeight: '400',
        fontSize: 18,
        color: 'black'


    },
    btnImages: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 40,
        height: 40,
    },


});
