//import './rtron'

import app from './src/App'

app()


// import { Navigation } from "react-native-navigation";
// import React from 'react'
// import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
// import { Provider } from 'react-redux';
// import { store } from './store'
// import { connect } from 'react-redux'
// import {changeAnswer} from './action'
// import Reactotron from 'reactotron-react-native'
// import './rtron'
// const log = Reactotron.log

// const products = [
//   {
//     "id": 1065,
//     "selling_price": 1,
//     "cost_price": 2,
//     "name": "dummy",
//     "short_code": "dummy",
//     "profit_percentage": null,
//     "mrp": 1,
//     "is_stockable": true,
//     "stock": 6,
//     "description": "sadflkjh",
//     "image": "/media/blog-details.jpg",
//     "is_active": true,
//     "is_approved": false,
//     "is_preorder": false,
//     "created_at": "2018-12-24T12:36:06.389000Z",
//     "updated_at": "2018-12-24T12:37:20.266000Z",
//     "cgst": 0,
//     "sgst": 0,
//     "hsn_number": "234234",
//     "vendor": 11853
//   },
//   {
//     "id": 1064,
//     "selling_price": 1,
//     "cost_price": 80,
//     "name": "Pencil",
//     "short_code": "PENCIL",
//     "profit_percentage": null,
//     "mrp": 1,
//     "is_stockable": true,
//     "stock": 12,
//     "description": "asdfasdf",
//     "image": "/media/51wYN9OnUbL._SY355_.jpg",
//     "is_active": true,
//     "is_approved": false,
//     "is_preorder": false,
//     "created_at": "2018-12-24T09:34:24.042387Z",
//     "updated_at": "2018-12-24T11:17:54.693000Z",
//     "cgst": 0,
//     "sgst": 0,
//     "hsn_number": "2342134234",
//     "vendor": 11853
//   },
//   {
//     "id": 1063,
//     "selling_price": 1,
//     "cost_price": 1,
//     "name": "Dairy Milk",
//     "short_code": "DMLIk",
//     "profit_percentage": null,
//     "mrp": 1,
//     "is_stockable": true,
//     "stock": 5,
//     "description": "asdfljkasdhflkj",
//     "image": "/media/417HK5HKYL.jpg",
//     "is_active": true,
//     "is_approved": false,
//     "is_preorder": false,
//     "created_at": "2018-12-21T06:56:18.718469Z",
//     "updated_at": "2018-12-21T07:02:54.803786Z",
//     "cgst": 0,
//     "sgst": 0,
//     "hsn_number": "23412341234",
//     "vendor": 11853
//   },
//   {
//     "id": 1062,
//     "selling_price": 12,
//     "cost_price": 9.2,
//     "name": "Hero Pen",
//     "short_code": "Hero",
//     "profit_percentage": null,
//     "mrp": 12,
//     "is_stockable": true,
//     "stock": 10,
//     "description": "fdgfgd",
//     "image": "/media/brand-new-original-hero-wing-black-fountain-pen-set-500x500.jpg",
//     "is_active": true,
//     "is_approved": false,
//     "is_preorder": false,
//     "created_at": "2018-12-21T05:58:21.103765Z",
//     "updated_at": "2018-12-24T12:34:14.452000Z",
//     "cgst": 0,
//     "sgst": 0,
//     "hsn_number": "1234",
//     "vendor": 11853
//   },
//   {
//     "id": 1061,
//     "selling_price": 1,
//     "cost_price": 3.77,
//     "name": "Cello Fine Grip - blue",
//     "short_code": "Cello",
//     "profit_percentage": null,
//     "mrp": 1,
//     "is_stockable": true,
//     "stock": 26,
//     "description": "hiiiiii",
//     "image": "/media/1.jpg",
//     "is_active": true,
//     "is_approved": false,
//     "is_preorder": false,
//     "created_at": "2018-12-19T10:31:04.636371Z",
//     "updated_at": "2018-12-24T12:35:32.063000Z",
//     "cgst": 0,
//     "sgst": 0,
//     "hsn_number": "testiong",
//     "vendor": 11853
//   },
//   {
//     "id": 1060,
//     "selling_price": 22,
//     "cost_price": 9.33,
//     "name": "Sharmila Biscut",
//     "short_code": "sharmi",
//     "profit_percentage": null,
//     "mrp": 1,
//     "is_stockable": true,
//     "stock": 27,
//     "description": "dsafljhasdfkjh",
//     "image": "/media/no_image.png",
//     "is_active": true,
//     "is_approved": false,
//     "is_preorder": false,
//     "created_at": "2018-11-28T12:47:42.246606Z",
//     "updated_at": "2018-12-21T06:27:19.024324Z",
//     "cgst": 5,
//     "sgst": 5,
//     "hsn_number": "sdlkjasldfkj",
//     "vendor": 11853
//   },
//   {
//     "id": 1059,
//     "selling_price": 30,
//     "cost_price": 14.65,
//     "name": "test2",
//     "short_code": "tset",
//     "profit_percentage": null,
//     "mrp": 1,
//     "is_stockable": true,
//     "stock": 120,
//     "description": "",
//     "image": "/media/no_image.png",
//     "is_active": true,
//     "is_approved": false,
//     "is_preorder": false,
//     "created_at": "2018-10-30T07:57:12.865438Z",
//     "updated_at": "2018-11-28T12:43:46.949396Z",
//     "cgst": 0,
//     "sgst": 0,
//     "hsn_number": "asdfasdf",
//     "vendor": 11853
//   },
//   {
//     "id": 1058,
//     "selling_price": 10,
//     "cost_price": 29.79,
//     "name": "test",
//     "short_code": "test",
//     "profit_percentage": null,
//     "mrp": 1,
//     "is_stockable": true,
//     "stock": 177,
//     "description": "sagdsdg",
//     "image": "/media/no_image.png",
//     "is_active": true,
//     "is_approved": false,
//     "is_preorder": false,
//     "created_at": "2018-10-30T07:55:44.648181Z",
//     "updated_at": "2018-12-24T11:17:54.770000Z",
//     "cgst": 0,
//     "sgst": 0,
//     "hsn_number": "sadfasdgf",
//     "vendor": 11853
//   }
// ]

