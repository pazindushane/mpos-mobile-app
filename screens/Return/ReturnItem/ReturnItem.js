import React, { useRef, useState } from 'react';
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

} from 'react-native';

import { SwipeListView } from 'react-native-swipe-list-view';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Notifications from '../../../model/Notifications';
import Searchbar from '../../../components/SearchBar';

import { BANNER_H } from '../../constants';

import ComponentButton from '../../../components/ComponentButton';
import Header from '../../../components/Header';
import ActionSheet from 'react-native-actionsheet';


const ReturnItem = ({ navigation }) => {

  const scrollA = useRef(new Animated.Value(0)).current;

  let actionSheetbrand = useRef();
  let actionSheetdiscount = useRef();
  let actionSheetcategory = useRef();




  const showActionSheetdiscount = () => {
    //To show the Bottom ActionSheet
    actionSheetdiscount.current.show();
  };
  const showActionSheetbrand = () => {
    //To show the Bottom ActionSheet
    actionSheetbrand.current.show();
  };
  const showActionSheetcategory = () => {
    //To show the Bottom ActionSheet
    actionSheetcategory.current.show();
  };


  var brandArray = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Cancel'
  ];
  var categoryArray = [
    'Option 1',
    'Option 2',
    'Option 4',
    'Cancel'
  ];
  var discountArray = [
    'Option 3',
    'Option 4',
    'Cancel'
  ];
  const [state, setState] = useState({
    clickCount: 0,
    isVisible: false,
    name: 'edit',
    lastPress: 0,
    disabled: false,
    barandName: "All",
    discountName: "All",
    categoryName: "All",

  })

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


  let popupRef = React.createRef
  const onShowPopup = () => {
    popupRef.show()
  }

  const onClosePopup = () => {
    popupRef.close()
  }



  


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

    return (


      <Animated.View
        style={styles.mainOuter}
      >

        <View style={[styles.cardOuterStyle,]}>
          <TouchableOpacity onPress={() => {
            onDoublePress();
          }}>

            <View style={styles.cardInnerStyle}>

              <View style={styles.innercard1}>
                <Text style={{ paddingBottom: 5, fontSize: 13, fontWeight: '500' }}>Maliban Chocolate Marie 80g</Text>
                <View style={styles.profiledetailsInnerwrap}>

                  <Text style={styles.innercardText1}>Total Items </Text>

                  <Text style={styles.innercardText2}>:{data.item.totalItems}</Text>

                </View>
                <View style={styles.profiledetailsInnerwrap}>

                  <Text style={styles.innercardText1}>Invoice Amt </Text>

                  <Text style={styles.innercardText2}>:{data.item.InvoiceAmt}</Text>


                </View>
                <View style={styles.profiledetailsInnerwrap}>

                  <Text style={styles.innercardText1}>Discount</Text>

                  <Text style={styles.innercardText2}>:{data.item.discount}</Text>


                </View>
                <View style={styles.profiledetailsInnerwrap}>

                  <Text style={styles.innercardText1}>Final Amt</Text>

                  <Text style={styles.innercardText2}>:{data.item.finalamt}</Text>


                </View>

              </View>
              <View style={styles.verticleLine}></View>
              <View style={styles.innercard2}>

                <View style={styles.iconwrap}>
                  <TouchableOpacity onPress={() => navigation.navigate('ReturnBatch')}>
                    <View style={styles.btnIconWrapper}>
                      <Image source={require('../../../assets/icon/add.png')} style={styles.btnImages} />
                    </View>
                    <Text style={styles.iconText1}></Text>
                  </TouchableOpacity >
                </View>

              </View>
            </View>
          </TouchableOpacity>

        </View>
        {show ?
         (<View style={styles.popupcardInnerStyle}>
          <View style={styles.popupinnercard1}>


            <TouchableOpacity onPress={() => navigation.navigate('Promo')
            }>
              <View style={styles.iconwrap}>

                <Image source={require('../../../assets/icon/dollar.png')} style={styles.btnImg} />

                <Text style={{ alignSelf: 'center' }}>Promos</Text>


              </View>


            </TouchableOpacity >
            {/* <TouchableOpacity onPress={() => navigation.navigate('Offers')}>
                  <View style={styles.iconwrap}>

                      <Image source={require('../../../assets/icon/barter.png')} style={styles.btnImg} />

                      <Text style={{ alignSelf: 'center' }}>Return</Text>


                  </View>


              </TouchableOpacity > */}
          <TouchableOpacity onPress={() => navigation.navigate('Offers')}>
              <View style={styles.iconwrap}>

                <Image source={require('../../../assets/icon/discount.png')} style={styles.btnImg} />

                <Text style={{ alignSelf: 'center' }}>Offers</Text>


              </View>

            </TouchableOpacity >
          </View>


        </View>
          ) : null
        }



      </Animated.View>



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
                styles.clear,

              ]}>
              <Image source={require('../../../assets/icon/delete1.png')} style={styles.clearImg} />
              <Text
                style={{ fontSize: 15, fontWeight: '400', alignSelf: 'center', }}>
                Clear
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
      <Header navigation={navigation} tittle="Item" />

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
            buttonTitle="Add to Return"
            onPress={() => navigation.navigate('Return')}
            imgeLocation={require('../../../assets/icon/checkbox.png')}
            buttonColor={'white'}
            fontColor={'black'}
          />

          <Searchbar />
       
          <View style={styles.cmbOuter}>


            <View style={styles.cmbinnerItem}>
              <View style={styles.cmbTextWrapper}>
                <Text style={{ fontSize: 9 }}>Barands:</Text>
              </View>



              <TouchableHighlight
                style={styles.buttonStyle}
                onPress={showActionSheetbrand}>
                <View style={styles.cmbDropdownWrapper}>
                  <Text>{state.barandName}</Text>
                  <FontAwesome name="caret-down" size={20} iconColor='#030303' style={styles.dropdownIcon} />
                </View>
              </TouchableHighlight>

              <ActionSheet
                ref={actionSheetbrand}

                options={brandArray}
                height='150'
                // cancelButtonIndex={4}

                // destructiveButtonIndex={1}
                onPress={(index) => {

                  setState({ ...state,barandName: brandArray[index] })
                  console.log(state.categoryName)
                  console.log(state.discountName)
                  console.log(state.barandName)

                }}
              />

            </View>
            <View style={{ padding: 5 }}
            />
            <View style={styles.cmbinnerItem}>
              <View style={styles.cmbTextWrapper}>
                <Text style={{ fontSize: 9 }}>Category:</Text>
              </View>

              <TouchableHighlight
                style={styles.buttonStyle}
                onPress={showActionSheetcategory}>
                <View style={styles.cmbDropdownWrapper}>
                  <Text>{state.categoryName}</Text>
                  <FontAwesome name="caret-down" size={20} iconColor='#030303' style={styles.dropdownIcon} />
                </View>
              </TouchableHighlight>

              <ActionSheet
                ref={actionSheetcategory}

                options={categoryArray}
                height='150'
                // cancelButtonIndex={4}

                // destructiveButtonIndex={1}
                onPress={(index) => {

                  setState({ ...state,categoryName: categoryArray[index] })
                  console.log(state.categoryName)
                  console.log(state.discountName)
                  console.log(state.barandName)

                }}
              />

            </View>
            <View style={{ padding: 5 }}
            />

            <View style={styles.cmbinnerItem}>
              <View style={styles.cmbTextWrapper}>
                <Text style={{ fontSize: 9 }}>Discount:</Text>
              </View>
              <TouchableHighlight
                style={styles.buttonStyle}
                onPress={showActionSheetdiscount}>
                <View style={styles.cmbDropdownWrapper}>
                  <Text>{state.discountName}</Text>
                  <FontAwesome name="caret-down" size={20} iconColor='#030303' style={styles.dropdownIcon} />
                </View>
              </TouchableHighlight>

              <ActionSheet
                ref={actionSheetdiscount}

                options={discountArray}

                // cancelButtonIndex={4}

                // destructiveButtonIndex={1}
                onPress={(index) => {

                  setState({ ...state,discountName: discountArray[index] })
                  console.log(state.categoryName)
                  console.log(state.discountName)
                  console.log(state.barandName)

                }}
              />
            </View>


          </View>
        </Animated.View>
        <View style={styles.detailsCardOuter}>


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

export default ReturnItem;

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
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
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
    backgroundColor: '#75DEFF',
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    right: 0,



  },
  clear: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  clearImg: {
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

  ///////////////////



  cardInnerText: {
    fontSize: 10,
    fontWeight: '100',
  },

  cmbOuter: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 5,
    elevation: 5,
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
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 1,
    paddingLeft: 2,
    paddingRight: 6,
    paddingBottom: 2,
    backgroundColor: 'white',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },

  /////////////////
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
  },  /////////////////Item Add

  btnImg: {
    width: 40,
    height: 40,
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