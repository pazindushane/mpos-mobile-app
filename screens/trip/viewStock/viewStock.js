import React, { useRef, useEffect, useState } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Animated,
    TouchableOpacity,
    FlatList,
    RefreshControl
} from 'react-native';
import { BANNER_H } from '../../constants';

import Header from '../../../components/Header';
import ComponentButton from '../../../components/ComponentButton';

import { datasourceM } from '../../../endpoints/LoadingEndpoint';

import RoutesEndpoint from '../../../endpoints/RoutesEndpoint';

import { CommonActions } from '@react-navigation/native';



// import { disablebtn } from '../../../endpoints/RoutesEndpoint';


const ViewStock = ({ route, navigation }) => {


    const [refreshing, setrefreshing] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    // const { item } = route.params;
    

    

    const scrollToTopAndRefresh = () =>{
        // flatlistref.scrollToOffset({ y: 0, animated: true });
        setrefreshing(true, doRefresh());
      }

      
    
     const doRefresh = () =>{
        console.log('dsds')
        getLoadings1()
        setTimeout(() => setrefreshing(false), 1);
      }
    
      const fetchData = () => {
        getLoadings1()
        setIsFetching(false);
      };
      
      const onRefresh = () => {
        setIsFetching(true);
        fetchData();
      };
    
      var flatlistref = null;
     

      const activebtn = () =>{
        
        navigation.navigate('Trip')
      }


    const scrollA = useRef(new Animated.Value(0)).current;



    const onDoublePress = () => {
        const time = new Date().getTime();
        const delta = time - this.state.lastPress;

        const DOUBLE_PRESS_DELAY = 400;
        if (delta < DOUBLE_PRESS_DELAY) {
            // Success double press
            console.log('double press');

        }
        this.state.lastPress = time;
    };

    return (
        <Fragment >

            <Header navigation={navigation} tittle="View Stock" />

            <Animated.ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollA } } }],
                    { useNativeDriver: true },
                )}
                scrollEventThrottle={16}
            >

                <Animated.View
                    style={styles.safeAreaContainer(scrollA)}>


                    <ComponentButton
                        buttonTitle="Verify Stock"
                        onPress={() => activebtn()}
                        imgeLocation={require('../../../assets/icon/shelf.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />




                </Animated.View>
                <FlatList
                            ref={(ref) => flatlistref = ref} 
                            data={datasourceM}
                            onRefresh={onRefresh}
                                refreshing={isFetching}
                                progressViewOffset={10}
                            renderItem={({ item }) =>
                <View style={styles.detailsCardOuter}>


                    <View style={[styles.cardOuterStyle,]}>
                        <TouchableOpacity onPress={() => {
                            onDoublePress();
                        }}>

                            <View style={styles.cardInnerStyle}>

                                <View style={styles.innercard1}>
                                    <Text style={{ paddingBottom: 5, fontSize: 13, fontWeight: '500' }}>{item.item.brand.brandID}</Text>
                                    <View style={styles.profiledetailsInnerwrap}>

                                        <Text style={styles.innercardText1}>Total Items </Text>

                                        <Text style={styles.innercardText2}>:</Text>

                                    </View>
                                    <View style={styles.profiledetailsInnerwrap}>

                                        <Text style={styles.innercardText1}>Invoice Amt </Text>

                                        <Text style={styles.innercardText2}>:</Text>


                                    </View>
                                    <View style={styles.profiledetailsInnerwrap}>

                                        <Text style={styles.innercardText1}>Discount</Text>

                                        <Text style={styles.innercardText2}>:</Text>


                                    </View>
                                    <View style={styles.profiledetailsInnerwrap}>

                                        <Text style={styles.innercardText1}>Final Amt</Text>

                                        <Text style={styles.innercardText2}>:</Text>


                                    </View>

                                </View>
                                <View style={styles.verticleLine}></View>
                                <View style={styles.innercard2}>

                                    <View style={styles.iconwrap}>
                                        {/* <TouchableOpacity onPress={() => navigation.navigate('ReturnBatch')}> */}
                                        <View style={styles.btnIconWrapper}>

                                        </View>
                                        <Text style={styles.iconText1}> 99999</Text>
                                        {/* </TouchableOpacity > */}
                                    </View>

                                </View>
                            </View>
                        </TouchableOpacity>





                    </View>


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

        </Fragment>
    );

}
export default ViewStock;

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
        backgroundColor: '#ffffff',
        elevation: 5,
        borderRadius: 7,
        marginTop: 5,
    },
    cardInnerStyle: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innercard1: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%'

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
        fontSize: 12
    },
    innercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 12
    },
    verticleLine: {
        height: '90%',
        width: 1,
        backgroundColor: '#909090',

    },
    innercard2: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'space-around',
        width: '30%',
        fontSize: 12,
        alignSelf: 'center',

    },
    iconwrap: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    btnIconWrapper: {
        alignSelf: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        marginTop: 10,
    },
    btnImages: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 40,
        height: 40,
        color: 'black'
    },
    iconText1: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 15
    },

    cardInnerText: {
        fontSize: 10,
        fontWeight: '100',
    },



});