// class App extends React.Component {
//   componentDidMount() {
//   }

//   state={
//     name:'',
//     index:1
//   }

//   render = () => {
//     log(['answers',this.props.answers])
//     log(['index', this.state.index])
//     return(
//     <View style={{flex:1, marginTop:22}}>
//       <ScrollView horizontal style={{height:200,backgroundColor:'#dddddd'}}>
//         {
//           products.map((val,i) => (
//             <TouchableOpacity onPress={() => {
//               this.props.changeAnswer(this.state.index,val.id,'increment')
//             }} style={{backgroundColor:'#dddeee',margin:3,padding:3,height:150}}>
//               <Text numberOfLines={20} style={{fontSize:30}}>{val.name}</Text>
//             </TouchableOpacity>
//           ))
//         }
//       </ScrollView>
//       <ScrollView horizontal style={{ height: 100, backgroundColor: '#444444' }}>
//         {
//         Object.keys(this.props.answers).length>0?  Object.keys(this.props.answers).map((key) => (
//             <TouchableOpacity key={key+'cool'} onPress={() => {
//               this.setState({index:Number(key)})
//             }} style={{ backgroundColor: this.state.index == key ? '#999fff' : '#777fff', margin: 3, padding: 3, height: 100 }}>
//               <Text numberOfLines={20} style={{ fontSize: 30 }}>{key}</Text>
//             </TouchableOpacity>
//           )) : (
//             <View  style={{ backgroundColor: '#999fff', margin: 3, padding: 3, height: 100 }}>
//               <Text numberOfLines={20} style={{ fontSize: 30 }}>{1}</Text>
//             </View>
//             )
//         }
//         <TouchableOpacity onPress={() => {
//             let i = Object.keys(this.props.answers).length > 0 ? Object.keys(this.props.answers).length+1 :2
//             if (!Object.keys(this.props.answers).length > 0){
//               this.props.changeAnswer(1, "new", 'increment')
//             }
//           this.props.changeAnswer(i, "new", 'increment')
//           setTimeout(()=> {
//             this.setState({ index: i})
//           })
//         }} style={{ backgroundColor: '#999eee', margin: 3, padding: 3, height: 100 }}>
//           <Text numberOfLines={20} style={{ fontSize: 30 }}>Add</Text>
//         </TouchableOpacity>
//       </ScrollView>
//       <ScrollView horizontal style={{ height: 200, backgroundColor: '#777777' }}>
//         {
//           this.props.answers.hasOwnProperty(this.state.index) ? Object.keys(this.props.answers[this.state.index]).map((key) => (
//             <TouchableOpacity onPress={() => {
//               this.props.changeAnswer(this.state.index,key,'decrement')
//             }} style={{ backgroundColor: '#999eee', margin: 3, padding: 3, height: 150 }}>
//               <Text numberOfLines={20} style={{ fontSize: 30 }}>{key}</Text>
//               <Text numberOfLines={20} style={{ fontSize: 30 }}>{this.props.answers[this.state.index][key]}</Text>
//             </TouchableOpacity>
//           )) :  null
//         }
//       </ScrollView>

//     </View>
//    )}
// }

// const mapStateToProps = ({answers}) => {
//   return {
//     answers
//   }
// }

// let Home  = connect(mapStateToProps,{changeAnswer})(App)

// Navigation.registerComponentWithRedux(`home`, () => Home,Provider,store);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       component: {
//         name: "home"
//       },
// stack: {
//   children: [{
//     component: {
//       name: 'Maps',
//       passProps: {
//         title: 'Maps'
//       }
//     }
//   }],
//     options: {
//     bottomTab: {
//       text: 'Maps',
//         icon: Platform.OS == 'ios' ? require('./assets/icons/ios/maps.png') : require('./assets/icons/maps.png'),
//           testID: 'Maps'
//     }
//   }
// }
//     }
//   });
// });