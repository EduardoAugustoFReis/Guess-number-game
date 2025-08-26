import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

interface TitleProps {
  textTitle: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Title = ({textTitle, containerStyle, textStyle}: TitleProps) => {
  return (
    <View style={[styles.titleContainer, containerStyle]}>
      <Text style={[styles.titleContainerText, textStyle]}>{textTitle}</Text>        
    </View>
  ) 
}

export default Title

const styles = StyleSheet.create({
 titleContainer: {
    marginBottom: 12,
    alignItems: "center",
  },
  titleContainerText: {
    fontSize: 20,
  },
})

