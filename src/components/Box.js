import React, { PureComponent} from 'react'
import {View} from 'react-native'
import {styles} from '../'

export class Box extends PureComponent{
  render() {
    return (
      <View style={[styles.boxstyle,this.props.style]}>
        {this.props.children}
      </View >
    )
  }
}