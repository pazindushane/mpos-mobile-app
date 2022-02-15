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


export default function DetailsCardRed({ navigation, screenName }) {
    return (
        <View
            style={styles.cardOuterStyle}>
            <Text style={{ paddingBottom:5,fontSize: 20, fontWeight: '500' ,color:'white'}}>Sampth Teaders</Text>

            <View style={styles.cardInnerStyle}>
                <View style={styles.innercard1}>

                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Tele</Text>

                        <Text style={styles.innercardText2}>:0771234567</Text>

                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Customer</Text>

                        <Text style={styles.innercardText2}>:Saman</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Route </Text>

                        <Text style={styles.innercardText2}>:Galle-matar</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Address</Text>

                        <Text style={styles.innercardText2}>:@ kanuwa panadura </Text>


                    </View>

                </View>

                <View style={styles.innercard1}>

                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Route Index</Text>

                        <Text style={styles.innercardText2}> :23 </Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>City </Text>

                        <Text style={styles.innercardText2}> :Galle</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Type </Text>

                        <Text style={styles.innercardText2}> :VAT </Text>


                    </View>

                </View>
            </View>

        </View>



    );
}

const styles = StyleSheet.create({



    cardOuterStyle: {
        padding:8,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
  
        // marginLeft: 10,
        // marginRight: 10,
        backgroundColor: colors.red,
        color: 'white',
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
      width: '50%'
  
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

    innercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '50%',
        fontSize: 12,
        color:'white'
    },
    innercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 12,
        color:'white'
    },
  });