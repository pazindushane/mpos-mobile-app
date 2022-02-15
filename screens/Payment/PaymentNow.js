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

import ComponentButton from '../../components/ComponentButton';

import Header from '../../components/Header';
import Carousel from './Carousel'

const PaymentNow = ({ navigation }) => {

    const scrollA = useRef(new Animated.Value(0)).current;




    return (
        <Fragment>

            <Header navigation={navigation} tittle="Pay Now" />



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
                        buttonTitle="Pay"
                        // onPress={() => navigation.navigate('Item')}
                        imgeLocation={require('../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />



                    <TouchableOpacity onPress={() => navigation.navigate('PaymentNow2')}>
                        <View>
                            <View
                                style={styles.paymentInvoiceOuterStyle}>
                                <Text style={{ fontSize: 13, fontWeight: '500' }}>Maliban Chocelete Mary 80g</Text>
                                <View style={styles.paymentInvoiceRowItem}>


                                    <View style={styles.paymentInvoiceItemOuter1}>


                                        <View style={styles.paymentInvoiceRowItem1}>

                                            <Text style={styles.paymentInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.paymentInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                        <View style={styles.paymentInvoiceRowItem1}>

                                            <Text style={styles.paymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.paymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.paymentInvoiceRowItem1}>

                                            <Text style={styles.paymentInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.paymentInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                    </View>

                                    <View style={styles.paymentInvoiceItemOuter2}>




                                        <View style={styles.paymentInvoiceRowItem1}>

                                            <Text style={styles.paymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.paymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.paymentInvoiceRowItem1}>

                                            <Text style={styles.paymentInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.paymentInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                        <View style={styles.paymentInvoiceRowItem1}>

                                            <Text style={styles.paymentInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.paymentInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                    </View>



                                </View>
                                <View style={styles.paymentInvoiceRowItem}>


                                    <View style={styles.paymentInvoiceItemOuter1}>


                                        <View style={styles.paymentInvoiceRowItem1}>

                                            <Text style={styles.paymentInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.paymentInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                        <View style={styles.paymentInvoiceRowItem1}>

                                            <Text style={styles.paymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.paymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                    </View>


                                </View>






                            </View>

                        </View>
                    </TouchableOpacity>
                  
                
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



                </Animated.View>
                <View style={styles.detailsCardOuter}>



                    <View>
                        <View
                            style={styles.PaymentOuterStyle}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.PaymentInnerItemwrap1}>

                                <View style={styles.PaymentRowItem}>


                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>
                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>

                                    <View style={styles.PaymentItemOuter2}>


                                        <View style={styles.PaymentInvoiceiconwrap}>

                                            <Image source={require('../../assets/icon/price-tag.png')} style={styles.PaymentbtnImg} />
                                        </View>


                                    </View>


                                </View>

                            </View>

                            <View style={styles.PaymentInvoicehorisontalLine}></View>


                            <View style={styles.PaymentInnerItemwrap2}>
                                <Text style={styles.PaymentinnercardText3, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>Rs.</Text>
                                <Text style={styles.PaymentinnercardText4, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>9000000.00</Text>
                            </View>

                        </View>

                    </View>

                    <View>
                        <View
                            style={styles.PaymentOuterStyle}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.PaymentInnerItemwrap1}>

                                <View style={styles.PaymentRowItem}>


                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>
                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>

                                    <View style={styles.PaymentItemOuter2}>


                                        <View style={styles.PaymentInvoiceiconwrap}>

                                            <Image source={require('../../assets/icon/price-tag.png')} style={styles.PaymentbtnImg} />
                                        </View>


                                    </View>


                                </View>

                            </View>

                            <View style={styles.PaymentInvoicehorisontalLine}></View>


                            <View style={styles.PaymentInnerItemwrap2}>
                                <Text style={styles.PaymentinnercardText3, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>Rs.</Text>
                                <Text style={styles.PaymentinnercardText4, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>9000000.00</Text>
                            </View>

                        </View>

                    </View>




                    <View>
                        <View
                            style={styles.PaymentOuterStyle}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.PaymentInnerItemwrap1}>

                                <View style={styles.PaymentRowItem}>


                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>
                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>

                                    <View style={styles.PaymentItemOuter2}>


                                        <View style={styles.PaymentInvoiceiconwrap}>

                                            <Image source={require('../../assets/icon/price-tag.png')} style={styles.PaymentbtnImg} />
                                        </View>


                                    </View>


                                </View>

                            </View>

                            <View style={styles.PaymentInvoicehorisontalLine}></View>


                            <View style={styles.PaymentInnerItemwrap2}>
                                <Text style={styles.PaymentinnercardText3, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>Rs.</Text>
                                <Text style={styles.PaymentinnercardText4, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>9000000.00</Text>
                            </View>

                        </View>

                    </View>




                    <View>
                        <View
                            style={styles.PaymentOuterStyle}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.PaymentInnerItemwrap1}>

                                <View style={styles.PaymentRowItem}>


                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>
                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>

                                    <View style={styles.PaymentItemOuter2}>


                                        <View style={styles.PaymentInvoiceiconwrap}>

                                            <Image source={require('../../assets/icon/price-tag.png')} style={styles.PaymentbtnImg} />
                                        </View>


                                    </View>


                                </View>

                            </View>

                            <View style={styles.PaymentInvoicehorisontalLine}></View>


                            <View style={styles.PaymentInnerItemwrap2}>
                                <Text style={styles.PaymentinnercardText3, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>Rs.</Text>
                                <Text style={styles.PaymentinnercardText4, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>9000000.00</Text>
                            </View>

                        </View>

                    </View>




                    <View>
                        <View
                            style={styles.PaymentOuterStyle}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.PaymentInnerItemwrap1}>

                                <View style={styles.PaymentRowItem}>


                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>
                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>

                                    <View style={styles.PaymentItemOuter2}>


                                        <View style={styles.PaymentInvoiceiconwrap}>

                                            <Image source={require('../../assets/icon/price-tag.png')} style={styles.PaymentbtnImg} />
                                        </View>


                                    </View>


                                </View>

                            </View>

                            <View style={styles.PaymentInvoicehorisontalLine}></View>


                            <View style={styles.PaymentInnerItemwrap2}>
                                <Text style={styles.PaymentinnercardText3, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>Rs.</Text>
                                <Text style={styles.PaymentinnercardText4, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>9000000.00</Text>
                            </View>

                        </View>

                    </View>




                    <View>
                        <View
                            style={styles.PaymentOuterStyle}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.PaymentInnerItemwrap1}>

                                <View style={styles.PaymentRowItem}>


                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>
                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>

                                    <View style={styles.PaymentItemOuter2}>


                                        <View style={styles.PaymentInvoiceiconwrap}>

                                            <Image source={require('../../assets/icon/price-tag.png')} style={styles.PaymentbtnImg} />
                                        </View>


                                    </View>


                                </View>

                            </View>

                            <View style={styles.PaymentInvoicehorisontalLine}></View>


                            <View style={styles.PaymentInnerItemwrap2}>
                                <Text style={styles.PaymentinnercardText3, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>Rs.</Text>
                                <Text style={styles.PaymentinnercardText4, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>9000000.00</Text>
                            </View>

                        </View>

                    </View>




                    <View>
                        <View
                            style={styles.PaymentOuterStyle}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.PaymentInnerItemwrap1}>

                                <View style={styles.PaymentRowItem}>


                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>
                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>

                                    <View style={styles.PaymentItemOuter2}>


                                        <View style={styles.PaymentInvoiceiconwrap}>

                                            <Image source={require('../../assets/icon/price-tag.png')} style={styles.PaymentbtnImg} />
                                        </View>


                                    </View>


                                </View>

                            </View>

                            <View style={styles.PaymentInvoicehorisontalLine}></View>


                            <View style={styles.PaymentInnerItemwrap2}>
                                <Text style={styles.PaymentinnercardText3, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>Rs.</Text>
                                <Text style={styles.PaymentinnercardText4, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>9000000.00</Text>
                            </View>

                        </View>

                    </View>




                    <View>
                        <View
                            style={styles.PaymentOuterStyle}>
                            <Text style={{ fontSize: 13, fontWeight: '500' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.PaymentInnerItemwrap1}>

                                <View style={styles.PaymentRowItem}>


                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>
                                    <View style={styles.PaymentItemOuter1}>


                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.PaymentRowItem1}>

                                            <Text style={styles.PaymentInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.PaymentInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>

                                    <View style={styles.PaymentItemOuter2}>


                                        <View style={styles.PaymentInvoiceiconwrap}>

                                            <Image source={require('../../assets/icon/price-tag.png')} style={styles.PaymentbtnImg} />
                                        </View>


                                    </View>


                                </View>

                            </View>

                            <View style={styles.PaymentInvoicehorisontalLine}></View>


                            <View style={styles.PaymentInnerItemwrap2}>
                                <Text style={styles.PaymentinnercardText3, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>Rs.</Text>
                                <Text style={styles.PaymentinnercardText4, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>9000000.00</Text>
                            </View>

                        </View>

                    </View>








                </View>
            </Animated.ScrollView>

        </Fragment >
    );

}
export default PaymentNow;
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
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flex: 1
    },
    detailsCardRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        marginLeft: 5,
        marginRight: 5,
    },




    
    btnIcon: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 35,
        height: 35,
        // backgroundColor: 'red',

    },










    ////////////button
    btnOuter: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',

        paddingTop: 5,
        paddingBottom: 10,
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center'


    },
    btninnerItem: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 3,
        width: '23%',
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

    },
    btnTextWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        fontSize: 15

    },
  

    btnImages: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10,
        width: 40,
        height: 40,
    },

    ////////////////////////////Payment Invoice
    paymentInvoiceOuterStyle: {
        padding: 8,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: '#ffffff',
        elevation: 5,
        borderRadius: 7,
    },


    paymentInvoiceItemwrap2: {
        width: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    paymentInvoiceRowItem: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',


    },

    paymentInvoiceItemOuter1: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '60%',
    },
    paymentInvoiceItemOuter2: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        width: '50%',
    },
    paymentInvoiceRowItem1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',

    },

    paymentInvoiceInvoiceinnercard2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        width: '58%',
        fontSize: 12,


    },

    paymentInvoiceInvoicecardInnerText: {
        fontSize: 10,
        fontWeight: '100',
    },

    paymentInvoiceprofiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },



    paymentInvoiceinnercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '50%',
        fontSize: 11
    },
    paymentInvoiceinnercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 11
    },
    paymentInvoicehorisontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#909090',

    },

    paymentInvoiceiconwrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',


    },


    paymentInvoiceinnercardText3: {
        flexDirection: 'row',
        alignItems: 'flex-start',

        fontSize: 11,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '500'

    },
    paymentInvoiceinnercardText4: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

        fontSize: 11,
        textAlign: 'right',
        fontSize: 20,
        fontWeight: '500'
    },


    ////////////////////
    PaymentOuterStyle: {
        padding: 8,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
        marginTop: 5,

        backgroundColor: '#ffffff',
        elevation: 5,
        borderRadius: 7,
    },
    PaymentInnerItemwrap1: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',

    },

    PaymentRowItem: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',


    },
    PaymentItemOuter1: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '40%',
    },
    PaymentItemOuter2: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        width: '20%',
    },
    PaymentRowItem1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',

    },


    PaymentInvoiceinnercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '50%',
        fontSize: 11
    },
    PaymentInvoiceinnercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 11
    },
    PaymentInvoicehorisontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#909090',

    },

    PaymentInvoiceiconwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',


    },

    PaymentInnerItemwrap2: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },




    PaymentbtnImg: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 40,
        height: 40,
        marginTop: '5%',
        marginRight: '20%'
    },

    PaymentinnercardText3: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '500'

    },
    PaymentinnercardText4: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        textAlign: 'right',

    },

});