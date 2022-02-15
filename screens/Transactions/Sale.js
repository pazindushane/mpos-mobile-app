import React, { useRef, useState, useEffect } from 'react';
import { Fragment } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    Modal,
    SafeAreaView,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    FlatList,
    RefreshControl
} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Notifications from '../../model/Notifications';
import Searchbar from '../../components/SearchBar';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { colors } from '../../config/Colors'

import TransactionCard from '../../components/TransactionCard';

import { BANNER_H } from '../constants';
import FormButton from '../../components/FormButton';
import ComponentButton from '../../components/ComponentButton';
import Header from '../../components/Header';

import { getitems } from '../../endpoints/Itemendpoint'

const Sale = ({ navigation, route }) => {

    const scrollA = useRef(new Animated.Value(0)).current;

    const [refreshing, setrefreshing] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    

    const scrollToTopAndRefresh = () =>{
      // flatlistref.scrollToOffset({ y: 0, animated: true });
      setrefreshing(true, doRefresh());
    }

    const tagFilter = item => { // <-- filter callback
        if (tag) {
          return item.tag.toLowerCase() === tag.toLowerCase(); // <-- compare using lowercase!
        }
        return true;
      }

    
  
   const doRefresh = () =>{
      console.log('dsds')
    //   getLoadings1()
      setTimeout(() => setrefreshing(false), 1);
    }
  
    const fetchData = () => {
    //   getLoadings1()
      setIsFetching(false);
    };
    
    const onRefresh = () => {
      setIsFetching(true);
      fetchData();
    };
  
    var flatlistref = null;


    let lastPress = 0;
    const [show, hide] = useState(false)
    const onDoublePress = () => {
        const time = new Date().getTime();
        const delta = time - lastPress;

        const DOUBLE_PRESS_DELAY = 400;
        if (delta < DOUBLE_PRESS_DELAY) {
            // Success double press
            console.log('double press');

            hide(!show)

        }
        lastPress = time;
    };

    const [state, setState] = useState({
        clickCount: 0,

        name: 'edit',
        lastPress: 0,
        disabled: false,
    })



    const [listData, setListData] = useState(

        Notifications.map((NotificationItem, index) => ({
            key: `${index}`,
            InvoiceAmt: NotificationItem.InvoiceAmt,
            discount: NotificationItem.discount,
            totalItems: NotificationItem.totalItems,
            finalamt: NotificationItem.finalamt,

        })

        ),
    );

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const onLeftActionStatusChange = rowKey => {
        console.log('onLeftActionStatusChange', rowKey);
    };

    const onRightActionStatusChange = rowKey => {
        console.log('onRightActionStatusChange', rowKey);
    };

    const onRightAction = rowKey => {
        console.log('onRightAction', rowKey);
    };

    const onLeftAction = rowKey => {
        console.log('onLeftAction', rowKey);
    };

    const VisibleItem = props => {
        const {
            data,
            rowHeightAnimatedValue,
            removeRow,
            leftActionState,
            rightActionState,
        } = props;

        if (rightActionState) {
            Animated.timing(rowHeightAnimatedValue, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {
                removeRow();
            });
        }

          const { itms } = route.params;
          const { qty } = route.params;
          const { foundTextFields } = route.params;
        //   var itmss = itms
          const itmss = new Array(itms);

          const abcdcdd = () =>{
              console.log(foundTextFields);
          }

          
          let total = itms.reduce((sum,item) => sum + item.price * item.quantity, 0);

          console.log(total);
            


          useEffect(() => {
            console.log("itmss");
            console.log(itmss);
            console.log("qty");
            console.log(qty);
            
          }, []);
        

        return (

                
            <Animated.View
                style={styles.mainOuter}
            >

            <FlatList
                            ref={(ref) => flatlistref = ref} 
                            data={itmss}
                            onRefresh={onRefresh}
                                refreshing={isFetching}
                                progressViewOffset={10}
                            renderItem={({ item }) =>


                <View style={styles.cardOuterStyle}>
                    
                    <TouchableOpacity onPress={() => {
                        onDoublePress();
                    }}>
                        <View style={styles.cardInnerStyle}>

                            <View style={styles.innercard1}>
                                <Text style={{ paddingBottom: 5, fontSize: 13, fontWeight: '500' }}>hsdbvjh</Text>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Total Items </Text>

                                    <Text style={styles.innercardText2}>:250</Text>

                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Invoice Amt </Text>

                                    <Text style={styles.innercardText2}>:INV 001</Text>


                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Discount</Text>

                                    <Text style={styles.innercardText2}>:25000</Text>


                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Final Amt</Text>

                                    <Text style={styles.innercardText2}>:100</Text>


                                </View>

                            </View>
                            <View style={styles.verticleLine}></View>
                            <View style={styles.innercard2}>

                                <View style={styles.iconwrap}>
                                
                                    <Image source={require('../../assets/icon/to-do-list.png')} style={styles.btnImg} />
                                    <Text style={styles.iconText1}> {qty}</Text>


                                </View>



                            </View>
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
                {show ?
                    (<View style={styles.popupcardInnerStyle}>
                        <View style={styles.popupinnercard1}>
            
            
                            <TouchableOpacity onPress={() => navigation.navigate('Promo')
                            }>
                                <View style={styles.iconwrap}>
            
                                    <Image source={require('../../assets/icon/dollar.png')} style={styles.btnImg} />
            
                                    <Text style={{ alignSelf: 'center' }}>Promos</Text>
            
            
                                </View>
            
            
                            </TouchableOpacity >
                          
                             <TouchableOpacity onPress={() => navigation.navigate('Offers')}>
                                <View style={styles.iconwrap}>
            
                                    <Image source={require('../../assets/icon/discount.png')} style={styles.btnImg} />
            
                                    <Text style={{ alignSelf: 'center' }}>Offers</Text>
            
            
                                </View>
            
                            </TouchableOpacity >
                        </View>
            
                       
                    </View>
                    ) : null
                }

            </Animated.View >



        );
    };

    const renderItem = (data, rowMap) => {
        const rowHeightAnimatedValue = new Animated.Value(60);

        return (
            <VisibleItem
                data={data}
                rowHeightAnimatedValue={rowHeightAnimatedValue}
                removeRow={() => deleteRow(rowMap, data.item.key)}
            />
        );
    };

    const HiddenItemWithActions = props => {
        const {
            swipeAnimatedValue,
            leftActionActivated,
            rightActionActivated,
            rowActionAnimatedValue,
            rowHeightAnimatedValue,
            onClose,
            onDelete,
        } = props;

        if (rightActionActivated) {
            Animated.spring(rowActionAnimatedValue, {
                toValue: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.spring(rowActionAnimatedValue, {
                toValue: 67.5,
                useNativeDriver: false
            }).start();
        }

        return (
            <Animated.View style={[styles.rowBack,]}>

                <Animated.View
                    style={[
                        styles.backRightBtn,
                        styles.backRightBtnRight,
                        {

                            width: rowActionAnimatedValue,
                        },
                    ]}>
                    <TouchableOpacity

                        onPress={onDelete}>
                        <Animated.View
                            style={[
                                styles.trash,

                            ]}>
                            {/* style={{
                                    fontWeight: '600', alignSelf: 'center', justifyContent: 'center', paddingTop: 5,
                                    alignContent: 'center',
                                    alignItems: 'center',
                                }}  */}
                            <Image source={require('../../assets/icon/delete1.png')} style={styles.trashImg} />
                            <Text
                                style={{ fontSize: 15, fontWeight: '400', alignSelf: 'center', }}>
                                Delete
                            </Text>
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>

            </Animated.View>
        );
    };

    const renderHiddenItem = (data, rowMap) => {
        const rowActionAnimatedValue = new Animated.Value(75);
        const rowHeightAnimatedValue = new Animated.Value(60);

        return (
            <HiddenItemWithActions
                data={data}
                rowMap={rowMap}
                rowActionAnimatedValue={rowActionAnimatedValue}
                rowHeightAnimatedValue={rowHeightAnimatedValue}
                onClose={() => closeRow(rowMap, data.item.key)}
                onDelete={() => deleteRow(rowMap, data.item.key)}
            />
        );
    };

    return (
        <Fragment>
            <Header navigation={navigation} tittle="Sale" />

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
                        buttonTitle="Pay"
                        onPress={() => navigation.navigate('PaymentNow')}
                        imgeLocation={require('../../assets/icon/checkbox.png')}
                        buttonColor={colors.paybtncolor}
                        fontColor={'white'}
                    />


                    <View style={styles.InvoicemainOuter}>
                        <TouchableOpacity onPress={() => onDoublePress()
                        }>
                            <View
                                style={styles.invoiceCardOuterStyle}>
                                <Text style={{ paddingBottom: 5, fontSize: 20, fontWeight: '500' }}>Current Invoice</Text>


                                <View style={styles.invoiceCardInnerStyle}>
                                    <View style={styles.invoiceInnercard1}>

                                        <View style={styles.invoiceProfiledetailsInnerwrap}>

                                            <Text style={styles.invoiceInnercardText1}>Total Items </Text>

                                            <Text style={styles.invoiceInnercardText2}>:0771234567 </Text>

                                        </View>
                                        <View style={styles.invoiceProfiledetailsInnerwrap}>

                                            <Text style={styles.invoiceInnercardText1}>Invoice Amt    </Text>

                                            <Text style={styles.invoiceInnercardText2}>:</Text>


                                        </View>
                                        <View style={styles.invoiceProfiledetailsInnerwrap}>

                                            <Text style={styles.invoiceInnercardText1}>Discount </Text>

                                            <Text style={styles.invoiceInnercardText2}>:</Text>


                                        </View>
                                        <View style={styles.invoiceProfiledetailsInnerwrap}>

                                            <Text style={styles.invoiceInnercardText1}>Final Amt  </Text>

                                            <Text style={styles.invoiceInnercardText2}>:</Text>


                                        </View>

                                    </View>

                                    <View style={styles.invoiceInnercard1}>

                                        <View style={styles.invoiceProfiledetailsInnerwrap}>

                                            <Text style={styles.invoiceInnercardText1}>Total Qty </Text>

                                            <Text style={styles.invoiceInnercardText2}> :500 </Text>


                                        </View>
                                        <View style={styles.invoiceProfiledetailsInnerwrap}>

                                            <Text style={styles.invoiceInnercardText1}>    </Text>

                                            <Text style={styles.invoiceInnercardText2}>  5000</Text>


                                        </View>


                                    </View>
                                </View>

                            </View>

                        </TouchableOpacity>
                        {show ?
                            (<View style={styles.popupcardInnerStyle}>
                                <View style={styles.popupinnercard1}>
                    
                    
                                    <TouchableOpacity onPress={() => navigation.navigate('Promo')
                                    }>
                                        <View style={styles.iconwrap}>
                    
                                            <Image source={require('../../assets/icon/dollar.png')} style={styles.btnImg} />
                    
                                            <Text style={{ alignSelf: 'center' }}>Promos</Text>
                    
                    
                                        </View>
                    
                    
                                    </TouchableOpacity >
                                    {/* <TouchableOpacity onPress={() => navigation.navigate('Offers')}>
                                        <View style={styles.iconwrap}>
                    
                                            <Image source={require('../../../assets/icon/barter.png')} style={styles.btnImg} />
                    
                                            <Text style={{ alignSelf: 'center' }}>Return</Text>
                    
                    
                                        </View>
                    
                    
                                    </TouchableOpacity > */}
                                    <TouchableOpacity onPress={() => hide(show)}>
                                        <View style={styles.iconwrap}>
                    
                                            <Image source={require('../../assets/icon/discount.png')} style={styles.btnImg} />
                    
                                            <Text style={{ alignSelf: 'center' }}>Offers</Text>
                    
                    
                                        </View>
                    
                                    </TouchableOpacity >
                                </View>
                    
                               
                            </View>
                            ) : null
                        }
                    </View>

                    <ComponentButton
                        buttonTitle="Add Items"
                        onPress={() => navigation.navigate('Item')}
                        imgeLocation={require('../../assets/icon/add.png')}
                        buttonColor={colors.addItemBtnColor}
                        fontColor={'white'}
                    />



                </Animated.View>
                <View style={styles.detailsCardOuter}>

                    {/* <ScrollView> */}
                    <SwipeListView
                        data={listData}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        leftOpenValue={50}
                        rightOpenValue={-80}
                        disableRightSwipe
                        onRowDidOpen={onRowDidOpen}
                        leftActivationValue={100}
                        leftActionValue={0}
                        onLeftAction={onLeftAction}
                        onRightAction={onRightAction}
                        onLeftActionStatusChange={onLeftActionStatusChange}
                        onRightActionStatusChange={onRightActionStatusChange}
                    />



                </View>
            </Animated.ScrollView>
        </Fragment >
    );
};

export default Sale;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    backTextWhite: {
        color: '#FFF',
        alignSelf: 'center',
    },

    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: 5,



    },

    backRightBtn: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: 66,
        width: 67.5,



    },

    backRightBtnRight: {
        backgroundColor: '#FF7575',
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        right: 0,


    },
    trash: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

    },
    trashImg: {
        width: 35,
        height: 35,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#666',
    },
    details: {
        fontSize: 12,
        color: '#999',
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
    detailsCardRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        marginLeft: 5,
        marginRight: 5,
    },




    cardInnerText: {
        fontSize: 10,
        fontWeight: '100',
    },
    paymentbtn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.paybtncolor,
        elevation: 5,
        borderRadius: 7,
        marginBottom: 10,

    },

    btnImg: {
        width: 40,
        height: 40,
    },

    cmbOuter: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingTop: 5,

        justifyContent: 'space-evenly',

    },
    cmbinnerItem: {
        flexDirection: 'column',

        borderRadius: 3,

        width: '32%',
        height: 43,

        justifyContent: 'flex-start',
    },
    cmbTextWrapper: {
        backgroundColor: '#CCD0CC',
        paddingLeft: 2,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        fontSize: 9
    },
    cmbDropdownWrapper: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingLeft: 2,
        paddingRight: 6,
        paddingBottom: 2,
        backgroundColor: 'white',
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
    },



    ////////////Item visible card
    popupcardOuterStyle: {
        padding: 8,
        width: '100%',
        height: 120,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        elevation: 5,
        borderRadius: 7,
        borderWidth: 4
    },
    popupcardInnerStyle: {
        backgroundColor: '#CCD0CC',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderRadius: 7,
        height: 100,
    },
    popupinnercard1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',

    },
    popupverticleLine: {
        height: 100,
        width: 1,
        backgroundColor: '#909090',

    },
    popupinnercard2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        width: '30%',
        fontSize: 12

    },

    popupprofileDetailsMainWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center',
        display: 'flex',
        padding: 1,
    },

    popupiconwrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    /////////////////Item Add


    


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



    innercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '50%',
        fontSize: 12
    },


    ///////////////////////////
    mainOuter: {
        elevation: 5,
        borderRadius: 7,
        marginBottom: 10,

        backgroundColor: '#CCD0CC',
    },
    cardOuterStyle: {
        padding: 8,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        elevation: 2,
        borderRadius: 7,


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

    iconwrap: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },


    innercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 12
    },
    iconText1: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 15,
        paddingTop: 10,
    },



    ////////////////////////Invoice 
    InvoicemainOuter: {
        elevation: 5,
        borderRadius: 7,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: '#CCD0CC',

    },

    invoiceCardOuterStyle: {
        padding: 8,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
        elevation: 2,
        borderRadius: 7,
    },
    invoiceCardInnerStyle: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    invoiceInnercard1: {
        display: 'flex',
        flexDirection: 'column',
        // padding: 8,
        width: '50%'

    },

    invoiceCardInnerImage: {
        width: 95.27,
        height: 96.81,
        marginLeft: 10,
        flex: 1,
        shadowOpacity: 20,
        shadowColor: 'black',
        borderRadius: 7,

    },
    invoiceCardInnerText: {
        fontSize: 10,
        fontWeight: '100',
    },
    invoiceProfileDetailsMainWrap: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 2,
        padding: 1,
    },
    invoiceProfiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    invoiceInnercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '50%',
        fontSize: 12
    },
    invoiceInnercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 12
    },
});