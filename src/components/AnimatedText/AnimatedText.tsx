import AnimatedTypingText from "components/AnimatedTypingText";
import React, {ReactElement} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {useTheme} from "react-native-paper";

interface IAnimatedTextProps {}
const AnimatedText: React.FC<IAnimatedTextProps> = (props): ReactElement => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      height: Dimensions.get("window").height,
    },

    textContainer: {
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      flex: 2,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <AnimatedTypingText
          color={theme.colors.text}
          textSize={30}
          typingAnimationDuration={100}
          blinkingCursorAnimationDuration={190}
          text="&#129304; Hi, I'm Ashish D'sa"
          loop={true}
        />
        <AnimatedTypingText
          color={theme.colors.text}
          textSize={30}
          typingAnimationDuration={100}
          blinkingCursorAnimationDuration={190}
          text="Web Engineer"
          loop={false}
        />
      </View>
    </View>
  );
};

export default AnimatedText;
