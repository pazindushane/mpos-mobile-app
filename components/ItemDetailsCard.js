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

export default function ItemDeatilsCard({ navigation, screenName }) {
    return (
        <View
            style={styles.cardOuterStyle}>



            <View style={styles.cardInnerStyle}>

                <View style={styles.innercard1}>
                    <Text style={{ paddingBottom: 5, fontSize: 13, fontWeight: '500' }}>Maliban Chocolate Marie 80g</Text>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Total Items </Text>

                        <Text style={styles.innercardText2}>:0771234567 </Text>

                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Invoice Amt    </Text>

                        <Text style={styles.innercardText2}>:</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Discount </Text>

                        <Text style={styles.innercardText2}>:</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Final Amt  </Text>

                        <Text style={styles.innercardText2}>:</Text>


                    </View>

                </View>
                <View style={styles.verticleLine}></View>
                <View style={styles.innercard2}>


                    <View style={styles.iconwrap}>

                        <Image source={require('../assets/icon/to-do-list.png')} style={styles.btnImg} />

                        <Text style={{ alignSelf: 'center' }}> 50</Text>


                    </View>




                </View>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({



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
        height: '90%',
        width: 1,
        backgroundColor: '#909090',
        // marginLeft: 15,
    },
    innercard2: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'space-between',
        alignSelf: 'center',
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
        fontSize: 12
    },
    innercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 12
    },
});