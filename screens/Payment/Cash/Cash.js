
import React, {useRef } from 'react';
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
import ComponentButton from '../../../components/ComponentButton';
import Header from '../../../components/Header';



const PaymentNow2 = ({ navigation }) => {

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
                        buttonTitle="Resolve Pay"
                        onPress={() => navigation.navigate('ExcessAmmount')}
                        imgeLocation={require('../../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />




                    <TouchableOpacity onPress={() => console.log("press")}>
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

                                            <Image source={require('../../../assets/icon/credit-card1.png')} style={styles.PaymentbtnImg} />
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



                    </TouchableOpacity>


                    
                </Animated.View>
                <View style={styles.detailsCardOuter}>

                    <View>
                    </View>
                </View>
            </Animated.ScrollView>

        </Fragment >
    );

}
export default PaymentNow2;
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
    detailsCardRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        marginLeft: 5,
        marginRight: 5,
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
        marginTop: 10,

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
