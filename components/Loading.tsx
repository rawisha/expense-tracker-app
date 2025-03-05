import { colors } from '@/constants/theme'
import { ActivityIndicator, ActivityIndicatorProps, StyleSheet, Text, View } from 'react-native'
const Loading = ({
    size = "large",
    color = colors.primary
}: ActivityIndicatorProps) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}
export default Loading
const styles = StyleSheet.create({})