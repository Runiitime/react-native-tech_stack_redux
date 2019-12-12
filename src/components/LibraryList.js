import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {View, Text, FlatList, ScrollView} from 'react-native'
import ListItem from './ListITem'
import data from '../store/library.json'
import {Spinner} from './common'

const LibraryList = () => {
  const dispatch = useDispatch()
  const {libraries} = useSelector(state => state)

  useEffect(() => {
    dispatch({type: 'UPDATE_LIBRARY', payload: data})
  }, [])

  const renderItem = () => {
    if(libraries.length === 0) return <Spinner/>
    return libraries.map(item => <ListItem lib={item} key={item.title}/>)
  }

  return (
    <ScrollView>
      {renderItem()}
    </ScrollView>
  )
}



export default LibraryList