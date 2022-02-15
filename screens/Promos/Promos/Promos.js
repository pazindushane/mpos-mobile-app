import React, { useRef } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated,

} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { BANNER_H } from '../../constants';

import ModalDropdown from 'react-native-modal-dropdown';
import ComponentButton from '../../../components/ComponentButton';
import Header from '../../../components/Header';

const Promos = ({ navigation }) => {
    const scrollA = useRef(new Animated.Value(0)).current;






    return (
        <Fragment>


            <Header navigation={navigation} tittle="Promo" />


           
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
                        buttonTitle="Add Promo"
                        onPress={() => navigation.navigate('HomeScreen')}
                        imgeLocation={require('../../../assets/icon/checkbox.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />



                    <View style={styles.cmbOuter}>
                        <View style={styles.cmbinnerItem}>
                            <View style={styles.cmbTextWrapper}>
                                <Text style={{ fontSize: 9 }}>Category:</Text>
                            </View>
                            <View style={styles.cmbDropdownWrapper}>
                                <ModalDropdown options={['option 1', 'option 2', 'option 1', 'option 2', 'option 1', 'option 2', 'option 1', 'option 2', 'option 1', 'option 2',]} />
                                <FontAwesome name="caret-down" size={20} iconColor='#030303' style={styles.dropdownIcon} />

                            </View>
                        </View>
                    </View>


                </Animated.View>
                <View style={styles.detailsCardOuter}>



                    <View>
                        <View
                            style={styles.offersInvoicecardOuterStyle}>
                            <Text style={{ paddingBottom: 5, fontSize: 18, fontWeight: '400' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.offersInvoicecardInnerStyle}>
                                <View style={styles.offersInvoiceinnercard1}>
                                    <View style={styles.offersInvoiceprofiledetailsOuterwrap}>

                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                    </View>
                                    <View style={styles.offersInvoiceprofiledetailsInnerwrap2}>

                                        <TouchableOpacity onPress={() => navigation.navigate("SelectPromo")}>
                                            <View style={styles.offersInvoiceiconwrap}>

                                                <Image source={require('../../../assets/icon/plus.png')} style={styles.btnImg} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>

                            <View style={styles.offersInvoicehorisontalLine}></View>
                            <View style={styles.offersInvoicecardInnerStyle2}>
                                <Text style={styles.offersInvoiceinnercardText3}>Rs.</Text>
                                <Text style={styles.offersInvoiceinnercardText4}>9000000.00</Text>
                            </View>
                        </View>

                    </View>
                    <View>
                        <View
                            style={styles.offersInvoicecardOuterStyle}>
                            <Text style={{ paddingBottom: 5, fontSize: 18, fontWeight: '400' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.offersInvoicecardInnerStyle}>
                                <View style={styles.offersInvoiceinnercard1}>
                                    <View style={styles.offersInvoiceprofiledetailsOuterwrap}>

                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                    </View>
                                    <View style={styles.offersInvoiceprofiledetailsInnerwrap2}>

                                        <TouchableOpacity onPress={() => navigation.navigate("SelectPromo")}>
                                            <View style={styles.offersInvoiceiconwrap}>

                                                <Image source={require('../../../assets/icon/plus.png')} style={styles.btnImg} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>

                            <View style={styles.offersInvoicehorisontalLine}></View>
                            <View style={styles.offersInvoicecardInnerStyle2}>
                                <Text style={styles.offersInvoiceinnercardText3}>Rs.</Text>
                                <Text style={styles.offersInvoiceinnercardText4}>9000000.00</Text>
                            </View>
                        </View>

                    </View>
                    <View>
                        <View
                            style={styles.offersInvoicecardOuterStyle}>
                            <Text style={{ paddingBottom: 5, fontSize: 18, fontWeight: '400' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.offersInvoicecardInnerStyle}>
                                <View style={styles.offersInvoiceinnercard1}>
                                    <View style={styles.offersInvoiceprofiledetailsOuterwrap}>

                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                    </View>
                                    <View style={styles.offersInvoiceprofiledetailsInnerwrap2}>

                                        <TouchableOpacity onPress={() => navigation.navigate("SelectPromo")}>
                                            <View style={styles.offersInvoiceiconwrap}>

                                                <Image source={require('../../../assets/icon/plus.png')} style={styles.btnImg} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>

                            <View style={styles.offersInvoicehorisontalLine}></View>
                            <View style={styles.offersInvoicecardInnerStyle2}>
                                <Text style={styles.offersInvoiceinnercardText3}>Rs.</Text>
                                <Text style={styles.offersInvoiceinnercardText4}>9000000.00</Text>
                            </View>
                        </View>

                    </View>
                    <View>
                        <View
                            style={styles.offersInvoicecardOuterStyle}>
                            <Text style={{ paddingBottom: 5, fontSize: 18, fontWeight: '400' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.offersInvoicecardInnerStyle}>
                                <View style={styles.offersInvoiceinnercard1}>
                                    <View style={styles.offersInvoiceprofiledetailsOuterwrap}>

                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                    </View>
                                    <View style={styles.offersInvoiceprofiledetailsInnerwrap2}>

                                        <TouchableOpacity onPress={() => navigation.navigate("SelectPromo")}>
                                            <View style={styles.offersInvoiceiconwrap}>

                                                <Image source={require('../../../assets/icon/plus.png')} style={styles.btnImg} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>

                            <View style={styles.offersInvoicehorisontalLine}></View>
                            <View style={styles.offersInvoicecardInnerStyle2}>
                                <Text style={styles.offersInvoiceinnercardText3}>Rs.</Text>
                                <Text style={styles.offersInvoiceinnercardText4}>9000000.00</Text>
                            </View>
                        </View>

                    </View>
                    <View>
                        <View
                            style={styles.offersInvoicecardOuterStyle}>
                            <Text style={{ paddingBottom: 5, fontSize: 18, fontWeight: '400' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.offersInvoicecardInnerStyle}>
                                <View style={styles.offersInvoiceinnercard1}>
                                    <View style={styles.offersInvoiceprofiledetailsOuterwrap}>

                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                    </View>
                                    <View style={styles.offersInvoiceprofiledetailsInnerwrap2}>

                                        <TouchableOpacity onPress={() => navigation.navigate("SelectPromo")}>
                                            <View style={styles.offersInvoiceiconwrap}>

                                                <Image source={require('../../../assets/icon/plus.png')} style={styles.btnImg} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>

                            <View style={styles.offersInvoicehorisontalLine}></View>
                            <View style={styles.offersInvoicecardInnerStyle2}>
                                <Text style={styles.offersInvoiceinnercardText3}>Rs.</Text>
                                <Text style={styles.offersInvoiceinnercardText4}>9000000.00</Text>
                            </View>
                        </View>

                    </View>
                    <View>
                        <View
                            style={styles.offersInvoicecardOuterStyle}>
                            <Text style={{ paddingBottom: 5, fontSize: 18, fontWeight: '400' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.offersInvoicecardInnerStyle}>
                                <View style={styles.offersInvoiceinnercard1}>
                                    <View style={styles.offersInvoiceprofiledetailsOuterwrap}>

                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                    </View>
                                    <View style={styles.offersInvoiceprofiledetailsInnerwrap2}>

                                        <TouchableOpacity onPress={() => navigation.navigate("SelectPromo")}>
                                            <View style={styles.offersInvoiceiconwrap}>

                                                <Image source={require('../../../assets/icon/plus.png')} style={styles.btnImg} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>

                            <View style={styles.offersInvoicehorisontalLine}></View>
                            <View style={styles.offersInvoicecardInnerStyle2}>
                                <Text style={styles.offersInvoiceinnercardText3}>Rs.</Text>
                                <Text style={styles.offersInvoiceinnercardText4}>9000000.00</Text>
                            </View>
                        </View>

                    </View>
                    <View>
                        <View
                            style={styles.offersInvoicecardOuterStyle}>
                            <Text style={{ paddingBottom: 5, fontSize: 18, fontWeight: '400' }}>Maliban Chocelete Mary 80g</Text>

                            <View style={styles.offersInvoicecardInnerStyle}>
                                <View style={styles.offersInvoiceinnercard1}>
                                    <View style={styles.offersInvoiceprofiledetailsOuterwrap}>

                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Batch Number</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:B001</Text>

                                        </View>
                                        <View style={styles.offersInvoiceprofiledetailsInnerwrap1}>

                                            <Text style={styles.offersInvoiceinnercardText1}>Qty Invoice</Text>

                                            <Text style={styles.offersInvoiceinnercardText2}>:9000000</Text>


                                        </View>
                                    </View>
                                    <View style={styles.offersInvoiceprofiledetailsInnerwrap2}>

                                        <TouchableOpacity onPress={() => navigation.navigate("SelectPromo")}>
                                            <View style={styles.offersInvoiceiconwrap}>

                                                <Image source={require('../../../assets/icon/plus.png')} style={styles.btnImg} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>

                            <View style={styles.offersInvoicehorisontalLine}></View>
                            <View style={styles.offersInvoicecardInnerStyle2}>
                                <Text style={styles.offersInvoiceinnercardText3}>Rs.</Text>
                                <Text style={styles.offersInvoiceinnercardText4}>9000000.00</Text>
                            </View>
                        </View>

                    </View>

                </View>
            </Animated.ScrollView>

        </Fragment >
    );

}
export default Promos;
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
    ////////////////////////////Promos card
    offersInvoicecardOuterStyle: {
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
    offersInvoicecardOuterStyle2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    offersInvoicecardInnerStyle: {

        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    offersInvoicecardInnerStyle2: {
        width: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    offersInvoiceinnercard1: {
        display: 'flex',
        flexDirection: 'row',
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
    offersInvoiceprofiledetailsOuterwrap: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '80%',
    },
    offersInvoiceprofiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    offersInvoiceprofiledetailsInnerwrap1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // borderWidth: .5,
        // borderColor: '#000',

    },
    offersInvoiceprofiledetailsInnerwrap2: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',

    },

    offersInvoiceinnercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '45%',
        fontSize: 12
    },
    offersInvoiceinnercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '45%',
        fontSize: 12
    },
    offersInvoicehorisontalLine: {
        height: 1,
        width: '100%',
        backgroundColor: '#909090',

    },

    offersInvoiceiconwrap: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        // paddingBottom: 10,
        paddingRight: 10,
    },
    offersInvoiceinnercardText3: {
        flexDirection: 'row',
        alignItems: 'flex-start',

        fontSize: 12,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '500'

    },
    offersInvoiceinnercardText4: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',

        fontSize: 12,
        textAlign: 'right',
        fontSize: 20,
        fontWeight: '500'
    },
    btnImg: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        // marginTop: 10,
        width: 40,
        height: 40,
    },

});
