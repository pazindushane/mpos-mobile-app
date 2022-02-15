
import React, { useRef, useState } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    TouchableOpacity,
    Text,

    Image

} from 'react-native';


import { BANNER_H } from '../../../constants';

import Header from '../../../../components/Header';
import ComponentButton from '../../../../components/ComponentButton';
import FormInput from '../../../../components/FormInput';




const RefundMessageUnUsable = ({ navigation }) => {


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

            <Header navigation={navigation} tittle="Reason" />




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
                        buttonTitle="Refund"
                        onPress={() => navigation.navigate('ReturnNow')}
                        imgeLocation={require('../../../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />
                    <FormInput
                        placeholder="Type here...."

                        autoCapitalize="none"
                        autoCorrect={false}
                    />




                </Animated.View>
                <View style={styles.detailsCardOuter}>

                    
                    <TouchableOpacity style={styles.buttonContainer} >
                        <Image source={require('../../../../assets/icon/note.png')} style={styles.btnIcon} />
                        <Text style={styles.buttonText}>Expired</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} >
                        <Image source={require('../../../../assets/icon/note.png')} style={styles.btnIcon} />
                        <Text style={styles.buttonText}>Damaged</Text>
                    </TouchableOpacity>
                </View>
            </Animated.ScrollView>


        </Fragment>
    );

}
export default RefundMessageUnUsable;

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

    buttonContainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 7,
        elevation: 5,
        marginBottom: 5,
        marginTop: 5,
        paddingLeft: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 15,
        color: 'black'
    },
    btnIcon: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,

    },
    btnImg: {
        width: 40,
        height: 40,
    },



});