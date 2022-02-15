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
import ItemDetailsCard from '../../../components/ItemDetailsCard';
import BatchDetailsCard from '../../../components/BatchDetailsCard';
import Header from '../../../components/Header';
import ComponentButton from '../../../components/ComponentButton';




const ReturnBatch = ({ navigation }) => {


    let lastPress = 0;

    const [show, hide] = useState(false)

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

            <Header navigation={navigation} tittle="Batch" />




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
                        onPress={() => navigation.navigate('Item')}
                        imgeLocation={require('../../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />




                    <ItemDetailsCard />
                </Animated.View>
                <View style={styles.detailsCardOuter}>

                    <Animated.View
                        style={styles.mainOuter}
                    >

                        <View
                            style={styles.cardOuterStyle}>
                            <TouchableOpacity onPress={() => { onDoublePress() }}>


                                <View style={styles.cardInnerStyle}>

                                    <View style={styles.innercard1}>
                                        <Text style={{ paddingBottom: 5, fontSize: 15, fontWeight: '500' }}>Batch Number : B001</Text>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText3}>Qty Stock  </Text>

                                            <Text style={styles.innercardText2}>:0771234567 </Text>

                                        </View>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText1}>Mfd.Date</Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText1}>Exp.Date</Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>

                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText1}>Std. Price  </Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText3}>Outlet Amt.</Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText1}>Discount  </Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText3}>Final Amt.</Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText3}>Promos</Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText1}>Discount  </Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText3}>Final Amt.</Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText3}>Promos</Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>

                                    </View>
                                    <View style={styles.verticleLine}></View>


                                    <View style={styles.innercard2}>

                                        <View style={styles.iconwrap}>
                                            <TouchableOpacity onPress={() => navigation.navigate('ReturnNow')}>
                                                <Image source={require('../../../assets/icon/add.png')} style={styles.btnImg} />

                                                <Text style={{ alignSelf: 'center' }}> </Text>
                                            </TouchableOpacity>

                                        </View>



                                    </View>

                                </View>

                            </TouchableOpacity>
                        </View>
                        {show ?
                            (<View style={styles.popupcardInnerStyle}>
                                <View style={styles.popupinnercard1}>


                                    <TouchableOpacity onPress={() => navigation.navigate('Promo')
                                    }>
                                        <View style={styles.iconwrap}>

                                            <Image source={require('../../../assets/icon/dollar.png')} style={styles.btnImg} />

                                            <Text style={{ alignSelf: 'center' }}>Promos</Text>


                                        </View>


                                    </TouchableOpacity >
                                    <TouchableOpacity onPress={() => navigation.navigate('Return')}>
                                        <View style={styles.iconwrap}>

                                            <Image source={require('../../../assets/icon/barter.png')} style={styles.btnImg} />

                                            <Text style={{ alignSelf: 'center' }}>Return</Text>


                                        </View>


                                    </TouchableOpacity >
                                    <TouchableOpacity onPress={() => navigation.navigate('Offers')}>
                                        <View style={styles.iconwrap}>

                                            <Image source={require('../../../assets/icon/discount.png')} style={styles.btnImg} />

                                            <Text style={{ alignSelf: 'center' }}>Offers</Text>


                                        </View>

                                    </TouchableOpacity >
                                </View>


                            </View>
                            ) : null
                        }



                    </Animated.View>
                </View>
            </Animated.ScrollView>


        </Fragment>
    );

}
export default ReturnBatch;

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

    mainOuter: {
        elevation: 5,
        borderRadius: 7,
        marginBottom: 10,
        backgroundColor: '#CCD0CC',
    },
    cardOuterStyle: {
        padding: 8,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 5,
        marginTop: 5,
        // marginLeft: 10,
        // marginRight: 10,
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
        // padding: 8,
        width: '70%'

    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
        // marginLeft: 15,
    },
    innercard2: {
        paddingTop: 30,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignContent: 'space-between',
        alignSelf: 'flex-start',
        width: '30%',
        fontSize: 12

    },


    cardInnerText: {
        fontSize: 10,
        fontWeight: '100',
    },
    profileDetailsMainWrap: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 2,
        padding: 1,
    },
    profiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    iconwrap: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center'
    },
    btnImg: {

        width: 40,
        height: 40,
    },

    innercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '50%',
        fontSize: 11,
        tintColor: 'gray'
    },
    innercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 11,
        tintColor: 'gray'
    },
    innercardText3: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '50%',
        fontSize: 11,
        fontWeight: '500'
    },


    // 
    popupcardOuterStyle: {
        padding: 8,
        width: '100%',
        height: 120,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        elevation: 5,
        borderRadius: 7,
    },
    popupcardInnerStyle: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderRadius: 7,
        height: 100,
    },
    popupinnercard1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',

    },

    popupprofileDetailsMainWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center',
        display: 'flex',
        padding: 1,
    },

    popupiconwrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },





});
