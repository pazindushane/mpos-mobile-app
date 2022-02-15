import React, { Component } from 'react';
import { Fragment } from 'react';
import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { StyleSheet, View, Text, Image } from 'react-native';
import ComponentButton from '../../components/ComponentButton';
import { getoutlets, getout, getData1 } from '../../endpoints/Outlets'
import { getCustomers } from '../../endpoints/CustomersEndpoint'
import { getRoutes1 } from '../../endpoints/RoutesEndpoint';
import { getLoadings1 } from '../../endpoints/LoadingEndpoint';


export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []

    }

  }

  handleLoginPress = ()=>{
    getData1()
    this.props.navigation.navigate('FindOutletScreen1');
}

handleCustomer = ()=>{
  getCustomers()
  this.props.navigation.navigate('SelectCustomer');
}

handleRoutes = ()=>{
  getRoutes1()
  this.props.navigation.navigate('SelectingRoute');
}

handleLoadings = ()=>{
  getLoadings1()
  this.props.navigation.navigate('Trip')
}


  render() {
    // var companyId = this.props.route.params.companyId
    // var token = this.props.route.params.token
    // console.log(companyId);
    // console.log(token);
    return (
      
      <Fragment>
        <View
          style={styles.header}>
          <View style={styles.btnContainer}>
          </View>
          <Text
            style={styles.headerText}>
            Home
          </Text>

          <View style={styles.profileBtnIcon}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileScreen')}>
              <Image source={require('../../assets/photo.jpg')} style={styles.profileImg} />
            </TouchableOpacity>
          </View>
        </View>

        <SafeAreaView
          style={styles.safeAreaContainer}>
          <ScrollView>
            <View
              style={styles.detailsCardRowStyle}>
              <View
                style={styles.cardOuterStyle}>
                <TouchableOpacity onPress={() => this.handleLoginPress()}>
                  <View>
                    <Image source={require('../../assets/icon/credit-card.png')} style={styles.btnIcon} />
                    <Text
                      style={styles.cardInnerText}>
                      Outlets
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={styles.cardOuterStyle}>
                <TouchableOpacity onPress={() => this.handleLoadings()}>
                  <Image source={require('../../assets/icon/baseline_alt_route_black_24dp.png')} style={styles.btnIcon} />
                  <Text
                    style={styles.cardInnerText}>
                    Trip
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
            <View
              style={styles.detailsCardRowStyle}>
              <View
                style={styles.cardOuterStyle}>
                <TouchableOpacity onPress={() => this.handleRoutes()}>
                  <View>
                    <Image source={require('../../assets/icon/route(1).png')} style={styles.btnIcon} />
                    <Text
                      style={styles.cardInnerText}>
                      Routes
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={styles.cardOuterStyle}>
                <TouchableOpacity onPress={() => this.handleCustomer()}>
                  <Image source={require('../../assets/icon/add-user1.png')} style={styles.btnIcon} />
                  <Text
                    style={styles.cardInnerText}>
                    Customers
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles.requestBtn}>
              <ComponentButton

                buttonTitle="Requests"
                onPress={() => navigation.navigate('Item')}
                imgeLocation={require('../../assets/icon/email.png')}
                buttonColor={'white'}
                fontColor={'black'}

              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',

  },
  header: {
    height: 50,
    backgroundColor: '#3F50B4',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',

  },
  headerText: {
    flex: 1,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileBtnIcon: {

    alignItems: 'flex-end',

  },
  headerBtnContainer: {
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: 'row',
    height: 'auto',
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    // paddingTop: 1,
    // paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 5,
    justifyContent: 'space-between'
  },

  profileImg: {
    borderRadius: 5,
    width: 39,
    height: 39,
    borderWidth: 1,
    borderColor: 'white',
  },


  detailsCardRowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 5,
    paddingTop: 5,
  },
  cardOuterStyle: {
    width: '48%',
    height: 120,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowOpacity: 20,
    shadowColor: 'black',
    borderRadius: 7,
  },
  btnIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  btnIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,


  },

  cardInnerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '400',
    alignSelf: 'center',
    color: 'black'
  },
  btnContainer: {
    width: 40

  },
  requestBtn:{
    paddingLeft:5,
    paddingRight:5,
  }


});