import React, { useState, useRef } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated,

} from 'react-native';

import { BANNER_H } from '../../constants';

import Header from '../../../components/Header';

import BatchDetailsCard from '../../../components/BatchDetailsCard';
import ComponentButton from '../../../components/ComponentButton';

const ReturnNow = ({ navigation }) => {

    const scrollA = useRef(new Animated.Value(0)).current;

    return (
        <Fragment>


            <Header navigation={navigation} tittle="Return Now" />


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
                        buttonTitle="Return"
                        onPress={() => navigation.navigate('ReturnItem')}
                        imgeLocation={require('../../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />
                    <TouchableOpacity onPress={() => console.log("press")}>
                        <BatchDetailsCard />

                    </TouchableOpacity>


                    <View style={styles.btnOuter}>

                        <View style={styles.btninnerItem(buttonColor = 'white')}>
                            <TouchableOpacity onPress={() => navigation.navigate('ExcessAmmount2')}>
                                <View style={styles.btnIconWrapper}>
                                    <Image source={require('../../../assets/icon/return.png')} style={styles.btnImages} />
                                </View>
                                <Text style={styles.btnTextWrapper}>
                                    To Stock
                                </Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.btninnerItem(buttonColor = '#52DBE3')}>
                            <TouchableOpacity onPress={() => navigation.navigate('ExcessAmmount2')}>
                                <View style={styles.btnIconWrapper}>
                                    <Image source={require('../../../assets/icon/returns.png')} style={styles.btnImages} />
                                </View>
                                <Text style={styles.btnTextWrapper}>
                                    To Inventory
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.btninnerItem(buttonColor = '#FB6A6A')}>
                            <TouchableOpacity onPress={() => navigation.navigate('ExcessAmmount2')}>
                                <View style={styles.btnIconWrapper}>
                                    <Image source={require('../../../assets/icon/bin.png')} style={styles.btnImages} />
                                </View>
                                <Text style={styles.btnTextWrapper}>
                                    Non Useable
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </Animated.View>
                <View style={styles.detailsCardOuter}>
                    <TouchableOpacity onPress={() => {
                      navigation.navigate('ReturnNow2')
                    }}>
                        <View style={styles.cardOuterStyle}>
                            <View style={styles.cardInnerStyle}>

                                <View style={styles.innercard1}>
                                    <Text style={{ paddingBottom: 5, fontSize: 13, fontWeight: '500' }}>Maliban Chocolate Marie 80g</Text>
                                    <View style={styles.profiledetailsInnerwrap}>

                                        <Text style={styles.innercardText1}>Total Items </Text>

                                        <Text style={styles.innercardText2}>:</Text>

                                    </View>
                                    <View style={styles.profiledetailsInnerwrap}>

                                        <Text style={styles.innercardText1}>Invoice Amt </Text>
                                        <Text style={styles.innercardText2}>:</Text>


                                    </View>
                                    <View style={styles.profiledetailsInnerwrap}>

                                        <Text style={styles.innercardText1}>Discount</Text>

                                        <Text style={styles.innercardText2}>:</Text>

                                    </View>
                                    <View style={styles.profiledetailsInnerwrap}>

                                        <Text style={styles.innercardText1}>Final Amt</Text>

                                        <Text style={styles.innercardText2}>:</Text>


                                    </View>

                                </View>
                                <View style={styles.verticleLine}></View>
                                <View style={styles.innercard2}>

                                    <View style={styles.iconwrap}>
                                        
                                            <View style={styles.btnIconWrapper}>
                                                <Image source={require('../../../assets/icon/to-do-list.png')} style={styles.btnImages} />
                                            </View>
                                            <Text style={styles.iconText1}> 99999</Text>
                                     
                                    </View>

                                </View>
                            </View>

                        </View>

                    </TouchableOpacity>
                </View>
            </Animated.ScrollView>

        </Fragment >
    );

}
export default ReturnNow;
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


    ////////////////////
    detailsCardOuter: {
        backgroundColor: '#E4D9D9',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom:5,
        flex: 1,
        height: '100%'
    },

    cardOuterStyle: {
        padding: 8,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        elevation: 5,
        borderRadius: 7,
    },
    cardInnerStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innercard1: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%'

    },
    profiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    innercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '50%',
        fontSize: 12
    },
    innercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 12
    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',

    },
    innercard2: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'space-around',
        width: '30%',
        fontSize: 12,
        alignSelf: 'center',

    },
    iconwrap: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    iconText1: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 15
    },

    cardInnerText: {
        fontSize: 10,
        fontWeight: '100',
    },

    ////////////button
    btnOuter: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 5,
        marginBottom: 10,
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center'


    },
    btninnerItem: buttonColor => ({
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 3,
        width: '32%',
        height: 80,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: buttonColor,
        elevation: 5,
        borderRadius: 7,

    }),

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
        color: 'black'
    },

});
