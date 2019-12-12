import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Text, StyleSheet, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native'
import {Section} from './common'
import {animate} from '../helpers/animation'
const ListItem = ({lib}) => {
  const dispatch = useDispatch()
  const {selected} = useSelector(state => state)
  const [isExpanded, setIsExpanded] = useState(false)
  
  useEffect(() => {
    LayoutAnimation.spring()
    if(selected === lib.id) setIsExpanded(true)
    else setIsExpanded(false)
  }, [selected])

  const handlePress = () => {
    animate()
    let payload = lib.id
    if(selected === lib.id) payload = ''
    dispatch({type: 'UPDATE_SELECTED', payload})
  }

  const renderDescription = () => {
    if(isExpanded) {
      return (
        <Section>
          <Text style={styles.desc}>{lib.description}</Text>
        </Section>
      )
    }

    return null
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View>
        <Section>
          <Text style={styles.title}>
            {lib.title}
          </Text>
        </Section>
        {renderDescription()}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingLeft: 15,
    color: '#EC674D'
  },
  desc: {
    flex: 1,
    color: '#fff',
    paddingLeft: 15,
    paddingRight: 15
  }
})

export default ListItem