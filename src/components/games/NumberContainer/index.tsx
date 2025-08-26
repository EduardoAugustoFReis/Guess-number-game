import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

interface NumberContainerProps {
  children: ReactNode;
}

const NumberContainer = ({children}: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ddd",
  },
})