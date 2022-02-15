import React, { useRef, useEffect, useState } from 'react';
import { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    TouchableOpacity,
    FlatList,
    Text,
    RefreshControl
} from 'react-native';
import { BANNER_H } from '../constants';


import { colors } from '../../config/Colors'
import DetailsCard from '../../components/DetailsCard';
import DetailsCardRed from '../../components/DetailsCardRed';
import Searchbar from '../../components/SearchBar';
import ComponentButton from '../../components/ComponentButton';
import Header from '../../components/Header';
import { getData1, datasource } from '../../endpoints/Outlets'
// import { datasource } from '../../endpoints/Outlets';





const FindOutletScreen1 = ({ route, navigation }) => {
    // var companyId = this.props.route.params.companyId
    // var token = this.props.route.params.token
    // const { companyId, token } = route.params;

    const [refreshing, setrefreshing] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [itemData,setItemData]=React.useState('');

    React.useEffect(()=>{
        setItemData(datasource);
    },[datasource,itemData])

    useEffect(() => {
        // Update the document title using the browser API
        console.log("findoutletScreen");
        fetchData()
        // scrollToTopAndRefresh
      });

  const scrollToTopAndRefresh = () =>{
    // flatlistref.scrollToOffset({ y: 0, animated: true });
    setrefreshing(true, doRefresh());
  }

 const doRefresh = () =>{
    console.log('dsds')
    getData1()
    setTimeout(() => setrefreshing(false), 1);
  }

  const fetchData = () => {
    getData1()
    setIsFetching(false);
  };
  
  const onRefresh = () => {
    setIsFetching(true);
    fetchData();
  };

  var flatlistref = null;


    const scrollA = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        console.log("bcd");
        // scrollToTopAndRefresh()
    }, []);

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];


    const onDoublePress = () => {
        const time = new Date().getTime();
        const delta = time - this.state.lastPress;

        const DOUBLE_PRESS_DELAY = 400;
        if (delta < DOUBLE_PRESS_DELAY) {
            // Success double press
            console.log('double press');

        }
        this.state.lastPress = time;
    };

    const navigateoutlet = ()=>{
        getData1()
        navigation.navigate('FindOutletScreen2')
    }

    return (
        <Fragment >

            <Header navigation={navigation} tittle="Find Outlet" />

            <Animated.ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollA } } }],
                    { useNativeDriver: true },
                )}
                scrollEventThrottle={16}
            >

                <Animated.View
                    style={styles.safeAreaContainer(scrollA)}>



                    <Searchbar />


                    <ComponentButton
                        buttonTitle="All"
                        onPress={() =>navigateoutlet() }
                        imgeLocation={require('../../assets/icon/baseline_alt_route_black_24dp.png')}
                        buttonColor={colors.red}
                        fontColor={'white'}
                    />

                </Animated.View>
                
                     
                    
                <View style={styles.detailsCardOuter}>
                            
                {/* <DetailsCard /> */}
                    

                    <FlatList
                            ref={(ref) => flatlistref = ref} 
                            data={itemData && itemData}
                            onRefresh={onRefresh}
                                refreshing={isFetching}
                                progressViewOffset={10}
                            renderItem={({ item }) =>
                            {if(item = 0){
                                //do something
                            }else{

                            }
                            <TouchableOpacity onPress={() => navigation.navigate('OutletScreen', { item })}>
                            <View
                            style={styles.cardOuterStyle}>
                            <Text style={{ paddingBottom: 5, fontSize: 20, fontWeight: '500' }}>{item.outletName}</Text>


                            <View style={styles.cardInnerStyle}>
                                <View style={styles.innercard1}>

                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Tele1</Text>

                                    <Text style={styles.innercardText2}>{item.outletContact1}</Text>

                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Tele2</Text>

                                    <Text style={styles.innercardText2}>{item.outletContact2}</Text>

                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Customer</Text>

                                    <Text style={styles.innercardText2}>{item.customerName}</Text>


                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Route </Text>

                                    <Text style={styles.innercardText2}>{item.routeId}</Text>


                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Address</Text>

                                    <Text style={styles.innercardText2}>{item.outletAddress}</Text>


                                </View>

                                </View>

                                <View style={styles.innercard1}>

                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Route Index</Text>

                                    <Text style={styles.innercardText2}>{item.routeIndex}</Text>


                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>City</Text>

                                    <Text style={styles.innercardText2}>{item.city}</Text>


                                </View>
                                <View style={styles.profiledetailsInnerwrap}>

                                    <Text style={styles.innercardText1}>Type</Text>

                                    <Text style={styles.innercardText2}>{item.outletTypeId}</Text>


                                </View>

                                </View>
                            </View>

                            </View>
                            </TouchableOpacity> 
                            }}
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
                       
                    
                    <TouchableOpacity onPress={() => {
                        onDoublePress
                    }}>
                        <DetailsCardRed />
                    </TouchableOpacity>
                    {/* <DetailsCard />
                    <View>
                        <DetailsCardRed />
                    </View>
                    <DetailsCard />
                    <DetailsCardRed />
                    <DetailsCard />
                    <DetailsCard />
                    <DetailsCardRed />
                    <DetailsCard />
                    <DetailsCardRed /> */}
                
                </View>
            </Animated.ScrollView>

        </Fragment>
    );

}
export default FindOutletScreen1;
const styles = StyleSheet.create({
   
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

    cardOuterStyle: {
        padding: 8,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 10,
     
        // marginLeft: 10,
        // marginRight: 10,
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
        // padding: 8,
        width: '50%'
    
      },
    
    
      cardInnerText: {
        fontSize: 10,
        fontWeight: '100',
      },
    
      profiledetailsInnerwrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
      },
    
      innercardText1: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent: 'space-evenly',
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



});
