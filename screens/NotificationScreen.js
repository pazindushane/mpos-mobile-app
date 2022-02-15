import React, { Component } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Modal,
    Alert,
    Animated,
    TouchableHighlight,
    StatusBar,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { colors } from '../config/Colors'

import TransactionCard from '../components/TransactionCard';
import ItemDeatilsCard from '../components/ItemDetailsCard';
import Searchbar from '../components/SearchBar';
import { Button } from 'react-native-paper';

import ModalDropdown from 'react-native-modal-dropdown';

import { SwipeListView } from 'react-native-swipe-list-view';


export class Notification extends Component {



    _onTap = () => {
        // get the instance of time when pressed
        let now = new Date().getTime();

        if (this.firstPress) {
            // set the flag indicating first press has occured
            this.firstPress = false;

            //start a timer --> if a second tap doesnt come in by the delay, trigger singleTap event handler
            this.timer = setTimeout(() => {
                //check if user passed in prop
                this.props.singleTap ? this.props.singleTap() : null;

                // reset back to initial state
                this.firstPress = true;
                this.timer = false;
            }, this.delayTime);

            // mark the last time of the press
            this.lastTime = now;
        } else {
            //if user pressed immediately again within span of delayTime
            if (now - this.lastTime < this.delayTime) {
                // clear the timeout for the single press
                this.timer && clearTimeout(this.timer);

                //check if user passed in prop for double click
                this.props.doubleTap ? this.props.doubleTap() : null;
                this.displayModal(true)
                // reset back to initial state
                this.firstPress = true;
            }
        }
    };


    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0,
            isVisible: false,
            name: 'edit'
        }

        // time interval between double clicks
        this.delayTime = props.delay ? props.delay : 800;
        // bool to check whether user tapped once
        this.firstPress = true;
        // the last time user tapped
        this.lastTime = new Date();
        // a timer is used to run the single tap event
        this.timer = false;

    }
    getInitialState() {
        return {
            lastPress: 0
        }
    }

    onPress() {
        var delta = new Date().getTime() - this.state.lastPress;

        if (delta < 200) {

            this.displayModal(true)
        }

        this.setState({
            lastPress: new Date().getTime()
        })
    }

    chnagedIcon = () => {
        console.log('heeeh')
        this.setState({ name: 'list-alt' });
    };
    // hide show modal
    displayModal(show) {
        this.setState({ isVisible: show })
    }


    render() {
        return (
            <Fragment>

                <View
                    style={styles.header}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <AntDesign
                                style={styles.icon}
                                name="arrowleft"
                                size={25}
                                color="white"

                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._onTap}>
                            <FontAwesome
                                name="home"
                                size={25}
                                color="white"

                            />
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={styles.headerText}>
                        Item
                    </Text>

                    <View style={styles.profileBtnIcon}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                            <Image source={require('../assets/photo.jpg')} style={styles.profileImg} />
                        </TouchableOpacity>
                    </View>
                </View>



                <SafeAreaView
                    style={styles.safeAreaContainer}>



                    <View
                        style={styles.paymentbtn}>
                        <FontAwesome name="check-circle" size={40} />
                        <Text style={{ fontSize: 20, fontWeight: '400', marginLeft: 7, color: 'black' }}>
                            Add to Sale
                        </Text>
                    </View>
                    <Searchbar />
                    <View style={styles.cmbOuter}>

                        <View style={styles.cmbinnerItem}>
                            <View style={styles.cmbTextWrapper}>
                                <Text style={{ fontSize: 9 }}>Barands:</Text>
                            </View>
                            <View style={styles.cmbDropdownWrapper}>
                                <ModalDropdown options={['option 1', 'option 2']} />
                                <FontAwesome name="caret-down" size={20} iconColor='#030303' style={styles.dropdownIcon} />

                            </View>
                        </View>

                        <View style={styles.cmbinnerItem}>
                            <View style={styles.cmbTextWrapper}>
                                <Text style={{ fontSize: 9 }}>Category:</Text>
                            </View>

                            <View style={styles.cmbDropdownWrapper}>
                                <ModalDropdown options={['option 1', 'option 2', 'option 1', 'option 2', 'option 1', 'option 2', 'option 1', 'option 2', 'option 1', 'option 2',]} />
                                <FontAwesome name="caret-down" size={20} iconColor='#030303' style={styles.dropdownIcon} />

                            </View>

                        </View>

                        <View style={styles.cmbinnerItem}>
                            <View style={styles.cmbTextWrapper}>
                                <Text style={{ fontSize: 9 }}>Discount:</Text>
                            </View>
                            <View style={styles.cmbDropdownWrapper}>
                                <ModalDropdown options={['option 1', 'option 2', 'option 1', 'option 2', 'option sadasd', 'option 2', 'option 1', 'option 2',]} >
                                </ModalDropdown>
                                <FontAwesome name="caret-down" size={20} iconColor='#030303' style={styles.dropdownIcon} />
                            </View>
                        </View>


                    </View>



                    <View style={styles.detailsCardOuter}>

                        <ScrollView>

                            <TouchableOpacity onPress={this._onTap}>
                                <View
                                    style={styles.cardOuterStyle}>



                                    <View style={styles.cardInnerStyle}>

                                        <View style={styles.innercard1}>
                                            <Text style={{ paddingBottom: 5, fontSize: 13, fontWeight: '500' }}>Maliban Chocolate Marie 80g</Text>
                                            <View style={styles.profiledetailsInnerwrap}>

                                                <Text style={styles.innercardText1}>Total Items </Text>

                                                <Text style={styles.innercardText2}>:0771234567 </Text>

                                            </View>
                                            <View style={styles.profiledetailsInnerwrap}>

                                                <Text style={styles.innercardText1}>Invoice Amt    </Text>

                                                <Text style={styles.innercardText2}>:</Text>


                                            </View>
                                            <View style={styles.profiledetailsInnerwrap}>

                                                <Text style={styles.innercardText1}>Discount </Text>

                                                <Text style={styles.innercardText2}>:</Text>


                                            </View>
                                            <View style={styles.profiledetailsInnerwrap}>

                                                <Text style={styles.innercardText1}>Final Amt  </Text>

                                                <Text style={styles.innercardText2}>:</Text>


                                            </View>

                                        </View>
                                        <View style={styles.verticleLine}></View>
                                        <View style={styles.innercard2}>

                                            <View style={styles.iconwrap}>

                                                <FontAwesome
                                                    name="list-alt"
                                                    size={50}
                                                    color={colors.black}

                                                />

                                                <Text style={styles.innercardText2}> 99999</Text>


                                            </View>



                                        </View>
                                    </View>

                                </View>

                            </TouchableOpacity >

                            <ItemDeatilsCard />
                            <View
                                style={styles.cardOuterStyle}>



                                <View style={styles.cardInnerStyle}>

                                    <View style={styles.innercard1}>
                                        <Text style={{ paddingBottom: 5, fontSize: 13, fontWeight: '500' }}>Maliban Chocolate Marie 80g</Text>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText1}>Total Items </Text>

                                            <Text style={styles.innercardText2}>:0771234567 </Text>

                                        </View>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText1}>Invoice Amt    </Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText1}>Discount </Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>
                                        <View style={styles.profiledetailsInnerwrap}>

                                            <Text style={styles.innercardText1}>Final Amt  </Text>

                                            <Text style={styles.innercardText2}>:</Text>


                                        </View>

                                    </View>
                                    <View style={styles.verticleLine}></View>
                                    <View style={styles.innercard2}>

                                        <View style={styles.iconwrap}>
                                            <TouchableOpacity onPress={() => this.chnagedIcon()}>
                                                <FontAwesome
                                                    name={this.state.name}
                                                    size={50}
                                                    color={colors.black}

                                                />
                                            </TouchableOpacity >

                                            <Text style={styles.innercardText2}> 99999</Text>


                                        </View>



                                    </View>
                                </View>

                            </View>

                            <Modal
                                animationType={"slide"}
                                transparent={false}
                                visible={this.state.isVisible}
                                onRequestClose={() => {
                                    Alert.alert('Modal has now been closed.');
                                    this.displayModal(false)
                                }}>
                                <View style={styles.popupcardOuterStyle}>



                                    <View style={styles.popupcardInnerStyle}>
                                        <View style={styles.popupinnercard1}>


                                            <TouchableOpacity onPress={() => {
                                                this.onPress();
                                            }}>
                                                <AntDesign
                                                    name="dashboard"
                                                    size={50}
                                                    color={colors.black}
                                                    style={{ alignSelf: 'center' }} />
                                                <Text > Promos</Text>

                                            </TouchableOpacity >
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Offers')}>
                                                <AntDesign
                                                    name="inbox"
                                                    size={50}
                                                    color={colors.black}
                                                    style={{ alignSelf: 'center' }} />
                                                <Text > Offers</Text>
                                            </TouchableOpacity >
                                        </View>
                                        <View style={styles.popupverticleLine}></View>

                                        <View style={styles.popupinnercard2}>


                                            <View style={styles.iconwrap}>
                                                <TouchableOpacity onPress={() => this.displayModal(false)}>
                                                    <AntDesign
                                                        name="closecircle"
                                                        size={50}
                                                        color={colors.black} />
                                                </TouchableOpacity >


                                            </View>


                                        </View>
                                    </View>

                                </View>

                            </Modal>



                        </ScrollView>
                    </View>


                </SafeAreaView>
            </Fragment >
        );
    }
    componentWillUnmount() {
        // make sure to clear the timer when unmounting
        this.timer && clearTimeout(this.timer);
    }
}
export default Notification;
const styles = StyleSheet.create({

    /////////////header
    header: {
        height: 50,
        backgroundColor: '#3F50B4',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        padding: 10,
        display: 'flex',

    },
    headerText: {
        flex: 1,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileBtnIcon: {

        alignItems: 'flex-end',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
    },
    btnContainer: {
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 2,
        flexDirection: 'row',
        height: 40,
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        padding: 2,
        justifyContent: 'space-between'
    },
    icon: {
        padding: 4
    },
    profileImg: {
        borderRadius: 10,
        width: 32,
        height: 32,
        borderWidth: 1,
        borderColor: 'white',
    },


    safeAreaContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#E5E5E5',
    },

    ///////////////////
    action: {
        flexDirection: 'row',
        margin: 10,
        width: '95%',
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    searchBar: {
        margin: 10,
        width: 'auto',
        borderRadius: 7,
        borderWidth: 2,

    },

    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
    },





    safeAreaContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: colors.backgroundcolor,
    },
    detailsCardOuter: {
        backgroundColor: colors.backgroundcolorRed,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

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



    cardInnerImage: {
        width: 95.27,
        height: 96.81,
        marginLeft: 10,
        flex: 1,
        shadowOpacity: 20,
        shadowColor: 'black',
        borderRadius: 7,

    },


    cardInnerText: {
        fontSize: 10,
        fontWeight: '100',
    },

    paymentbtn: {
        width: '95%',
        height: 60,
        margin: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 7,
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },







    cmbOuter: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingTop: 5,
        paddingBottom: 10,
        justifyContent: 'space-evenly',



    },
    cmbinnerItem: {
        flexDirection: 'column',
        // elevation: 0.5,
        borderRadius: 3,
        // borderWidth: .4,
        width: '30%',
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
        width: '95%',
        height: 120,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
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
    cardOuterStyle: {
        padding: 8,
        width: '95%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
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
        height: '90%',
        width: 1,
        backgroundColor: '#909090',
        marginLeft: 15,
    },
    innercard2: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'space-between',
        width: '30%',
        fontSize: 12

    },

    cardInnerImage: {
        width: 95.27,
        height: 96.81,
        marginLeft: 10,
        flex: 1,
        shadowOpacity: 20,
        shadowColor: 'black',
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
    profiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    iconwrap: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
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

    ///////////////////////////
    cardOuterStyle: {
        padding: 8,
        width: '95%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 5,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
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
        height: '90%',
        width: 1,
        backgroundColor: '#909090',
        marginLeft: 15,
    },
    innercard2: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'space-between',
        width: '30%',
        fontSize: 12

    },

    cardInnerImage: {
        width: 95.27,
        height: 96.81,
        marginLeft: 10,
        flex: 1,
        shadowOpacity: 20,
        shadowColor: 'black',
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
    profiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    iconwrap: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
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

    ////////////////////////////
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

    offerInnerItemwrap1: {

        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between'
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        width: '60%',
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
        fontSize: 12
    },
    offersInvoiceinnercardText2: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '50%',
        fontSize: 12
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
    cardInnerStyle: {

        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    innercard1: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',


    },
    innercard2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        width: '50%',
        fontSize: 12,


    },
    profiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    innercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
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

    profiledetailsInnerwrap1: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // borderWidth: .5,
        // borderColor: '#000',

    },
    profiledetailsOuterwrap: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '50%',
    },
    offerInnerItemwrap1: {
        width: '100%',
        display: 'flex',

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innercardText3: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        textAlign: 'left',
        fontSize: 18,
        fontWeight: '500'

    },
    innercardText4: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        textAlign: 'right',
        fontSize: 18,
        fontWeight: '500'
    },

});
