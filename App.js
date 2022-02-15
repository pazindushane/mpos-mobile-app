import React from 'react'
import { View, Text, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ForgetPasswordScreen from './screens/ForgetPasswordScreen/ForgetPasswordScreen';

import ReceiveCodeScreen from './screens/ForgetPasswordScreen/ReceiveCodeScreen';

// import SignInScreen from './screens/SiginScreen/SplashScreen3';
import SignInScreen from './screens/SiginScreen/SignInScreen';

import ProfileScreen from './screens/HomeScreenRoutes/ProfileScreen';
import HomeScreen from './screens/HomeScreenRoutes/HomeScreen';
import OutletScreen from './screens/findOutletScreens/OutletScreen';
import FindOutletScreen2 from './screens/findOutletScreens/FindOutletScreenRouteOnly';

import { colors } from './config/Colors'
import FindOutletScreen1 from './screens/findOutletScreens/FindOutletScreen1';
import Sale from './screens/Transactions/Sale';
import Item from './screens/Transactions/Item/Item';
import Selectbatch from './screens/Batch/Selectbatch';
import SelectBatchTwo from './screens/Batch/SelectBatch2/SelectBatchTwo';

import Offers from './screens/offers/Offers';
import OffersFreeItemDiff from './screens/offers/OffersFreeItemDiff/OffersFreeItemDiff';
import OffersFreetemSame from './screens/offers/OffersFreetemSame/OffersFreetemSame';
import OffersPrice from './screens/offers/OffersPrice/OffersPrice';
import OffersRate from './screens/offers/OffersRate/OffersRate';
import Notification from './screens/NotificationScreen';

import Promo from './screens/Promos/Promo';
import Promos from './screens/Promos/Promos/Promos';
import SelectPromo from './screens/Promos/Promos/SelectPromo/SelectPromos';

import PaymentNow from './screens/Payment/PaymentNow';

import ExcessAmmount from './screens/Payment/ExcessAmmount';
import ExcessAmmount2 from './screens/Payment/ExcessAmmount2';
import OutletPayment from './screens/Payment/OutletPayment';
import Cash from './screens/Payment/Cash/Cash'
import Card from './screens/Payment/Card/Card'
import Excess from './screens/Payment/Excess/Excess'
import Credit from './screens/Payment/Credit/Credit'
import Cheque from './screens/Payment/Cheque/Cheque'
import CreateCheque from './screens/Payment/Cheque/CreateCheque'
import Price from './screens/Payment/Price/Price'

import PaymentOutlet from './screens/PaymentOutlet/PaymentOutlet'


import Return from './screens/Return/Return'
import ReturnItem from './screens/Return/ReturnItem/ReturnItem'
import ReturnBatch from './screens/Return/ReturnBatch/ReturnBatch'
import ReturnNow from './screens/Return/ReturnNow/ReturnNow'
import ReturnNow2 from './screens/Return/ReturnNow/ReturnNow2/ReturnNow2'
import Refund from './screens/Return/ReturnNow/ReturnNow2/Refund/Refund'
import RefundItemForItem from './screens/Return/ReturnNow/ReturnNow2/Refund/RefundItemForItem'
import RefundItemForItem2 from './screens/Return/ReturnNow/ReturnNow2/Refund/RefundItemForItem/RefundItemForItem2'
import RefundCash from './screens/Return/ReturnNow/ReturnNow2/Refund/RefundCash'
import RefundCash2 from './screens/Return/ReturnNow/ReturnNow2/Refund/RefundCash/RefundCash2'

import SelectCustomer from './screens/Customer/SelectCustomer';
import AddNewCustomer from './screens/Customer/AddNewScreen/AddNewCustomer';
import CustomerDashBoard from './screens/Customer/CustomerDashBoard/CustomerDashBoard';
import SelectOutletINCustomer from './screens/Customer/CustomerDashBoard/SelectOutletINCustomer/SelectOutletINCustomer';
import AddOutletForCustomer from './screens/Customer/CustomerDashBoard/SelectOutletINCustomer/AddOutletForCustomer/AddOutletForCustomer';

import SelectingRoute from './screens/Routes/SelectingRoute/SelectingRoute';
import RouteDashBoard from './screens/Routes/RouteDashBoard';
import SelectOutletINRoute from './screens/Routes/SelectOutletInRoute/SelectOutletINRoute';
import AddOutletForRoute from './screens/Routes/SelectOutletInRoute/AddOutletForRoute/AddOutletForRoute';

import Trip  from './screens/trip/trip';
import ViewStock  from './screens/trip/viewStock/viewStock';

import { navigationRef } from './endpoints/Loginendpoint';
import { navigationRefT } from './endpoints/Outlets'
import PropTypes from 'prop-types'
import { disablebtn } from './endpoints/RoutesEndpoint';

const Stack = createStackNavigator();
console.disableYellowBox = true;
export default function App() {
  return (
    <NavigationContainer ref={navigationRefT, navigationRef} >
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="ReceiveCode" component={ReceiveCodeScreen} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
          headerTitleAlign: 'center', headerTitle: 'Profile', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary }, headerTitleStyle: {
            color: 'white',
          },
        }} />
        <Stack.Screen name="OutletScreen" component={OutletScreen} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="FindOutletScreen1"  component={FindOutletScreen1} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="FindOutletScreen2" component={FindOutletScreen2} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />


        <Stack.Screen name="Sale" component={Sale} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="Item" component={Item} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />

        <Stack.Screen name="Offers" component={Offers} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="OffersFreeItemDiff" component={OffersFreeItemDiff} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="OffersFreetemSame" component={OffersFreetemSame} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="OffersPrice" component={OffersPrice} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="OffersRate" component={OffersRate} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />

        <Stack.Screen name="Promo" component={Promo} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="Promos" component={Promos} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="SelectPromo" component={SelectPromo} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />




        <Stack.Screen name="Notification" component={Notification} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="Selectbatch" component={Selectbatch} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="SelectBatchTwo" component={SelectBatchTwo} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />


        <Stack.Screen name="PaymentNow" component={PaymentNow} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="ExcessAmmount" component={ExcessAmmount} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="ExcessAmmount2" component={ExcessAmmount2} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="OutletPayment" component={OutletPayment} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />

        <Stack.Screen name="Cash" component={Cash} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="Card" component={Card} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="Excess" component={Excess} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="Credit" component={Credit} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="Cheque" component={Cheque} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="Price" component={Price} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="PaymentOutlet" component={PaymentOutlet} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />



        <Stack.Screen name="CreateCheque" component={CreateCheque} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />

        <Stack.Screen name="Return" component={Return} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="ReturnItem" component={ReturnItem} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="ReturnBatch" component={ReturnBatch} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="ReturnNow" component={ReturnNow} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="ReturnNow2" component={ReturnNow2} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="Refund" component={Refund} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="RefundItemForItem" component={RefundItemForItem} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="RefundItemForItem2" component={RefundItemForItem2} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="RefundCash" component={RefundCash} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="RefundCash2" component={RefundCash2} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
       
        
        <Stack.Screen name="SelectCustomer" component={SelectCustomer} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="AddNewCustomer" component={AddNewCustomer} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="CustomerDashBoard" component={CustomerDashBoard} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="SelectOutletINCustomer" component={SelectOutletINCustomer} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="AddOutletForCustomer" component={AddOutletForCustomer} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
       
        <Stack.Screen name="SelectingRoute" component={SelectingRoute} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="RouteDashBoard" component={RouteDashBoard} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="SelectOutletINRoute" component={SelectOutletINRoute} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="AddOutletForRoute" component={AddOutletForRoute} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="Trip" component={Trip} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />
        <Stack.Screen name="ViewStock" component={ViewStock} options={{ headerTitleAlign: 'center', headerTitle: 'mPOS', headerTintColor: 'white', headerShown: false, headerStyle: { backgroundColor: colors.primary, } }} />










      </Stack.Navigator>
    </NavigationContainer>

  )
}

