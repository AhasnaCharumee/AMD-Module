import { View, Text } from "react-native"
import React from "react"
import { Link, Slot } from "expo-router"

const RootLayout = () => {
  return (
    <View className="flex-1 pb-5">
      <Slot />
      <View className="w-full py-5 bg-green-500">
        <Link href="/">Entry</Link>
        <Link href="/home">Home</Link>
        <Link href="/1234">ID:1234</Link>
        <Link href="/hello">ID:hello</Link>
        <Link href="/test">Test Index</Link>
        <Link href="/test/sample">Test Sample</Link>
        <Link href="/test/1234">Test ID:1234</Link>
        <Link href="/test/hi">Test ID:hi</Link>
        <Link href="/login">Login</Link>
      </View>
    </View>
  )
}

export default RootLayout