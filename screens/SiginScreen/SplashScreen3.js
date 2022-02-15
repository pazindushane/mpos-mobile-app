// import React, { Component } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   StatusBar,
//   Image,
//   KeyboardAvoidingView,
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import FormButton from '../../components/FormButton';
// import FormInput from '../../components/FormInput';
// import { getusers, postuser, userlogin } from '../../endpoints/Users';
// import { Formik } from 'formik';
// import { storeData, sendData } from '../../endpoints/Loginendpoint';
// import HomeScreen from '../HomeScreenRoutes/HomeScreen'



// class SignInScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
     
//       email: '',
//       password: ''
//     };
//     // this.registerUser = this.registerUser.bind(this);
//   }

//   submitHandler = (e) =>{
//     e.preventDefault()
//     console.log(this.state);
//   }

//   sendDatas = (response) =>{
//     console.log("response eka");
//     console.log(response);
//   }
  
//    loginScreena = () =>{
//     this.props.navigation.navigate('HomeScreen')
//   }
  
  

//   render() {

//     return (
//       <Formik onSubmit = {this.submitHandler}>
//       <View style={styles.container}>
//         <StatusBar backgroundColor="#3F50B4" barStyle="light-content" />
//         <View style={styles.header}>
//           <Image
//             source={require('../../assets/1.jpeg')}
//             resizeMode="contain"
//             style={styles.logo2}
//           />

//           <Text style={styles.title}>mPOS</Text>


//         </View>

//         <View>

//         </View>

//         <Text style={{ fontSize: 14, color: "white", alignSelf: 'center', position: 'absolute', bottom: 22 }}>Engineered by</Text>
//         <Text style={{ fontSize: 20, color: "white", alignSelf: 'center', position: 'absolute', bottom: 0 }}>INTELLEON</Text>


//         <Animatable.View
//           animation="fadeInUpBig"
//           style={styles.footer}
//           delay={1500}>
//           <KeyboardAvoidingView style={styles.action}>
//             <FormInput
//                  placeholder="email"
//               value={this.state.email}
//               onChangeText={(value) => {
//                 this.setState({
//                   email: value
//                 })
//               }}
           
              
             
//             />
//           </KeyboardAvoidingView>

//           <View style={styles.action}>
//             <FormInput
//                  placeholder="Password"
//               value={this.state.password}
//               onChangeText={(value) => {
//                 this.setState({
//                   password: value
//                 })
//               }}
           
              
             
//             />
//           </View>
//           <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
//             <Text style={{ textAlign: 'right', marginTop: -10, color: '#2697FF' }}>
//               forgot password ?
//             </Text>
//           </TouchableOpacity>
//           <View style={styles.action}>
//             <FormButton
//               buttonTitle="Sign In"
//               onPress={() => loginuser(this.state.email, this.state.password) }
//             />
//           </View>
//         </Animatable.View>
//       </View>
//       </Formik>
//     );
//   }
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#3F50B4',
//   },
//   header: {
//     flex: 1,
//     justifyContent: 'center',

//   },
//   footer: {
//     padding: 20,
//     backgroundColor: 'white',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//   },
//   title: {
//     color: 'white',
//     fontSize: 30,
//     marginTop: 260,
//     alignSelf: 'center',
//   },
//   action: {
//     flexDirection: 'row',
//     marginTop: 5,

//     borderBottomColor: '#f2f2f2',
//     paddingBottom: 5,
//   },
//   logo2: {

//     alignSelf: 'center',
//     position: 'absolute',
//     width: '40%',
//     height: '130%',
//     marginBottom: 50,
//   },
// });
