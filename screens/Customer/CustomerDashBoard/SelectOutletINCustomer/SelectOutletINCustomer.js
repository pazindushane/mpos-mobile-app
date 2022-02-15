import React, { useRef } from 'react';
import { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,

} from 'react-native';
import { BANNER_H } from '../../../constants';


import DetailsCard from '../../../../components/DetailsCard';
import Searchbar from '../../../../components/SearchBar';
import Header from '../../../../components/Header';
import ComponentButton from '../../../../components/ComponentButton';



const SelectOutletINCustomer = ({ navigation }) => {
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
            onPress={() => navigation.navigate('AddOutletForCustomer')}
            imgeLocation={require('../../../../assets/icon/barter.png')}
            buttonColor={'white'}
            fontColor={'black'}
          />



        </Animated.View>
        <View style={styles.detailsCardOuter}>

          <ScrollView>
            <DetailsCard />
            <DetailsCard />
            <DetailsCard />
            <DetailsCard />
            <DetailsCard />
           
          </ScrollView>
        </View>
      </Animated.ScrollView>


    </Fragment>
  );

}
export default SelectOutletINCustomer;
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

 



});
