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
import Header from '../../components/Header';



const Offers = ({ navigation }) => {

    const scrollA = useRef(new Animated.Value(0)).current;




    return (
        <Fragment>
            <Header navigation={navigation} tittle="Offers" />


            <Animated.ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollA } } }],
                    { useNativeDriver: true },
                )}
                scrollEventThrottle={16}
            >
                <Animated.View
                    style={styles.safeAreaContainer(scrollA)}>


                    <View
                        style={styles.paymentbtn}>
                        <Image source={require('../../assets/icon/checkbox.png')} style={styles.btnIcon} />
                        <Text style={{ fontSize: 20, fontWeight: '300', marginLeft: 15, color: 'black' }}>
                            Done
                        </Text>
                    </View>



                    <View>
                        <View
                            style={styles.offersOuterStyle}>

                            <View style={styles.offerInnerItemwrap1}>
                                <View style={styles.offersRowItem}>


                                    <View style={styles.offersItemOuter1}>

                                        <Text style={{ fontSize: 13, fontWeight: '500' }}>Maliban Chocelete Mary 80g</Text>

                                        <View style={styles.offersRowItem1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.offersRowItem1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>
                                    <View style={styles.offersItemOuter2}>


                                        <View style={styles.offersInvoiceiconwrap}>

                                            <Image source={require('../../assets/icon/add1.png')} style={styles.btnImg} />
                                        </View>


                                    </View>


                                </View>


                            </View>
                            <View style={styles.offersRowItem}>


                                <View style={styles.offersItemOuter1}>


                                    <View style={styles.offersRowItem1}>

                                        <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                        <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                    </View>
                                    <View style={styles.offersRowItem1}>

                                        <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                        <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                    </View>
                                    <View style={styles.offersRowItem1}>

                                        <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                        <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                    </View>
                                </View>
                                <View style={styles.offersItemOuter2}>




                                    <View style={styles.offersRowItem1}>

                                        <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                        <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                    </View>
                                    <View style={styles.offersRowItem1}>

                                        <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                        <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                    </View>
                                    <View style={styles.offersRowItem1}>

                                        <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                        <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                    </View>
                                </View>



                            </View>


                            <View style={styles.offerInnerItemwrap1}>
                                <Text style={styles.innercardText3}>Total Saving       :</Text>
                                <Text style={styles.innercardText4}>9000000.00</Text>
                            </View>

                            <View style={styles.offersInvoicehorisontalLine}></View>

                            <View style={styles.offerInnerItemwrap1}>
                                <Text style={styles.innercardText3, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>Rs.</Text>
                                <Text style={styles.innercardText4, {
                                    fontSize: 18,
                                    fontWeight: '500'
                                }}>9000000.00</Text>
                            </View>
                        </View>

                    </View>


                    <View style={styles.btnOuter}>

                        <View style={styles.btninnerItem}>
                            <TouchableOpacity onPress={() => navigation.navigate('OffersPrice')}>
                                <View style={styles.btnIconWrapper}>
                                    <Image source={require('../../assets/icon/dollar-sign1.png')} style={styles.btnImages} />
                                </View>
                                <Text style={styles.btnTextWrapper}>

                                    Price

                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btninnerItem}>
                            <TouchableOpacity onPress={() => navigation.navigate('OffersRate')}>
                                <View style={styles.btnIconWrapper}>
                                    <Image source={require('../../assets/icon/price-tag.png')} style={styles.btnImages} />

                                </View>
                                <Text style={styles.btnTextWrapper}>
                                    Rate
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.btninnerItem}>
                            <TouchableOpacity onPress={() => navigation.navigate('OffersFreetemSame')}>
                                <View style={styles.btnIconWrapper}>
                                    <Image source={require('../../assets/icon/add1.png')} style={styles.btnImages} />
                                </View>

                                <Text style={styles.btnTextWrapper}>
                                    Free: Same
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.btninnerItem}>
                            <TouchableOpacity onPress={() => navigation.navigate('OffersFreeItemDiff')}>
                                <View style={styles.btnIconWrapper}>
                                    <Image source={require('../../assets/icon/add1.png')} style={styles.btnImages} />
                                </View>
                                <Text style={styles.btnTextWrapper}>
                                    Free: Diff
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>



                </Animated.View>
                <View style={styles.detailsCardOuter}>



                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>

                </View>
            </Animated.ScrollView>

        </Fragment >
    );

}
export default Offers;
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
        padding: 10,
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



    cardInnerImage: {
        width: 95.27,
        height: 96.81,
        marginLeft: 10,
        flex: 1,
        shadowOpacity: 20,
        shadowColor: 'black',
        borderRadius: 7,

    },


    cardInnerText: {
        fontSize: 10,
        fontWeight: '100',
    },

    paymentbtn: {
        width: '100%',
        height: 50,

        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 7,
        marginBottom: 5,


    },
    btnIcon: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        // backgroundColor: 'red',

    },










    ////////////Item visible card
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
        paddingLeft: 2,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        fontSize: 9
    },
    btnTextWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        // paddingLeft: 2,
        // paddingRight: 6,
        paddingBottom: 2,

    },
    btnImg: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',

        width: 40,
        height: 40,
    },
    btnImages: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10,
        width: 40,
        height: 40,
    },

    ////////////////////////////offersInvoice
    offersOuterStyle: {
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


    offerInnerItemwrap2: {
        width: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    offersRowItem: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',


    },

    offersItemOuter1: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '60%',
    },
    offersItemOuter2: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        width: '50%',
    },
    offersRowItem1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',

    },



    offersInvoiceinnercard2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        width: '58%',
        fontSize: 12,


    },

    offersInvoicecardInnerText: {
        fontSize: 10,
        fontWeight: '100',
    },

    offersInvoiceprofiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },



    offersInvoiceinnercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '50%',
        fontSize: 11
    },
    offersInvoiceinnercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 11
    },
    offersInvoicehorisontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#909090',

    },

    offersInvoiceiconwrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',


    },
    btnImg: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 40,
        height: 40,
        marginTop: '5%',
        marginRight: '20%'
    },

    offersInvoiceinnercardText3: {
        flexDirection: 'row',
        alignItems: 'flex-start',

        fontSize: 11,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '500'

    },
    offersInvoiceinnercardText4: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

        fontSize: 11,
        textAlign: 'right',
        fontSize: 20,
        fontWeight: '500'
    },
    cardInnerStyle: {

        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    innercard1: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',


    },
    innercard2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        width: '50%',
        fontSize: 12,


    },
    profiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    innercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
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

    profiledetailsInnerwrap1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // borderWidth: .5,
        // borderColor: '#000',

    },
    profiledetailsOuterwrap: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '50%',
    },
    offerInnerItemwrap1: {
        width: '100%',
        display: 'flex',

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innercardText3: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'left',


    },
    innercardText4: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        textAlign: 'right',

    },
});
