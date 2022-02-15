import React, {useRef, useState, useEffect} from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Animated,
    Text,
    TextInput,
} from 'react-native';


import { BANNER_H } from '../../../../constants';



import Header from '../../../../../components/Header';
import ComponentButton from '../../../../../components/ComponentButton';


import ModalDropdown from 'react-native-modal-dropdown';

import ActionSheet from 'react-native-actionsheet';




const AddOutletForCustomer = ({ navigation }) => {

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



    const scrollA = useRef(new Animated.Value(0)).current;



    return (
        <Fragment>

            <Header navigation={navigation} tittle="Add Outlet" />


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
                        buttonTitle="Select Route"
                        onPress={() => navigation.navigate('Promos')}
                        imgeLocation={require('../../../../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />



                </Animated.View>
                <View style={styles.detailsCardOuter}>
                    <View style={styles.inputContainer}>

                        <TextInput

                            style={styles.inputField}
                            numberOfLines={1}
                            placeholder='G.Udara Deshan'
                            placeholderTextColor="#666"

                        />

                    </View>
                    <View style={styles.inputContainer}>

                        <TextInput

                            style={styles.inputField}
                            numberOfLines={1}
                            placeholder='Outlet Name*'
                            placeholderTextColor="#666"

                        />

                    </View>
                    <View style={styles.inputContainer}>

                        <TextInput

                            style={styles.inputField}
                            numberOfLines={1}
                            placeholder='Registration Number'
                            placeholderTextColor="#666"

                        />

                    </View>
                    <View style={styles.inputContainer}>

                        <TextInput

                            style={styles.inputField}
                            numberOfLines={1}
                            placeholder='Address*'
                            placeholderTextColor="#666"

                        />

                    </View>
                    <View style={styles.inputContainer}>

                        <TextInput

                            style={styles.inputField}
                            numberOfLines={1}
                            placeholder='Phone Number'
                            placeholderTextColor="#666"

                        />

                    </View>
                    <View style={styles.inputContainer}>

                        <TextInput

                            style={styles.inputField}
                            numberOfLines={1}
                            placeholder='Route'
                            placeholderTextColor="#666"

                        />

                    </View>
                    <View style={styles.cmbOuter}>
                        <View style={styles.cmbinnerItem}>
                            <View style={styles.cmbTextWrapper}>
                                <Text style={{ fontSize: 9 }}>Route Index:</Text>
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

                </View>
            </Animated.ScrollView>



        </Fragment >
    );

}
export default AddOutletForCustomer;
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
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flex: 1
    },
    inputContainer: {

        marginBottom: 10,
        width: '100%',
        height: 40,
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

///////////////////////
////////////cmb box
cmbOuter: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 45,
    paddingTop: 5,

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
 
    paddingLeft: 2,
    paddingRight: 6,
    paddingBottom: 2,
    backgroundColor: 'white',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
},


});
