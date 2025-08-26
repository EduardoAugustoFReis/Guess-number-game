import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { ReactNode } from "react";
import { ImageBackground, StyleSheet } from "react-native";

interface LayoutProps {
  children: ReactNode;
  colors?: LinearGradientProps["colors"];
  showBackgroundImage?: boolean;
}

const AppLayout = ({
  children,
  colors = ["#4c669f", "#3b5998", "#192f6a"],
  showBackgroundImage = true,
}: LayoutProps) => {
  return (
    <LinearGradient colors={colors} style={styles.linearGradient}>
      {showBackgroundImage && (
        <ImageBackground
          source={require("../../../assets/images/dices.png")}
          style={StyleSheet.absoluteFillObject}
          imageStyle={{ opacity: 0.3 }}
        />
      )}
      <SafeAreaView
        style={styles.safeArea}
        edges={["top", "bottom", "left", "right"]}
      >
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
