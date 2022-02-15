import React, { useRef, useState } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Animated,
    ScrollView,
    TextInput,

} from 'react-native';

import { BANNER_H } from '../../constants';

import { colors } from '../../../config/Colors'
import Header from '../../../components/Header';
import ComponentButton from '../../../components/ComponentButton';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SelectBatchTwo = ({ navigation, route }) => {
    const scrollA = useRef(new Animated.Value(0)).current;
    const [qty, setQty] = useState(null);
    // const [foundTextFields, setFoundTextFields] = useState(null);

    const { item } = route.params;
    const { itms } = route.params;

    

      var foundTextFields = [];

      const addarray = ()=>{
        // foundTextFields.push(qty)
        // addItem(qty)
        storeDatas(qty);
        storeDatass();
        console.log("foundTextFields");
        console.log(foundTextFields);
        navigation.navigate('Sale', {  qty, itms, foundTextFields })
        
      }

      const storeDatas = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
        //   await AsyncStorage.setItem('@Array_Key', jsonValue)
          AsyncStorage.setItem('@Array_Key', JSON.stringify(countries));
        } catch (e) {
          // saving error
        }
      }

      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@Array_Key')
        //   return jsonValue != null ? JSON.parse(jsonValue) : null;
          console.log(jsonValue);
        } catch(e) {
          // error reading value
        }
      }

      const addItem = (item) => {
        foundTextFields.push(item); // <- Here is the trick
        storeDatas();
        setQty([...foundTextFields]);
     };

     const storeDatass = async (value) => {
        try {
            var countries = await AsyncStorage.getItem('@Array_Key');
            countries = JSON.parse(countries);
            countries.push(qty);
            AsyncStorage.setItem('@Array_Key', JSON.stringify(countries));
            AsyncStorage.setItem('@Array_Key', countries.concat(qty));
            console.log(countries);
        } catch (e) {
          // saving error
        }
      }
    

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
                        onPress={() => addarray()}
                        imgeLocation={require('../../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />




                    <View
                        style={styles.cardOuterStyle}>



                        <View style={styles.cardInnerStyle}>

                            <View style={styles.innercard1}>
                                <Text style={{ paddingBottom: 5, fontSize: 15, fontWeight: '500' }}>Batch Number : {item.batch.batchNumber}</Text>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText3}>Qty Stock  </Text>

                                    <Text style={styles.innercardText2}>:  {item.batchQty} </Text>

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

                                    <Text style={styles.innercardText2}>:  {item.batchQty} </Text>


                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Discount  </Text>

                                    <Text style={styles.innercardText2}>:  {item.batch.basePrice}</Text>


                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText3}>Final Amt.</Text>

                                    <Text style={styles.innercardText2}>:  {item.batchQty} </Text>


                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText3}>Promos</Text>

                                    <Text style={styles.innercardText2}>:  {item.batch.basePrice}</Text>


                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Discount  </Text>

                                    <Text style={styles.innercardText2}>:  {item.batch.basePrice}</Text>


                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText3}>Final Amt.</Text>

                                    <Text style={styles.innercardText2}>:  {item.batchQty} </Text>


                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText3}>Promos</Text>

                                    <Text style={styles.innercardText2}>:  {item.batch.basePrice}</Text>


                                </View>

                            </View>
                            <View style={styles.verticleLine}></View>
                            <View style={styles.innercard2}>

                                <View style={styles.iconwrap}>

                                    <Image source={require('../../../assets/icon/checkbox.png')} style={styles.btnImg} />

                                    <TextInput
                                        // value={labelValue}
                                        keyboardType="number-pad"
                                        style={styles.inputField}
                                        numberOfLines={1}
                                        placeholder='Qty'
                                        placeholderTextColor="#666"
                                        value={qty}
                                        onChangeText={e => setQty(e)}
                                        
                                    />

                                    
                                    


                                </View>



                            </View>
                        </View>

                    </View>




                </Animated.View>
                <View style={styles.detailsCardOuter}>

                    <ScrollView>

                        {/* 
                        <BatchDetailsCard />
                        <BatchDetailsCard />
                        <BatchDetailsCard />
                        <BatchDetailsCard /> */}

                    </ScrollView>
                </View>
            </Animated.ScrollView>

        </Fragment>
    );
}
export default SelectBatchTwo;

const styles = StyleSheet.create({

    safeAreaContainer: scrollA => ({
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
      
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
    detailsCardRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        marginLeft: 5,
        marginRight: 5,
    },

    btnIcon: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        

    },
    


    //////////////////////////////////////////
    cardOuterStyle: {
        padding: 8,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
        marginTop: 5,
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

        width: '70%'

    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',

    },
    innercard2: {
        paddingTop: 30,
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
    inputField: {
        marginTop: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 40,
        height: 38,
        fontSize: 12,
        borderColor: 'gray',
        borderRightWidth: 0.5

    },

    innercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '50%',
        fontSize: 11,
        color:'black'

    },
    innercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 11,
        color:'black'

    },
    innercardText3: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '50%',
        fontSize: 11,
        fontWeight: '500'
    },
});
