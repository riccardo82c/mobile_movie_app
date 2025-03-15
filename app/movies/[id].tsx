import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const MoviesDetails = () => {
  const { id } = useLocalSearchParams()
  return (
    <View>
      <Text>MoviesDetails {id}</Text>
    </View>
  )
}

export default MoviesDetails
