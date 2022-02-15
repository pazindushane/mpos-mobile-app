import React, { useRef, useEffect } from 'react';
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

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import ComponentButton from '../../components/ComponentButton';

const OutletScreen = ({ route, navigation }) => {

  const { item, companyId, token } = route.params;

  // useEffect(() => {
  //       // Update the document title using the browser API
  //       console.log("outletScreen");
  //       console.log(companyId);
  //       console.log(token);
  //     });

  console.log(item);
  return (
    <Fragment >
      <Header navigation={navigation} tittle="Outlet" />



      <SafeAreaView
        style={styles.safeAreaContainer}>

        <View
          style={styles.cardOuterStyle}>
          <Text style={{ paddingBottom: 5, fontSize: 20, fontWeight: '500' }}>{item.outletName}</Text>


          <View style={styles.cardInnerStyle}>
            <View style={styles.innercard1}>

              <View style={styles.cardDetailsRowWrap}>

                <Text style={styles.innercardText1}>Tele</Text>

                <Text style={styles.innercardText2}>{item.outletContact1}</Text>

              </View>
              <View style={styles.cardDetailsRowWrap}>

                <Text style={styles.innercardText1}>Customer    </Text>

                <Text style={styles.innercardText2}>{item.customerId}</Text>


              </View>
              <View style={styles.cardDetailsRowWrap}>

                <Text style={styles.innercardText1}>Route </Text>

                <Text style={styles.innercardText2}>{item.routeId}</Text>


              </View>
              <View style={styles.cardDetailsRowWrap}>

                <Text style={styles.innercardText1}>Address </Text>

                <Text style={styles.innercardText2}>{item.outletAddress}</Text>


              </View>

            </View>

            <View style={styles.innercard1}>

              <View style={styles.cardDetailsRowWrap}>

                <Text style={styles.innercardText1}>Route Index </Text>

                <Text style={styles.innercardText2}>{item.routeIndex}</Text>


              </View>
              <View style={styles.cardDetailsRowWrap}>

                <Text style={styles.innercardText1}>City    </Text>

                <Text style={styles.innercardText2}>{item.city}</Text>


              </View>
              <View style={styles.cardDetailsRowWrap}>

                <Text style={styles.innercardText1}>Type </Text>

                <Text style={styles.innercardText2}>{item.outletTypeId}</Text>


              </View>

            </View>
          </View>

        </View>



      </SafeAreaView>
      <View style={styles.btnCardOuter}>

        <ScrollView>

          <View
            style={styles.detailsCardRowStyle}>


            <View
              style={styles.halfCardOuterStyle}>
              <TouchableOpacity onPress={() => navigation.navigate('Sale', { companyId, token })}>
                <Image source={require('../../assets/icon/dollar-sign.png')} style={styles.btnIcon} />
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: '400',
                    alignSelf: 'center',
                    color:'black'
                  }}>
                  Sale
                </Text>
              </TouchableOpacity>
            </View>


            <View style={{ padding: 10 }}
            >


            </View>
            <View
              style={styles.halfCardOuterStyle}>

              <TouchableOpacity onPress={() => navigation.navigate('PaymentOutlet')}>
                <Image source={require('../../assets/icon/bill1.png')} style={styles.btnIcon} />
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: '400',
                    alignSelf: 'center',
                    color:'black'
                  }}>
                  Payment
                </Text>
              </TouchableOpacity>

            </View>
          </View>


          <ComponentButton
            buttonTitle="Return"
            onPress={() => navigation.navigate('Return')}
            imgeLocation={require('../../assets/icon/barter.png')}
            buttonColor={'white'}
            fontColor={'black'}
          />
          <ComponentButton
            buttonTitle="Report"
            onPress={() => navigation.navigate('FindOutletScreen2')}
            imgeLocation={require('../../assets/icon/note.png')}
            buttonColor={'white'}
            fontColor={'black'}
          />








        </ScrollView>
      </View>


    </Fragment>
  );

}
export default OutletScreen;
const styles = StyleSheet.create({

  safeAreaContainer: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',

  },
  btnCardOuter: {
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
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 5,
    marginLeft: 5,

  },





  cardInnerText: {
    fontSize: 10,
    fontWeight: '100',
  },
  halfCardOuterStyle: {
    width: '50%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowOpacity: 20,
    shadowColor: 'black',
    borderRadius: 7,
    alignSelf: 'center'

  },
  btnIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,


  },
  fullBtnOuter: {
    width: '100%',
    height: 60,
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    elevation: 5,
    borderRadius: 7,

  },




  ///////////////////////////
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
  },
  cardInnerStyle: {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  innercard1: {
    display: 'flex',
    flexDirection: 'column',

    width: '50%'

  },


  cardInnerText: {
    fontSize: 10,
    fontWeight: '100',
  },

  cardDetailsRowWrap: {
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '50%',
    fontSize: 12
  },
});
