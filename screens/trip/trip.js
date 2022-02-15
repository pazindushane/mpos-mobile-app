import React, { useRef, useEffect, useState } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    FlatList,
    RefreshControl,
    TextInput,
     ViewPropTypes, 
     TouchableHighlight,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ActionSheet from 'react-native-actionsheet';

import T from 'prop-types';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import ComponentButton from '../../components/ComponentButton';
import Searchbar from '../../components/SearchBar';

import ModalDropdown from 'react-native-modal-dropdown';

import { getLoadings1, datasourceL } from '../../endpoints/LoadingEndpoint';

import { getRoutes1, datasource12, disablebtn } from '../../endpoints/RoutesEndpoint';

import { makeTrips } from '../../endpoints/TripEndpoint';

const Trip = ({  route ,props ,navigation }) => {

    
     
    const [refreshing, setrefreshing] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [Activebtn, setActivebtn] = useState(true);

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
    const [state, setState] = useState({

        data: "All",

      })

      useEffect(() => {
        // callback to parent that set props
        
        getRoutes1()
     })

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
    //   var { disablebtn1 } = route.params;

      const checkbtn = ()=>{
        
        
      }
      

      

    return (
        <Fragment >
            <Header navigation={navigation} tittle="Trip" />
            <FlatList
                            ref={(ref) => flatlistref = ref} 
                            data={datasourceL}
                            onRefresh={onRefresh}
                                refreshing={isFetching}
                                progressViewOffset={10}
                            renderItem={({ item }) =>
                            
            <View style={styles.btnCardOuter}>
            
                <View
                    style={styles.cardOuterStyle}>


                    <View style={styles.cardInnerStyle}>
                        <View style={styles.innercard1}>

                            <View style={styles.cardDetailsRowWrap}>

                                <Text style={styles.innercardText1}>Loaded Time </Text>
                                {/* <Text>{item.productList.itemLists[0].item.itemName}</Text>  */}
                                <Text style={styles.innercardText2}>{item.loadingDate}</Text>

                            </View>
                            <View style={styles.cardDetailsRowWrap}>

                                <Text style={styles.innercardText1}>Vehicle </Text>

                                <Text style={styles.innercardText2}>{item.vehicleId}</Text>


                            </View>
                            <View style={styles.cardDetailsRowWrap}>

                                <Text style={styles.innercardText1}>Odo Meter </Text>

                                <Text style={styles.innercardText2}>{item.startVehicleMeterRead}</Text>


                            </View>
                            <View style={styles.cardDetailsRowWrap}>

                                <Text style={styles.innercardText1}>Driver </Text>

                                <Text style={styles.innercardText2}>{item.driverId}</Text>


                            </View>

                        </View>

                        <View style={styles.innercard1}>

                            <View style={styles.cardDetailsRowWrap}>

                                <Text style={styles.innercardText1}>Created By </Text>

                                <Text style={styles.innercardText2}>:23 </Text>


                            </View>
                        
                        </View>
                    </View>

                </View>
                 
    
               <View style={{marginBottom:10}}>
               <ComponentButton
                    buttonTitle="View Stock"
                    onPress={() => navigation.navigate('ViewStock', { item })}
                    imgeLocation={require('../../assets/icon/shelf.png')}
                    buttonColor={'white'}
                    fontColor={'black'}
                />
               </View>

               <View style={styles.SectionStyle}
               disabledColor={'#A0A0A0'}
               style={{
                backgroundColor: 'white',
                opacity: 1,
                width:'100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                // borderWidth: .5,
                borderColor: '#000',
                height: 52,
                borderRadius: 5,
                marginBottom: 5,
                marginTop: 5,
                }}
               >

               <TouchableHighlight
                style={styles.buttonStyle}
                disabled={false}
                activeOpacity={0.5}
                underlayColor="#67c904"
                onPress={showActionSheet}>
                    
                <View style={styles.searchALlbtn}>
                    <Text>{state.data}</Text>
                    <FontAwesome name="caret-down" size={20} iconColor='#030303' style={styles.dropdownIcon} />
                </View>
            </TouchableHighlight>

            <ActionSheet
                ref={actionSheet}
                
                options={datasource12}
                height='180'
                // cancelButtonIndex={4}

                // destructiveButtonIndex={1}
                onPress={(index) => {

                    setState({ data: datasource12[index] }) 

                }}
            />


                </View>
                
                <View style={{marginBottom:10,marginTop:10}}>
               <ComponentButton
                    buttonTitle="Start Trip"
                    // onPress={() => getRoutes1()}
                    onPress={() => makeTrips()}
                    
                    imgeLocation={require('../../assets/icon/fast-delivery.png')}
                    buttonColor={'white'}
                    fontColor={'black'}
                />
               </View>
                



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
            
        </Fragment>
    );

}





export default Trip;



const styles = StyleSheet.create({


    btnCardOuter: {


        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        flex: 1
    },

    ///////////////////////////
    cardOuterStyle: {
        padding: 8,
        marginBottom:10,
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
        justifyContent: 'space-evenly'
    },
    innercard1: {
        display: 'flex',
        flexDirection: 'column',

        width: '50%'

    },


    cardInnerText: {
        fontSize: 10,
        fontWeight: '100',
    },

    cardDetailsRowWrap: {
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
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '50%',
        fontSize: 12
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
    },

    SectionStyle: {
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 52,
        borderRadius: 5,
        marginBottom: 5,
        marginTop: 5,
        // marginLeft: 10,
      
    },
    searchIcon: {
        padding: 10,
        alignItems: 'center'
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center'
    },
    searchALlbtn: {
        display: 'flex',
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        flexDirection: 'row',
        paddingLeft: 8,
        
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#EDEDED'
    },
    dropdownIcon:{
        paddingRight: 8,
        paddingLeft: 8,
        
    }
});