import React, { Component } from 'react';
import { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  useColorScheme
} from 'react-native';
import Header from '../../components/Header';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../config/Colors'

import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';

export class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  render() {
    return (
      <Fragment>
        <View
          style={styles.header}>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <AntDesign
                style={styles.icon}
                name="arrowleft"
                size={25}
                color="white"

              />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}> */}
            <FontAwesome
              name="home"
              size={25}
              color={colors.btndiablecolor}

            />
            {/* </TouchableOpacity> */}
          </View>
          <Text
            style={styles.headerText}>
            Profile
          </Text>

          <View style={styles.profileBtnIcon}>

          </View>
        </View>


        <SafeAreaView
          style={styles.safeAreaContainer}>


          <View
            style={styles.cardOuterStyle}>
            <View style={styles.ImageContainer}>
              <Image
                source={require('../../assets/photo.jpg')}
                resizeMode="cover"
                style={styles.cardInnerImage}
              />
            </View>
            <View style={styles.verticleLine}></View>
            <View style={styles.profileDetailsMainWrap}>

              <View style={styles.profiledetailsInnerwrap}>
                <Text style={styles.textDetailStyle}>Name </Text><Text style={{ fontSize: 14, flex: 2, }}>: shaleen thilanaka</Text>

              </View>
              <View style={styles.profiledetailsInnerwrap}>
                <Text  style={styles.textDetailStyle}>Address</Text><Text style={{ fontSize: 14, flex: 2, }}>: bogahawela,Uragasamahnadiya,galle</Text>

              </View>
              <View style={styles.profiledetailsInnerwrap}>
                <Text  style={styles.textDetailStyle}>Telephone</Text><Text style={{ fontSize: 14, flex: 2, }}>: 0770701163</Text>

              </View>
              <View style={styles.profiledetailsInnerwrap}>
                <Text  style={styles.textDetailStyle}>Start Date</Text><Text style={{ fontSize: 14, flex: 2, }}>: 2014-13-11</Text>

              </View>
              <View style={styles.profiledetailsInnerwrap}>
                <Text  style={styles.textDetailStyle}>Points</Text><Text style={{ fontSize: 14, flex: 2, }}>: 11</Text>

              </View>
            </View>


          </View>


        </SafeAreaView>
        <View style={styles.detailsCardOuter}>

          <ScrollView>

            <View
              style={styles.detailsCardRowStyle}>
              <View
                style={styles.halfCardOuterStyle}>
                <Octicons name="settings" size={50} />
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  Settings
                </Text>
              </View>
              <View style={{ padding: 10 }}
              />
              <View
                style={styles.halfCardOuterStyle}>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  Etc...
                </Text>
              </View>
            </View>


            <View
              style={styles.notificationCardOuter}>
              <FontAwesome name="bell-o" size={40} />
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5 }}>
                Notifications
              </Text>
            </View>
            <View
              style={styles.notificationCardOuter}>
              <FontAwesome name="bell-o" size={40} />
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5 }}>
                Notifications
              </Text>
            </View>
            <View
              style={styles.notificationCardOuter}>
              <FontAwesome name="bell-o" size={40} />
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5 }}>
                Notifications
              </Text>
            </View>
            <View
              style={styles.notificationCardOuter}>
              <FontAwesome name="bell-o" size={40} />
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 5 }}>
                Notifications
              </Text>
            </View>

            <View
              style={styles.logOutBtnOuter}>
              <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
                <View
                  style={styles.logOutBtnInner}>
                  <MaterialIcons name="logout" size={40} color="red" />

                  <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>
                    LogOut
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>


      </Fragment>
    );
  }
}
export default ProfileScreen;

const styles = StyleSheet.create({
  /////////////header
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


  ///////////////////

  verticleLine: {
    height: '90%',
    width: 1,
    backgroundColor: '#909090',
    marginLeft: 15,
  },

  safeAreaContainer: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#E5E5E5',
  },
  detailsCardOuter: {
    backgroundColor: '#E4D9D9',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
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


  cardOuterStyle: {
    width: '100%',
    height: 150,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',


    backgroundColor: '#ffffff',
    elevation: 5,
    borderRadius: 7,
  },
  ImageContainer: {

    width: '30%',
    height: '90%'

  },
  profileDetailsMainWrap: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 2,
    padding: 1,
    width: '70%',
  },

  textDetailStyle: { 
    fontSize: 12,
     flex: 1, 
     justifyContent:'flex-start',
     alignItems:'flex-start'
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

  },
  notificationCardOuter: {
    width: '100%',
    height: 80,
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
  logOutBtnOuter: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',

  },
  logOutBtnInner: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    elevation: 1,
    borderRadius: 7,
    width: '100%',
    height: 50,

  },

  profiledetailsInnerwrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
});
