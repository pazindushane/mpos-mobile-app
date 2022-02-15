import React from 'react';
import { Fragment, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList, 
  RefreshControl
} from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-paper';
import { getoutlets } from '../endpoints/Outlets'
import { datasource } from '../endpoints/Outlets';


export default function DetailsCard({ navigation, screenName }) {
  const [refreshing, setrefreshing] = useState(false);

  scrollToTopAndRefresh = () =>{
    flatlistref.scrollToOffset({ y: 0, animated: true });
    setrefreshing(true, doRefresh);
  }

 const doRefresh = () =>{
    console.log('dsds')
    getoutlets()
    setTimeout(() => setrefreshing(false), 1000);
  }

  var flatlistref = null;

  return (
    
    <FlatList
    ref={(ref) => flatlistref = ref} 
    data={datasource}
    renderItem={({ item }) =>
    <View
      style={styles.cardOuterStyle}>
      <Text style={{ paddingBottom: 5, fontSize: 20, fontWeight: '500' }}>{item.companyId}</Text>


      <View style={styles.cardInnerStyle}>
        <View style={styles.innercard1}>

          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>Tele</Text>

            <Text style={styles.innercardText2}>{item.outletContact[1]}</Text>

          </View>
          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>Customer</Text>

            <Text style={styles.innercardText2}>{item.customerId}</Text>


          </View>
          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>Route </Text>

            <Text style={styles.innercardText2}>{item.routeId}</Text>


          </View>
          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>Address</Text>

            <Text style={styles.innercardText2}>{item.outletAddress}</Text>


          </View>

        </View>

        <View style={styles.innercard1}>

          <View style={styles.profiledetailsInnerwrap}>

            <Text style={styles.innercardText1}>Route Index</Text>

            <Text style={styles.innercardText2}>{item.routeIndex}</Text>


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