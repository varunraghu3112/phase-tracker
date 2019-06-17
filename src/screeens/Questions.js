import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { LOGIN, LOG, PRODUCT_LIST, DEIVERY_LIST } from '../endpoints'
import { changeAnswer,isLogged,getRequest ,clearData,postRequest} from '../actions'
import { styles, components, nav, colors } from '../'
import LinearGradient from 'react-native-linear-gradient'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome5';

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

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      index:1,
      value:'',
      phases : [{name:"Task 1",id:1,questions:[{}],description:' Task 1 Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed Ea quo quidam atomorum inciderint Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.',passpercentage:"60%",duration:20},
      {name:"Task 2",id:2,description:'Task 2 Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.task 2 Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.',passpercentage:"50%",duration:30},
       {name:"Task 3",id:3,description:'Task 3 Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.task 3 Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.',passpercentage:"30%",duration:50},
       {name:"Task 4",id:4,description:'Task 4 Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.task 4 Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.',passpercentage:"80%",duration:40},
       {name:"Task 5",id:5,description:'Task 5 Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.task 5 Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.Lorem ipsum dolor sit amet, eu sed prima everti, oratio facilisi reformidans eu cum. Mutat accusata dissentiet nec et. Usu ne dictas delicatissimi, eu paulo mucius eos. Et odio ipsum mei, ut altera gubergren eam. Sed at facilis expetenda, hinc cotidieque an sed. Ea quo quidam atomorum inciderint.',passpercentage:"40%",duration:30},],

    }
  }
  _keyExtractor = Math.random()
  goBack = (comp) => {
    return (
      <TouchableOpacity style={styles.headerButtonStyle} onPress={() => nav.pop(this.props.componentId)}>
        {comp}
      </TouchableOpacity>
    )
  }




  showAlert = (title, subtitle) => {
    nav.overlay('AlertBox', {
      title,
      subtitle
    })
  }

  _keyExtractor = (item, index) => item.name + 'list';

  loading = () => {
    return (
      <View style={{ flex: 1, top: 0, justifyContent: 'center', alignItems: 'center', bottom: 0 }}>
        <components.Animate loop={true} width={100} height={100} anim={require('../../assets/lottie/dna.json')} />
      </View>
    )
  }

  log = () => {
    if(this.props.loading){
      return this.loading()
    }
    let products = this.props.products.length > 0 ? this.props.products: []
    let data = _.filter(products, (item) => {
      let flag = 0
      if (typeof (item) == 'object')
        Object.keys(item).forEach(key => {
          if (_.includes(JSON.stringify(item[key]).replace(' ', '').toLowerCase(), this.state.value.replace(' ', '').toLowerCase())) {
            flag = 1;
          }
        })
      if (flag == 1) {
        return true
      }
      return false
    });
    let total=0
    if (this.props.answers.hasOwnProperty(this.state.index) )
    {
      Object.keys(this.props.answers[this.state.index]).forEach((key) => {
        let p = this.props.products.filter(val => val.id == key)[0]
        total = total + ( p.selling_price + (p.selling_price * ((p.cgst / 100) + (p.sgst / 100)))) * this.props.answers[this.state.index][key]
      })
    }
    return (
      <View style={{flex:1}}>
      
          <components.BlankCard style={{ height: styles.HEIGHT*0.85}}>
          <Text style={[styles.TextStyle,{margin:10}]}>Tasks</Text>
          <ScrollView>
          <FlatList
          data={this.state.phases}
          keyExtractor={this._keyExtractor}
          renderItem = {({ item,index })=>{
            return(
          <View><TouchableOpacity onPress={() => {
            nav.push(this.props.componentId,'Taskscreen',{
              item

            
            })
          }}>
          <components.Box style={{ height: styles.HEIGHT*0.1,margin:10}}>

          <Text style={[styles.buttonTextStyle, { color:'white',marginTop:15}]}>{item.name}</Text>
          </components.Box>
          </TouchableOpacity>
     

            </View>)}}
            />
          </ScrollView>


<components.Add>
  
</components.Add>

          </components.BlankCard>
      </View>
    )
  }

  render = () => {
    return (
      <components.ImgBack>
      <components.Headers>
          {this.goBack(
            [
              <Icon key={styles.headerIconStyle.name} name={styles.headerIconStyle.name} size={styles.headerIconStyle.size} color={colors.black} />,
              <Text numberOfLines={3} key={this.props.item.name} style={styles.headerTextStyle}>Questions</Text>
            ]
          )}
        </components.Headers>
        <components.MainLayer style={{ maxHeight: styles.HEIGHT }}>
          {this.log()}
        </components.MainLayer>
      </components.ImgBack>
    )
  }
}

const mapStateToProps = ({ answers, logged, products, userData}) => {
  return {
    logged: logged.loggedIn,
    answers,
    products: products.response,
    loading: products.loading || userData.loading
  }
}

export const Questions = connect(mapStateToProps, { changeAnswer, isLogged, getRequest, clearData, postRequest })(App)

