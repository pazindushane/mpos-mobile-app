
import React, { useRef, useState, useEffect } from 'react';

import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    TextInput,
    Animated,

} from 'react-native';


import { BANNER_H } from '../../constants';
import ComponentButton from '../../../components/ComponentButton';
import Header from '../../../components/Header';
import ModalDropdown from 'react-native-modal-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import DatePicker from 'react-native-datepicker'

import ActionSheet from 'react-native-actionsheet';

const CreateCheque = ({ navigation }) => {

    const scrollA = useRef(new Animated.Value(0)).current;
    const [currentDate, setCurrentDate] = useState('');

    const [state, setState] = useState({
        date: '',
        data: 'None'
    })

    let actionSheet = useRef();
    var optionArray = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Cancel'
    ];

    const showActionSheet = () => {
        //To show the Bottom ActionSheet
        actionSheet.current.show();
    };
    

    return (
        <Fragment>

            <Header navigation={navigation} tittle="Cheque Config" />



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
                        buttonTitle="Create Cheque"
                        onPress={() => navigation.navigate('Cheque')}
                        imgeLocation={require('../../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />

                    <View style={styles.cmbOuter}>
                        <View style={styles.cmbinnerItem}>
                            <View style={styles.cmbTextWrapper}>
                                <Text style={{ fontSize: 9 }}>Category:</Text>
                            </View>
                            <TouchableHighlight
                                style={styles.buttonStyle}
                                onPress={showActionSheet}>
                                <View style={styles.cmbDropdownWrapper}>
                                    <Text>{state.data}</Text>
                                    <FontAwesome name="caret-down" size={20} iconColor='#030303' style={styles.dropdownIcon} />
                                </View>

                            </TouchableHighlight>
                        </View>
                    </View>
                    <ActionSheet
                        ref={actionSheet}

                        options={optionArray}
                        height='150'
                        // cancelButtonIndex={4}

                        // destructiveButtonIndex={1}
                        onPress={(index) => {

                            setState({ data: optionArray[index] })

                        }}
                    />
                    <View style={styles.inputContainer}>

                        <TextInput

                            style={styles.inputField}
                            numberOfLines={1}
                            placeholder='Cheque Number'
                            placeholderTextColor="#666"
                            keyboardType="number-pad"
                        />
                    </View>

                    <DatePicker
                        style={styles.datePicker}
                        date={state.date}
                        mode="date"
                        placeholder="Return Date"
                        format="YYYY-MM-DD"
                        minDate="2011-05-01"
                        maxDate="2022-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 6,
                                marginLeft: 0,
                                
                           
                            },
                            placeholderText: {
                                color: 'black',
                                top: 2,
                                fontSize: 18
                            },
                            dateText: {
                                color: 'black',
                                top: 2,
                                fontSize: 18
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { setState({ date: date }) }}
                    />
               

                </Animated.View>
                <View style={styles.detailsCardOuter}>

                    <View>
                    </View>
                </View>
            </Animated.ScrollView>

        </Fragment >
    );

}
export default CreateCheque;
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
        flex: 1,
        height: '100%'
    },
    detailsCardRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        marginLeft: 5,
        marginRight: 5,
    },

    ////////////cmb box
    cmbOuter: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 45,
        paddingTop: 5,
        elevation: 5,
        justifyContent: 'space-evenly',

    },
    cmbinnerItem: {
        flexDirection: 'column',

        borderRadius: 3,

        width: '100%',
        height: 40,

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
    inputContainer: {
        marginTop: 5,
        marginBottom: 5,
        width: '100%',
        height: 50,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
    },

    inputField: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        fontSize: 16,
        borderRadius: 5,

    },
    ////////////////
    datePicker: {
        marginTop: 5,
        marginBottom: 5,
        width: '100%',
        height: 50,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
       
    },
    ////////////////////
    PaymentOuterStyle: {
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
    PaymentInnerItemwrap1: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',

    },

    PaymentRowItem: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',


    },
    PaymentItemOuter1: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '40%',
    },
    PaymentItemOuter2: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        width: '20%',
    },
    PaymentRowItem1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',

    },


    PaymentInvoiceinnercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '50%',
        fontSize: 11
    },
    PaymentInvoiceinnercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 11
    },
    PaymentInvoicehorisontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#909090',
        marginTop: 10,

    },

    PaymentInvoiceiconwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',


    },

    PaymentInnerItemwrap2: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },




    PaymentbtnImg: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        width: 40,
        height: 40,
        marginTop: '5%',
        marginRight: '20%'
    },

    PaymentinnercardText3: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '500'

    },
    PaymentinnercardText4: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        textAlign: 'right',

    },

});
