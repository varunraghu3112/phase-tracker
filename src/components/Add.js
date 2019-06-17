import React, { PureComponent } from 'react'
import { styles } from '..'
import { View, Text, ScrollView, TouchableOpacity, FlatList,AsyncStorage } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

export class Add extends PureComponent {
  render() {
    return (
        <View style={{marginLeft:280,marginBottom:10}}>
<TouchableOpacity
   style={{
       borderWidth:1,
       alignItems:'center',
       justifyContent:'center',
       width:60,
       height:60,
       backgroundColor:colors.first,
       borderRadius:100,
     }}
 >
 
   <Icon name={"plus"}  size={30}/>
 </TouchableOpacity>
 </View>
    )
  }
}
