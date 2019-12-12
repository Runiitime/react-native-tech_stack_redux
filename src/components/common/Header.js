import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = ({title}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },
  text: {
    fontSize: 20,
    color: '#EC3A16'
  }
})

Header.defaultProps = {
  title: 'Mobile App'
}

export {Header}