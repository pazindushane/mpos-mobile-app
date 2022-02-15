import React, { useRef } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { BANNER_H } from '../constants';


import OffersCard from '../../components/OffersCard';
import Header from '../../components/Header';
import ComponentButton from '../../components/ComponentButton';



const Promo = ({ navigation }) => {



    const scrollA = useRef(new Animated.Value(0)).current;



    chnagedIcon = () => {
        console.log('heeeh')
        this.setState({ name: 'list-alt' });
    };
    // hide show modal
    displayModal = (show) => {
        this.setState({ isVisible: show })
    }

    return (
        <Fragment>

            <Header navigation={navigation} tittle="Promo" />


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
                        onPress={() => navigation.navigate('Promos')}
                        imgeLocation={require('../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />
                  
                    <View>
                        <View
                            style={styles.promoOuterStyle}>

                            <View style={styles.promoInnerItemwrap1}>
                                <View style={styles.promoRowItem}>


                                    <View style={styles.promoItemOuter1}>

                                        <Text style={{ fontSize: 13, fontWeight: '500' }}>Maliban Chocelete Mary 80g</Text>

                                        <View style={styles.promoRowItem1}>

                                            <Text style={styles.promoInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.promoInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.promoRowItem1}>

                                            <Text style={styles.promoInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.promoInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>
                                    <View style={styles.promoItemOuter2}>


                                        <View style={styles.promoInvoiceiconwrap}>

                                            <Image source={require('../../assets/icon/price-tag1.png')} style={styles.btnImg} />
                                        </View>


                                    </View>


                                </View>


                            </View>
                            <View style={styles.promoRowItem}>


                                <View style={styles.promoRowItem1}>


                                    <View style={styles.promoRowItem1}>

                                        <Text style={styles.promoInvoiceinnercardText1}>Qty Invoice</Text>

                                        <Text style={styles.promoInvoiceinnercardText2}>:9000000</Text>


                                    </View>
                                    <View style={styles.promoRowItem1}>

                                        <Text style={styles.promoInvoiceinnercardText1}>Batch Number</Text>

                                        <Text style={styles.promoInvoiceinnercardText2}>:B001</Text>

                                    </View>
                                    <View style={styles.promoRowItem1}>

                                        <Text style={styles.promoInvoiceinnercardText1}>Qty Invoice</Text>

                                        <Text style={styles.promoInvoiceinnercardText2}>:9000000</Text>


                                    </View>
                                </View>
                                <View style={styles.promoItemOuter2}>




                                    <View style={styles.promoRowItem1}>

                                        <Text style={styles.promoInvoiceinnercardText1}>Batch Number</Text>

                                        <Text style={styles.promoInvoiceinnercardText2}>:B001</Text>

                                    </View>
                                    <View style={styles.promoRowItem1}>

                                        <Text style={styles.promoInvoiceinnercardText1}>Qty Invoice</Text>

                                        <Text style={styles.promoInvoiceinnercardText2}>:9000000</Text>


                                    </View>
                                    <View style={styles.promoRowItem1}>

                                        <Text style={styles.promoInvoiceinnercardText1}>Qty Invoice</Text>

                                        <Text style={styles.promoInvoiceinnercardText2}>:9000000</Text>


                                    </View>
                                </View>



                            </View>


                            <View style={styles.promoInnerItemwrap1}>
                                <Text style={styles.innercardText3}>Total Saving       :</Text>
                                <Text style={styles.innercardText4}>9000000.00</Text>
                            </View>

                            <View style={styles.promoInvoicehorisontalLine}></View>

                            <View style={styles.promoInnerItemwrap1}>
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


                    <ComponentButton
                        buttonTitle="Add Promo"
                        onPress={() => navigation.navigate('Promos')}
                        imgeLocation={require('../../assets/icon/badge.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />



                </Animated.View>
                <View style={styles.detailsCardOuter}>



                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>
                    <OffersCard></OffersCard>

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
export default Promo;
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
        flex: 1,
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
   
    btnImages: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10,
        width: 40,
        height: 40,
    },

    ////////////////////////////offersInvoice
    promoOuterStyle: {
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

    promoInnerItemwrap1: {
        width: '100%',
        display: 'flex',

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    promoRowItem: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',


    },

    promoItemOuter1: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '60%',
    },
    promoItemOuter2: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        width: '50%',
    },


    promoRowItem1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',

    },
    promoInvoiceiconwrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',


    },
    promoInvoicehorisontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#909090',

    },

    promoInvoiceinnercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '50%',
        fontSize: 11
    },
    promoInvoiceinnercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 11
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
    btnImg: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 40,
        height: 40,
        marginTop: '5%',
        marginRight: '20%'
    },

 
   
});
