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

import { BANNER_H } from '../../../../constants';

import Header from '../../../../../components/Header';
import ExcessInvoice from '../../../../../components/ExcessInvoice';


const Refund = ({ navigation }) => {

    const scrollA = useRef(new Animated.Value(0)).current;




    return (
        <Fragment>


            <Header navigation={navigation} tittle="Refund
" />


            <Animated.ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollA } } }],
                    { useNativeDriver: true },
                )}
                scrollEventThrottle={16}
            >
                <Animated.View
                    style={styles.safeAreaContainer(scrollA)}>


                    <TouchableOpacity onPress={() => {

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
                                        <TouchableOpacity onPress={() => navigation.navigate('ReturnBatch')}>
                                            <View style={styles.btnIconWrapper}>
                                                <Image source={require('../../../../../assets/icon/to-do-list.png')} style={styles.btnImages} />
                                            </View>
                                            <Text style={styles.iconText1}> 99999</Text>
                                        </TouchableOpacity >
                                    </View>

                                </View>
                            </View>

                        </View>


                    </TouchableOpacity>


                    <View style={styles.btnOuter}>

                        <View style={styles.btninnerItem}>
                            <TouchableOpacity onPress={() => navigation.navigate('RefundCash')}>
                                <View style={styles.btnIconWrapper}>
                                    <Image source={require('../../../../../assets/icon/cash-payment.png')} style={styles.btnImages} />
                                </View>
                                <Text style={styles.btnTextWrapper}>
                                    Cash
                                </Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.btninnerItem}>
                            <TouchableOpacity onPress={() => navigation.navigate('RefundItemForItem')}>
                                <View style={styles.btnIconWrapper}>
                                    <Image source={require('../../../../../assets/icon/exchanging.png')} style={styles.btnImages} />
                                </View>
                                <Text style={styles.btnTextWrapper}>
                                    Item for Item
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.btninnerItem}>
                            <TouchableOpacity onPress={() => navigation.navigate('RefundCash')}>
                                <View style={styles.btnIconWrapper}>
                                    <Image source={require('../../../../../assets/icon/piggy-bank1.png')} style={styles.btnImages} />
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
                            style={styles.InvoiceOuterStyle}>

                            <View style={styles.InvoiceInnerItemwrap}>
                                <View style={styles.InvoiceRowItem}>


                                    <View style={styles.InvoiceItemOuter1}>

                                        <Text style={{ fontSize: 13, fontWeight: '700', paddingBottom: 5 }}>Price Option 01</Text>

                                        <View style={styles.InvoiceRowItem1}>

                                            <Text style={styles.InvoiceInvoiceinnercardText1}>Unit Price. :Rs.</Text>

                                            <Text style={styles.InvoiceInvoiceinnercardText2}>10.00</Text>

                                        </View>

                                        <View style={styles.InvoiceRowItem1}>

                                            <Text style={styles.InvoiceInvoiceinnercardText1}>Outlet Amt.    :</Text>

                                            <Text style={styles.InvoiceInvoiceinnercardText2}>99999</Text>

                                        </View>
                                        <View style={styles.InvoiceRowItem1}>

                                            <Text style={styles.InvoiceInvoiceinnercardText1}>Last Date.   : </Text>

                                            <Text style={styles.InvoiceInvoiceinnercardText2}>2021/11/10</Text>

                                        </View>

                                        <View style={styles.InvoiceRowItem1}>

                                            <Text style={styles.InvoiceInvoiceinnercardText1}>Qty      :</Text>

                                            <Text style={styles.InvoiceInvoiceinnercardText2}>4000</Text>

                                        </View>
                                    </View>
                                    <View style={styles.InvoiceItemOuter2}>


                                        <View style={styles.Invoiceiconwrap}>

                                            <Image source={require('../../../../../assets/icon/cash-payment.png')} style={styles.btnImg} />
                                        </View>


                                    </View>


                                </View>


                            </View>



                            <View style={styles.InvoicehorisontalLine}></View>

                            <View style={styles.InvoiceInnerItemwrap}>
                                <Text style={styles.InvoiceInvoiceinnercardText3, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>Rs.</Text>
                                <Text style={styles.InvoiceInvoiceinnercardText3, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>9000000.00</Text>
                            </View>
                        </View>
                        <View
                            style={styles.InvoiceOuterStyle}>

                            <View style={styles.InvoiceInnerItemwrap}>
                                <View style={styles.InvoiceRowItem}>


                                    <View style={styles.InvoiceItemOuter1}>

                                        <Text style={{ fontSize: 13, fontWeight: '700', paddingBottom: 5 }}>Price Option 01</Text>

                                        <View style={styles.InvoiceRowItem1}>

                                            <Text style={styles.InvoiceInvoiceinnercardText1}>Unit Price. :Rs.</Text>

                                            <Text style={styles.InvoiceInvoiceinnercardText2}>10.00</Text>

                                        </View>

                                        <View style={styles.InvoiceRowItem1}>

                                            <Text style={styles.InvoiceInvoiceinnercardText1}>Outlet Amt.    :</Text>

                                            <Text style={styles.InvoiceInvoiceinnercardText2}>99999</Text>

                                        </View>
                                        <View style={styles.InvoiceRowItem1}>

                                            <Text style={styles.InvoiceInvoiceinnercardText1}>Last Date.   : </Text>

                                            <Text style={styles.InvoiceInvoiceinnercardText2}>2021/11/10</Text>

                                        </View>

                                        <View style={styles.InvoiceRowItem1}>

                                            <Text style={styles.InvoiceInvoiceinnercardText1}>Qty      :</Text>

                                            <Text style={styles.InvoiceInvoiceinnercardText2}>4000</Text>

                                        </View>
                                    </View>
                                    <View style={styles.InvoiceItemOuter2}>


                                        <View style={styles.Invoiceiconwrap}>

                                            <Image source={require('../../../../../assets/icon/piggy-bank1.png')} style={styles.btnImg} />
                                        </View>


                                    </View>


                                </View>


                            </View>



                            <View style={styles.InvoicehorisontalLine}></View>

                            <View style={styles.InvoiceInnerItemwrap}>
                                <Text style={styles.InvoiceInvoiceinnercardText3, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>Rs.</Text>
                                <Text style={styles.InvoiceInvoiceinnercardText3, {
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
export default Refund;
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
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flex: 1,
        height: '100%'
    },

   
    /////////////////////////////
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
        marginTop: 5
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
    btnIconWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        marginTop: 10,


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


    btnImages: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 40,
        height: 40,
        color: 'black'
    },
    ////////////button
    btnOuter: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-around',
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
        fontSize: 18

    },
    btnImages: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 40,
        height: 40,
    },

    //////////////////////////
    InvoiceOuterStyle: {
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
    InvoiceInnerItemwrap: {
        width: '100%',
        display: 'flex',
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    InvoiceRowItem: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',

    },
    InvoiceItemOuter1: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '90%',
    },
    InvoiceItemOuter2: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        width: '5%',
    },
    InvoiceRowItem1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',

    },

    InvoiceInvoiceinnercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '50%',
        fontSize: 11
    },
    InvoiceInvoiceinnercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 11
    },
    Invoiceiconwrap: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingBottom: 5,

    },
    InvoicehorisontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#909090',

    },

    btnImg: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',

        width: 40,
        height: 40,
    },
});
