import React, { useRef, useState } from 'react';
import { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
  FlatList, 
  RefreshControl

} from 'react-native';
import { BANNER_H } from '../../constants';


import DetailsCard from '../../../components/DetailsCard';
import Searchbar from '../../../components/SearchBar';
import Header from '../../../components/Header';
import ComponentButton from '../../../components/ComponentButton';

import { datasource4 } from '../../../endpoints/RoutesEndpoint';


const SelectOutletINRoute = ({ navigation }) => {

  const [refreshing, setrefreshing] = useState(false);

  const scrollToTopAndRefresh = () =>{
    flatlistref.scrollToOffset({ y: 0, animated: true });
    setrefreshing(true, doRefresh);
  }

 const doRefresh = () =>{
    console.log('dsds')
    getoutlets()
    setTimeout(() => setrefreshing(false), 1000);
  }

  var flatlistref = null;

  const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <Fragment>

      <Header navigation={navigation} tittle="Outlet List" />

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollA } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
      >
        <Animated.View
          style={styles.safeAreaContainer(scrollA)}>


          <Searchbar />





          <ComponentButton
            buttonTitle="Add new"
            onPress={() => navigation.navigate('AddOutletForRoute')}
            imgeLocation={require('../../../assets/icon/barter.png')}
            buttonColor={'white'}
            fontColor={'black'}
          />



        </Animated.View>
        <View style={styles.detailsCardOuter}>

          <ScrollView>
          <FlatList
    ref={(ref) => flatlistref = ref} 
    data={datasource4}
    renderItem={({ item }) =>
          <View
      style={styles.cardOuterStyle}>
      <Text style={{ paddingBottom: 5, fontSize: 20, fontWeight: '500' }}>{item.customerId}</Text>


      <View style={styles.cardInnerStyle}>
        <View style={styles.innercard1}>

          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>Customer Name</Text>

            <Text style={styles.innercardText2}>{item.customerName}</Text>

          </View>
          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>Outlet Address</Text>

            <Text style={styles.innercardText2}>{item.outletAddress}</Text>


          </View>
          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>Route </Text>

            <Text style={styles.innercardText2}>{item.routeId}</Text>


          </View>
          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>Outlet Id</Text>

            <Text style={styles.innercardText2}>{item.outletId}</Text>


          </View>

        </View>

        <View style={styles.innercard1}>

          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>Outlet Name</Text>

            <Text style={styles.innercardText2}>{item.outletName}</Text>


          </View>
          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>City</Text>

            <Text style={styles.innercardText2}>{item.city}</Text>


          </View>
          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>Type</Text>

            <Text style={styles.innercardText2}>{item.outletTypeId}</Text>


          </View>

        </View>
      </View>

    </View>
    }
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={doRefresh}
      />
    }
    keyExtractor={( item , index ) => index.toString()}
  />
           
          </ScrollView>
        </View>
      </Animated.ScrollView>


    </Fragment>
  );

}
export default SelectOutletINRoute;
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

  ///////////////////



  detailsCardOuter: {
    backgroundColor: '#E4D9D9',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    flex: 1
  },


  cardOuterStyle: {
    padding: 8,
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 10,
 
    // marginLeft: 10,
    // marginRight: 10,
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
    // padding: 8,
    width: '50%'

  },


  cardInnerText: {
    fontSize: 10,
    fontWeight: '100',
  },

  profiledetailsInnerwrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  innercardText1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'space-evenly',
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
