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


export default function TransactionCard({ navigation,screenName }) {
    return (
      <View
      style={styles.cardOuterStyle}>
      <Text style={{ paddingBottom:5,fontSize: 20, fontWeight: '500' }}>Current Invoice</Text>


      <View style={styles.cardInnerStyle}>
        <View style={styles.innercard1}>

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

        <View style={styles.innercard1}>

          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>Total Qty </Text>

            <Text style={styles.innercardText2}> :500 </Text>


          </View>
          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>    </Text>

            <Text style={styles.innercardText2}>  5000</Text>


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

      marginTop: 5,
      marginBottom: 10,
   
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
      width: '50%'
  
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
      fontSize:12
    },
    innercardText2: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      width: '50%',
      fontSize:12
    },
  });