import React, { useState, useRef } from 'react';
import { Fragment } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    Modal,
    SafeAreaView,
    TextInput,
    TouchableOpacity,

} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../../config/Colors'
import { SwipeListView } from 'react-native-swipe-list-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Notifications from '../../../model/Notifications';



import { BANNER_H } from '../../constants';
import Header from '../../../components/Header';
import ComponentButton from '../../../components/ComponentButton';



const OffersFreetemSame = ({ navigation }) => {
    const scrollA = useRef(new Animated.Value(0)).current;



    const onPress = () => {
        var delta = new Date().getTime() - state.lastPress

        if (delta < 200) {

            displayModal(true)
        }

        setState({
            lastPress: new Date().getTime()
        })
    }

    const chnagedIcon = () => {
        console.log('heeeh')
        setState({ name: 'list-alt' });
    };
    // hide show modal
    const displayModal = (show) => {
        setState({ isVisible: show })
    }

    const [state, setState] = useState({
        clickCount: 0,
        isVisible: false,
        name: 'edit',
        lastPress: 0,
        disabled: false,
    })
    const pressButton = () => {
        setState({
            disabled: false,
        });
        displayModal(true)
        console.log('prssed')
        // enable after 5 second
        const setTimeout = (() => {
            setState({
                disabled: false,

            });
        }, 1000)
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
                style={[styles.cardOuterStyle,]}>

                <TouchableOpacity onPress={() => pressButton()}  >

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

                                <Image source={require('../../../assets/icon/add.png')} style={styles.btnImg} />



                            </View>



                        </View>
                    </View>
                </TouchableOpacity>

                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={state.isVisible}
                    onRequestClose={() =>

                        displayModal(false)
                    }>
                    <View style={styles.popupcardOuterStyle}>



                        <View style={styles.popupcardInnerStyle}>
                            <View style={styles.popupinnercard1}>


                                <TouchableOpacity onPress={() =>
                                    onPress()
                                }>
                                    <AntDesign
                                        name="dashboard"
                                        size={50}
                                        color={colors.black}
                                        style={{ alignSelf: 'center' }} />
                                    <Text > Promos</Text>

                                </TouchableOpacity >
                                <TouchableOpacity onPress={() => navigation.navigate('Offers')}>
                                    <AntDesign
                                        name="inbox"
                                        size={50}
                                        color={colors.black}
                                        style={{ alignSelf: 'center' }} />
                                    <Text > Offersdsfsd</Text>
                                </TouchableOpacity >
                            </View>
                            <View style={styles.popupverticleLine}></View>

                            <View style={styles.popupinnercard2}>


                                <View style={styles.iconwrap}>
                                    <TouchableOpacity onPress={() => displayModal(false)}>
                                        <Image source={require('../../../assets/icon/add.png')} style={styles.trashImg} />
                                    </TouchableOpacity >


                                </View>


                            </View>
                        </View>

                    </View>

                </Modal>


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
                            flex: 1,
                            width: rowActionAnimatedValue,
                        },
                    ]}>
                    <TouchableOpacity

                        onPress={onDelete}>
                        <Animated.View
                            style={[
                                styles.trash,

                            ]}>

                            <Image source={require('../../../assets/icon/delete1.png')} style={styles.trashImg} />
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


            <Header navigation={navigation} tittle="offers" />

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
                        onPress={() => navigation.navigate('Item')}
                        imgeLocation={require('../../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />
                 
                    <View>
                        <View
                            style={styles.offersOuterStyle}>

                            <View style={styles.offerInnerItemwrap1}>
                                <View style={styles.offersRowItem}>


                                    <View style={styles.offersItemOuter1}>

                                        <Text style={{ fontSize: 13, fontWeight: '500' }}>Maliban Chocelete Mary 80g</Text>

                                        <View style={styles.offersRowItem1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>

                                        <View style={styles.offersRowItem1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                    </View>
                                    <View style={styles.offersItemOuter2}>


                                        <View style={styles.offersInvoiceiconwrap}>

                                            <Image source={require('../../../assets/icon/add1.png')} style={styles.btnImg} />
                                        </View>


                                    </View>


                                </View>


                            </View>
                            <View style={styles.offersInvoicehorisontalLine}></View>

                            <View style={styles.offerconditionwrapper}>
                                <Text style={styles.innercardText3}>Con :   </Text>
                                <TextInput
                                    // value={labelValue}
                                    keyboardType="number-pad"
                                    style={styles.inputField}
                                    numberOfLines={1}

                                    placeholderTextColor="#666"
                                // {...rest}
                                />
                                <Text style={styles.innercardText3

                                }>   : free for :   </Text>
                                <TextInput
                                    // value={labelValue}
                                    keyboardType="number-pad"
                                    style={styles.inputField}
                                    numberOfLines={1}

                                    placeholderTextColor="#666"
                                // {...rest}
                                />
                            </View>
                        </View>

                    </View>

                    <ComponentButton
                        buttonTitle=" Select Items"
                        onPress={() => navigation.navigate('Item')}
                        imgeLocation={require('../../../assets/icon/add.png')}
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
                        rightOpenValue={-85}
                        disableRightSwipe
                        onRowDidOpen={onRowDidOpen}
                        leftActivationValue={100}
                        // rightActivationValue={-200}
                        leftActionValue={0}
                        // rightActionValue={-200}
                        onLeftAction={onLeftAction}
                        onRightAction={onRightAction}
                        onLeftActionStatusChange={onLeftActionStatusChange}
                        onRightActionStatusChange={onRightActionStatusChange}
                    />


                    {/* </ScrollView> */}
                </View>

            </Animated.ScrollView>

        </Fragment >
    );
};

export default OffersFreetemSame;

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
        marginRight: '2%',
        marginLeft: 1,
        marginTop: '8%',
        marginBottom: 22,
        borderRadius: 5,
    },
    backRightBtn: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        bottom: 0,

        position: 'absolute',
        top: 0,
        height: 66,
        width: 67.5,

    },

    backRightBtnRight: {
        backgroundColor: '#FF7575',
        right: 0,
        borderRadius: 5,

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

    action: {
        flexDirection: 'row',
        margin: 10,
        width: '95%',
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },


    iconStyle: {

        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
    },




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
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 7,
        marginBottom: 5,

    },

    //////////////////////////////
    offersOuterStyle: {
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


    offerInnerItemwrap2: {
        width: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    offersRowItem: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',


    },

    offersItemOuter1: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '60%',
    },
    offersItemOuter2: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        width: '50%',
    },
    offersRowItem1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',

    },



    offersInvoiceinnercard2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        width: '58%',
        fontSize: 12,


    },

    offersInvoicecardInnerText: {
        fontSize: 10,
        fontWeight: '100',
    },

    offersInvoiceprofiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },



    offersInvoiceinnercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '50%',
        fontSize: 11
    },
    offersInvoiceinnercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 11
    },
    offersInvoicehorisontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#909090',

    },

    offersInvoiceiconwrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',


    },
    btnImg: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 40,
        height: 40,
        marginTop: '5%',
        marginRight: '20%'
    },

    offersInvoiceinnercardText3: {
        flexDirection: 'row',
        alignItems: 'flex-start',

        fontSize: 11,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '500'

    },
    offersInvoiceinnercardText4: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

        fontSize: 11,
        textAlign: 'right',
        fontSize: 20,
        fontWeight: '500'
    },

    offerInnerItemwrap1: {
        width: '100%',
        display: 'flex',

        flexDirection: 'row',

    },
    offerconditionwrapper: {
        width: '100%',
        display: 'flex',
        marginTop: 10,
        flexDirection: 'row',

    },
    innercardText3: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '500'

    },
    inputField: {

        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 90,
        height: 35,

        fontSize: 10,


        borderColor: 'gray',
        borderWidth: 0.5

    },







    ///////////////////////////////

    btnImg: {
        width: 40,
        height: 40,
    },

    cmbOuter: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingTop: 5,
        // paddingBottom: 5,
        justifyContent: 'space-evenly',

    },
    cmbinnerItem: {
        flexDirection: 'column',
        // elevation: 0.5,
        borderRadius: 3,
        // borderWidth: .4,
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
    },
    popupcardInnerStyle: {

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    popupinnercard1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '70%',
        alignSelf: 'center',
        alignItems: 'center',

    },
    popupverticleLine: {
        height: 100,
        width: 1,
        backgroundColor: '#909090',
        marginLeft: 15,
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


    innercard1: {
        display: 'flex',
        flexDirection: 'column',
        // padding: 8,
        width: '70%'

    },

    //   innercard2: {
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'flex-end',
    //     alignContent: 'space-between',
    //     width: '30%',
    //     fontSize: 12

    //   },

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
    cardOuterStyle: {
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

    innercard1: {
        display: 'flex',
        flexDirection: 'column',
        // padding: 8,
        width: '70%'

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

});

