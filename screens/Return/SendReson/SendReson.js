
import React, { useRef, useState } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    TouchableOpacity,
    Text,
    ScrollView,
    Image

} from 'react-native';


import { BANNER_H } from '../../constants';

import Header from '../../../components/Header';
import ComponentButton from '../../../components/ComponentButton';
import FormInput from '../../../components/FormInput';




const SendReson = ({ navigation }) => {


    let lastPress = 0;

    const [show, hide] = useState(true)

    const onDoublePress = () => {
        const time = new Date().getTime();
        const delta = time - lastPress;

        const DOUBLE_PRESS_DELAY = 400;
        if (delta < DOUBLE_PRESS_DELAY) {
            // Success double press
            console.log('double press');

            hide(!show)

        }
        lastPress = time;
    };
    const scrollA = useRef(new Animated.Value(0)).current;

    return (
        <Fragment>

            <Header navigation={navigation} tittle="Refund Cash" />




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
                        buttonTitle="Send Reason"
                        onPress={() => navigation.navigate('RefundMessageUnUsable')}
                        imgeLocation={require('../../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />
                    <FormInput
                        placeholder="Rs."
                      
                        autoCapitalize="none"
                        autoCorrect={false}
                    />




                </Animated.View>
                <View style={styles.detailsCardOuter}>

                    <Animated.View
                        style={styles.mainOuter}
                    >

                        <View
                            style={styles.cardOuterStyle}>



                        </View>


                    </Animated.View>
                </View>
            </Animated.ScrollView>


        </Fragment>
    );

}
export default SendReson;

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
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flex: 1
    },



});