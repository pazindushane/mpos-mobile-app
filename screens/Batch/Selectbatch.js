import React, { useRef, useState } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    FlatList,
    RefreshControl
} from 'react-native';


import { BANNER_H } from '../constants';
import ItemDetailsCard from '../../components/ItemDetailsCard';
import BatchDetailsCard from '../../components/BatchDetailsCard';
import Header from '../../components/Header';
import ComponentButton from '../../components/ComponentButton';




const SelectBatch = ({ navigation, route }) => {
    const scrollA = useRef(new Animated.Value(0)).current;

    const [refreshing, setrefreshing] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

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

    const { item } = route.params;

    const newfunc =()=>{
        console.log(item.item.brand.brandName);
    }

    var itms = item

    return (
        <Fragment>

            <Header navigation={navigation} tittle="batch" />

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
                        buttonTitle="Done"
                        onPress={() => newfunc()}
                        // onPress={() => navigation.navigate('Item')}
                        imgeLocation={require('../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />




<View
            style={styles.cardOuterStyle}>



            <View style={styles.cardInnerStyle}>

                <View style={styles.innercard1}>
                    <Text style={{ paddingBottom: 5, fontSize: 13, fontWeight: '500' }}>{item.item.brand.brandName} {item.item.itemName}</Text>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Total Items </Text>

                        <Text style={styles.innercardText2}>   : {item.item.itemQty} </Text>

                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Invoice Amt    </Text>

                        <Text style={styles.innercardText2}>   : {item.item.itemQty} </Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Discount </Text>

                        <Text style={styles.innercardText2}>   :</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Final Amt  </Text>

                        <Text style={styles.innercardText2}>   : {item.item.itemQty} </Text>


                    </View>

                </View>
                <View style={styles.verticleLine}></View>
                <View style={styles.innercard2}>


                    <View style={styles.iconwrap}>

                        <Image source={require('../../assets/icon/to-do-list.png')} style={styles.btnImg} />

                        <Text style={{ alignSelf: 'center' }}> 50</Text>


                    </View>




                </View>
            </View>

        </View>
                    </Animated.View>

                    

                <View style={styles.detailsCardOuter}>

                    <ScrollView>
                    <FlatList
                        ref={(ref) => flatlistref = ref} 
                        data={item.batchLists}
                        renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate('SelectBatchTwo', { item, itms })}>
                        <View style={styles.cardOuterStyle}>

               <View style={styles.cardInnerStyle}>

                <View style={styles.innercard1}>
                    <Text style={{ paddingBottom: 5, fontSize: 15, fontWeight: '500' }}>Batch Number :{item.batch.batchNumber}</Text>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText3}>Qty Stock</Text>

                        <Text style={styles.innercardText2}>:   {item.batchQty}</Text>

                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Mfd.Date</Text>

                        <Text style={styles.innercardText2}>:  {item.batch.madeDate}</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Exp.Date</Text>

                        <Text style={styles.innercardText2}>:  {item.batch.expireDate}</Text>


                    </View>

                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Std. Price  </Text>

                        <Text style={styles.innercardText2}>:  {item.batch.basePrice}</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText3}>Outlet Amt.</Text>

                        <Text style={styles.innercardText2}>:  {item.batch.quantityOnHand}</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Discount  </Text>

                        <Text style={styles.innercardText2}>:  {item.batch.basePrice}</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText3}>Final Amt.</Text>

                        <Text style={styles.innercardText2}>:  {item.batch.quantityOnHand}</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText3}>Promos</Text>

                        <Text style={styles.innercardText2}>:  {item.batch.quantityOnHand}</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText1}>Discount  </Text>

                        <Text style={styles.innercardText2}>:  {item.batch.quantityOnHand}</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText3}>Final Amt.</Text>

                        <Text style={styles.innercardText2}>:  {item.batchQty}</Text>


                    </View>
                    <View style={styles.profiledetailsInnerwrap}>

                        <Text style={styles.innercardText3}>Promos</Text>

                        <Text style={styles.innercardText2}>:  {item.batchQty}</Text>


                    </View>

                </View>
                <View style={styles.verticleLine}></View>
                <View style={styles.innercard2}>

                    <View style={styles.iconwrap}>

                    <Image source={require('../../assets/icon/to-do-list.png')} style={styles.btnImg} />

                        <Text style={{ alignSelf: 'center' }}> 50</Text>


                    </View>



                </View>
            </View>

        </View>
                            {/* <BatchDetailsCard /> */}

                        </TouchableOpacity>
                       

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
export default SelectBatch;

const styles = StyleSheet.create({



    safeAreaContainer: scrollA => ({
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom:5,
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
    cardOuterStyle: {
        padding: 8,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 5,
        marginTop: 5,
        // marginLeft: 10,
        // marginRight: 10,
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
        width: '70%'

    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
        marginLeft: 35,
    },
    innercard2: {
        paddingTop:30,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignContent: 'space-between',
        alignSelf: 'flex-start',
        width: '30%',
        fontSize: 12

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
    iconwrap: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center'
    },
    btnImg: {

        width: 40,
        height: 40,
      },

    innercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '50%',
        fontSize: 11,
        tintColor: 'gray'
    },
    innercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 11,
        tintColor: 'gray'
    },
    innercardText3: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '50%',
        fontSize: 11,
        fontWeight: '500'
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
