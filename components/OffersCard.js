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
                style={styles.offersInvoicecardOuterStyle}>
                <Text style={{ paddingBottom: 5, fontSize: 18, fontWeight: '400' }}>Maliban Chocelete Mary 80g</Text>

                <View style={styles.offersInvoicecardInnerStyle}>
                    <View style={styles.offersInvoiceinnercard1}>
                        <View style={styles.offersInvoiceprofiledetailsOuterwrap}>

                            <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                            </View>
                            <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                            </View>
                            <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                            </View>
                            <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                            </View>
                        </View>
                        <View style={styles.offersInvoiceprofiledetailsInnerwrap2}>


                            <View style={styles.offersInvoiceiconwrap}>

                                <Image source={require('../assets/icon/plus.png')} style={styles.btnImg} />
                            </View>
                        </View>

                    </View>

                </View>

                <View style={styles.offersInvoicehorisontalLine}></View>
                <View style={styles.offersInvoicecardInnerStyle2}>
                    <Text style={styles.offersInvoiceinnercardText3}>Rs.</Text>
                    <Text style={styles.offersInvoiceinnercardText4}>9000000.00</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({



    offersInvoicecardOuterStyle: {
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
    offersInvoicecardOuterStyle2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    offersInvoicecardInnerStyle: {

        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    offersInvoicecardInnerStyle2: {
        width: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    offersInvoiceinnercard1: {
        display: 'flex',
        flexDirection: 'row',
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
    offersInvoiceprofiledetailsOuterwrap: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '80%',
    },
    offersInvoiceprofiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    offersInvoiceprofiledetailsInnerwrap1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // borderWidth: .5,
        // borderColor: '#000',

    },
    offersInvoiceprofiledetailsInnerwrap2: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',

    },

    offersInvoiceinnercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '45%',
        fontSize: 12
    },
    offersInvoiceinnercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '45%',
        fontSize: 12
    },
    offersInvoicehorisontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#909090',

    },

    offersInvoiceiconwrap: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        // paddingBottom: 10,
        paddingRight: 10,
    },
    offersInvoiceinnercardText3: {
        flexDirection: 'row',
        alignItems: 'flex-start',

        fontSize: 12,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '500'

    },
    offersInvoiceinnercardText4: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

        fontSize: 12,
        textAlign: 'right',
        fontSize: 20,
        fontWeight: '500'
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