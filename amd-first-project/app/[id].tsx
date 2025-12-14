import { View, Text } from "react-native"
import React from "react"
import { useLocalSearchParams } from "expo-router"

// - /1234
// - /lkjhbgvc
// - /thnmnb
const IDScreen = () => {
  const params = useLocalSearchParams()

  return (
    <View className="flex-1 justify-center items-center">
      <Text>ID Screen: {params?.id}</Text>
    </View>
  )
}

export default IDScreen