import React, { useRef, useEffect, useState  } from 'react';
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

import { BANNER_H } from '../../constants';



import Header from '../../../components/Header';

import Searchbar from '../../../components/SearchBar';

import { datasource3, getRoutes1 } from '../../../endpoints/RoutesEndpoint';



const SelectCustomer = ({ route, navigation }) => {

    const [refreshing, setrefreshing] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        // Update the document title using the browser API
        console.log("findoutletScreen");
        fetchData()
      });

      const scrollToTopAndRefresh = () =>{
        // flatlistref.scrollToOffset({ y: 0, animated: true });
        setrefreshing(true, doRefresh());
      }
    
     const doRefresh = () =>{
        console.log('dsds')
        getRoutes1()
        setTimeout(() => setrefreshing(false), 1);
      }
    
      const fetchData = () => {
        getRoutes1()
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

            <Header navigation={navigation} tittle="Select Route" />


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



                </Animated.View>
                <FlatList
                            ref={(ref) => flatlistref = ref} 
                            data={datasource3}
                            onRefresh={onRefresh}
                                refreshing={isFetching}
                                progressViewOffset={10}
                            renderItem={({ item }) =>
                <View style={styles.detailsCardOuter}>
                    <TouchableOpacity onPress={() => navigation.navigate('RouteDashBoard', { item })} >
                        <View style={styles.customerDetailsCardMainOuter}>
                            <Text style={styles.customerName}>Route Name : {item.routeName}</Text>


                            <Text style={styles.customerDetailsText}>Start City : {item.startCity}</Text>


                            <Text style={styles.customerDetailsText}>End City :  {item.endCity}</Text>


                            <Text style={styles.customerDetailsText}>Route Description : {item.routeDescription}</Text>

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
    //////////////////
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