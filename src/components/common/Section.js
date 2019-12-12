import React from 'react'
import {View, StyleSheet} from 'react-native'

const Section = ({children}) => {
  
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#37373D',
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#252526',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
})

export {Section}