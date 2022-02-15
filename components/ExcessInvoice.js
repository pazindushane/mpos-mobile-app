import React from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-paper';

import { colors } from '../config/Colors'

export default function OffersCard() {
    return (
        <View>
            <View
                style={styles.InvoiceOuterStyle}>

                <View style={styles.InvoiceInnerItemwrap}>
                    <View style={styles.InvoiceRowItem}>


                        <View style={styles.InvoiceItemOuter1}>

                            <Text style={{ fontSize: 13, fontWeight: '500', paddingBottom: 5 }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.InvoiceRowItem1}>

                                <Text style={styles.InvoiceInvoiceinnercardText1}>Total Items :</Text>

                                <Text style={styles.InvoiceInvoiceinnercardText2}>B001</Text>

                            </View>

                            <View style={styles.InvoiceRowItem1}>

                                <Text style={styles.InvoiceInvoiceinnercardText1}>Total Qty     :</Text>

                                <Text style={styles.InvoiceInvoiceinnercardText2}>324</Text>

                            </View>
                        </View>
                        <View style={styles.InvoiceItemOuter2}>


                            <View style={styles.Invoiceiconwrap}>

                                <Image source={require('../assets/icon/invoice.png')} style={styles.btnImg} />
                            </View>


                        </View>


                    </View>


                </View>


                <View style={styles.InvoiceInnerItemwrap}>
                    <Text style={styles.InvoiceInvoiceinnercardText3}>Date Time   :</Text>
                    <Text style={styles.InvoiceInvoiceinnercardText4}>10:33:59 AM | Thu Nov 11 2021</Text>

                </View>
                <View style={styles.InvoiceInnerItemwrap}>
                    <Text style={styles.InvoiceInvoiceinnercardText3}>Invoice Amt  :</Text>
                    <Text style={styles.InvoiceInvoiceinnercardText4}>676.00</Text>
                </View>
                <View style={styles.InvoiceInnerItemwrap}>
                    <Text style={styles.InvoiceInvoiceinnercardText3}>Discount   :</Text>
                    <Text style={styles.InvoiceInvoiceinnercardText4}>90000.00</Text>

                </View>
                <View style={styles.InvoiceInnerItemwrap}>
                    <Text style={styles.InvoiceInvoiceinnercardText3}>Final Amt  :</Text>
                    <Text style={styles.InvoiceInvoiceinnercardText4}>90000.00</Text>

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

    );
}

const styles = StyleSheet.create({


    ////////////////////////////offersInvoice
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
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
        // marginTop: 10,
        width: 40,
        height: 40,
    },

});