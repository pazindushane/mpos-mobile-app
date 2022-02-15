import React, { useRef, useEffect, useState } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Animated,
    Text,
    FlatList,
    RefreshControl
} from 'react-native';

import { BANNER_H } from '../constants';



import Header from '../../components/Header';
import ComponentButton from '../../components/ComponentButton';
import Searchbar from '../../components/SearchBar';

import { datasource2, getCustomers } from '../../endpoints/CustomersEndpoint';



const SelectCustomer = ({ navigation }) => {

    const [refreshing, setrefreshing] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        // Update the document title using the browser API
        console.log("findoutletScreen");
        fetchData()
        // scrollToTopAndRefresh
      });

  const scrollToTopAndRefresh = () =>{
    // flatlistref.scrollToOffset({ y: 0, animated: true });
    setrefreshing(true, doRefresh());
  }

 const doRefresh = () =>{
    console.log('dsds')
    getCustomers()
    setTimeout(() => setrefreshing(false), 1);
  }

  const fetchData = () => {
    getCustomers()
    setIsFetching(false);
  };
  
  const onRefresh = () => {
    setIsFetching(true);
    fetchData();
  };

  var flatlistref = null;




    const scrollA = useRef(new Animated.Value(0)).current;



    return (
        <Fragment>

            <Header navigation={navigation} tittle="Select Customer" />


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
                        buttonTitle="Add New"
                        onPress={() => navigation.navigate('AddNewCustomer')}
                        imgeLocation={require('../../assets/icon/add-user2.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />



                </Animated.View>
                <FlatList
                            ref={(ref) => flatlistref = ref} 
                            data={datasource2}
                            onRefresh={onRefresh}
                                refreshing={isFetching}
                                progressViewOffset={10}
                            renderItem={({ item }) =>
                <View style={styles.detailsCardOuter}>
                    <TouchableOpacity onPress={() => navigation.navigate('CustomerDashBoard', { item })} >
                        <View style={styles.customerDetailsCardMainOuter}>
                            <Text style={styles.customerName}>{item.customerName}</Text>
                            <View style={styles.customerDetailsOuterRowItem}>
                                <View style={styles.customerDetailsInnerRowItem1}>
                                    <Text style={styles.customerDetailsText}>Mobile</Text>
                                    <Text style={styles.customerDetailsText}>{item.mobileNumber}</Text>

                                </View>
                                <View style={styles.customerDetailsInnerRowItem2}>
                                    <Text style={styles.customerDetailsText}>Land</Text>

                                    <Text style={styles.customerDetailsText}>{item.landPhoneNumber}</Text>
                                </View>
                            </View>
                            <View style={styles.customerDetailsOuterRowItem}>
                                <View style={styles.customerDetailsInnerRowItem1}>
                                    <Text style={styles.customerDetailsText}>NIC</Text>
                                    <Text style={styles.customerDetailsText}>{item.customerNic}</Text>

                                </View>
                                <View style={styles.customerDetailsInnerRowItem2}>
                                    <Text style={styles.customerDetailsText}>Mobile</Text>

                                    <Text style={styles.customerDetailsText}>{item.mobileNumber}</Text>
                                </View>
                            </View>

                            <Text style={styles.customerDetailsText}>Email: {item.email}</Text>


                            <Text style={styles.customerDetailsText}>City :  {item.city}</Text>


                            <Text style={styles.customerDetailsText}>Address : {item.address}</Text>

                        </View>


                    </TouchableOpacity>
                </View>
                }
                refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={doRefresh}
                    // onRefresh={onRefresh}
                    // refreshing={isFetching}
                    // progressViewOffset={10}
                />
                }
                keyExtractor={( item , index ) => index.toString()}
            />
            </Animated.ScrollView>



        </Fragment >
    );

}
export default SelectCustomer;
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

    detailsCardOuter: {
        backgroundColor: '#E4D9D9',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flex: 1
    },
    //////////////
    customerDetailsCardMainOuter: {
        padding: 8,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: '#ffffff',
        elevation: 5,
        borderRadius: 7,
    },
    customerName: {

        paddingTop: 5,
        fontSize: 18,
        fontWeight: '500'
    },
    customerDetailsOuterRowItem: {
        flexDirection: 'row',
        width: '100%',
    },
    customerDetailsInnerRowItem1: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'flex-start',
    },
    customerDetailsInnerRowItem2: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'flex-start',
    },
    customerDetailsText: {
        flexDirection: 'row',
        fontSize: 14,
    }





});
