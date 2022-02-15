import React, { useRef } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';


import Header from '../../components/Header';
import ComponentButton from '../../components/ComponentButton';

import { getOutletbyRoutes } from '../../endpoints/RoutesEndpoint';

const RouteDashBoard = ({ route, navigation }) => {

    const { item } = route.params;

    const nextScreen = ()=>{
        getOutletbyRoutes(item.routeId)
        navigation.navigate('SelectOutletINRoute')
    }


    return (
        <Fragment >
            <Header navigation={navigation} tittle="Route" />



            <SafeAreaView
                style={styles.safeAreaContainer}>

                <View style={styles.customerDetailsCardMainOuter}>
                    <Text style={styles.customerName}>Route Name : {item.routeName}</Text>
                   

                    <Text style={styles.customerDetailsText}>Start City : {item.startCity}</Text>


                    <Text style={styles.customerDetailsText}>End City :  {item.endCity}</Text>


                    <Text style={styles.customerDetailsText}>Route Description : {item.routeDescription}</Text>

                </View>




            </SafeAreaView>
            <View style={styles.btnCardOuter}>

                <ScrollView>

                    <View
                        style={styles.detailsCardStyle}>


                        <View
                            style={styles.halfCardOuterStyle}>
                            <TouchableOpacity onPress={() => nextScreen()}>
                                <Image source={require('../../assets/icon/dollar-sign.png')} style={styles.btnIcon} />
                                <Text
                                    style={{
                                        marginTop: 10,
                                        fontSize: 20,
                                        fontWeight: '400',
                                        alignSelf: 'center',
                                        color: 'black'
                                    }}>
                                    Outlets
                                </Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{ padding: 10 }}
                        >


                        </View>
                        <View
                            style={styles.halfCardOuterStyle}>

                            <TouchableOpacity onPress={() => navigation.navigate('PaymentOutlet')}>
                                <Image source={require('../../assets/icon/destination.png')} style={styles.btnIcon} />
                                <Text
                                    style={{
                                        marginTop: 10,
                                        fontSize: 20,
                                        fontWeight: '400',
                                        alignSelf: 'center',
                                        color: 'black'
                                    }}>
                                   Coverd Area
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>


                    <ComponentButton
                        buttonTitle="Report"
                        onPress={() => navigation.navigate('FindOutletScreen2')}
                        imgeLocation={require('../../assets/icon/note.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />
                     <ComponentButton
                        buttonTitle="Map View"
                        onPress={() => navigation.navigate('FindOutletScreen2')}
                        imgeLocation={require('../../assets/icon/placeholder.png')}
                        buttonColor={'white'}
                        fontColor={'black'}
                    />








                </ScrollView>
            </View>


        </Fragment>
    );

}
export default RouteDashBoard;
const styles = StyleSheet.create({

    safeAreaContainer: {
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',

    },
    btnCardOuter: {
        backgroundColor: '#E4D9D9',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flex: 1
    },

    detailsCardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 5,
        marginLeft: 5,

    },






    halfCardOuterStyle: {
        width: '50%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        elevation: 5,
        shadowOpacity: 20,
        shadowColor: 'black',
        borderRadius: 7,
        alignSelf: 'center'

    },
    btnIcon: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,


    },

    //////////////////
    customerDetailsCardMainOuter: {
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
    customerName: {

        paddingTop: 5,
        fontSize: 18,
        fontWeight: '500'
    },
    customerDetailsOuterRowItem: {
        flexDirection: 'row',
        width: '100%',
    },
    customerDetailsInnerRowItem1: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'flex-start',
    },
    customerDetailsInnerRowItem2: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'flex-start',
    },
    customerDetailsText: {
        flexDirection: 'row',
        fontSize: 14,
    }
});
