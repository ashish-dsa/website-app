import AnimatedTypingText from "components/AnimatedTypingText";
import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";
import {Headline, useTheme} from "react-native-paper";

interface IAnimatedTextProps {}
const AnimatedText: React.FC<IAnimatedTextProps> = (props): ReactElement => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    textContainer: {
      alignItems: "center",
      top: "30%",
    },
    intro: {
      fontSize: 40,
      paddingTop: "1%",
      color: theme.colors.text,
    },
    engineer: {
      flexDirection: "row",
      marginTop: "2%",
      width: "40%",
      paddingLeft: "10%",
    },
  });
  return (
    <View style={styles.textContainer}>
      <Headline style={styles.intro}>👋 Hi, I'm Ashish D'sa</Headline>
      <View style={styles.engineer}>
        <Headline style={styles.intro}>Engineer - </Headline>
        <AnimatedTypingText
          color={theme.colors.accent}
          textSize={40}
          typingAnimationDuration={50}
          blinkingCursorAnimationDuration={200}
          text={["Frontend", "Mobile"]}
          loop={true}
        />
      </View>
    </View>
  );
};

export default AnimatedText;
