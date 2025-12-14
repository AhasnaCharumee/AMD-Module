// rnfe

import { useState } from "react"
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
import "../global.css"
import { Link } from "expo-router"

// can't use html tags
// div - View
// p, h1, h2 - Text
// Flexbox is default
// web -> flex dir default row
// react native -> flex dir default col
// vh, dvh for use flex: 1
const App = () => {
  const [data, setData] = useState("")
  return (
    <View style={style.container} className="bg-red-600">
      <Link href="/home" className="p-5 bg-blue-500">
        Home
      </Link>
      <Link href="/1234" className="p-5 bg-blue-500">
        1234
      </Link>
      <Link href="/fghj" className="p-5 bg-blue-500">
        fghj
      </Link>

      {/* lkjhgv - wrong */}
      <Text style={style.text}>Hello, AMD</Text>
      <TextInput
        value={data}
        // onChange={(e) => setData(e.target.value)}
        onChangeText={setData}
      />
      {/* <Button></Button> */}
      <TouchableOpacity onPress={() => {}}>
        <Text>Touch me</Text>
      </TouchableOpacity>
      {/* <Image */}
      {/* <ScrollView */}
    </View>
  )
}
export default App
// tailwindcss -> NativeWind

const style = StyleSheet.create({
  container: {
    flex: 1,
    // height: "100vh", - wrong
    justifyContent: "center",
    alignItems: "center"
  },
  text: { fontSize: 20 },
  shamodha: {},
  temp: {}
})