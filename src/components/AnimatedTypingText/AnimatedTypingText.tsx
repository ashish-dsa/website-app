import React, {ReactElement, useEffect, useRef, useState} from "react";
import {StyleSheet, Text, View} from "react-native";

interface IAnimatedTypingTextProps {
  text: string;
  color: string;
  textSize: number;
  typingAnimationDuration: number;
  blinkingCursorAnimationDuration: number;
  loop: boolean;
}
const AnimatedTypingText: React.FC<IAnimatedTypingTextProps> = (props): ReactElement => {
  let index = 0;
  let typingTimer: any;
  let blinkingCursorTimer: any;
  const animatingTextRef = useRef("");
  const blinkingCursorColorRef = useRef("transparent");
  const [animatingText, setAnimatingText] = useState("");
  const [blinkingCursorColor, setBlinkingCursorColor] = useState("transparent");

  const typingAnimation = (inputText: string, reverse: boolean): void => {
    clearTimeout(typingTimer);
    if (!reverse) {
      if (index < inputText.length) {
        const newText = animatingTextRef.current + inputText.charAt(index);
        animatingTextRef.current = newText;
        setAnimatingText(newText);
        index++;
        typingTimer = setTimeout(() => {
          typingAnimation(inputText, false);
        }, props.typingAnimationDuration);
      } else {
        typingTimer = setTimeout(() => {
          typingAnimation(inputText, true);
        }, props.typingAnimationDuration);
      }
    } else if (props.loop) {
      if (index >= 0) {
        const newText = animatingTextRef.current.substring(0, animatingTextRef.current.length - 1);
        animatingTextRef.current = newText;
        setAnimatingText(newText);
        index -= 1;
        typingTimer = setTimeout(() => {
          typingAnimation(inputText, true);
        }, props.typingAnimationDuration);
      } else {
        typingTimer = setTimeout(() => {
          typingAnimation(inputText, false);
        }, props.typingAnimationDuration);
      }
    }
  };

  const blinkingCursorAnimation = (): void => {
    blinkingCursorTimer = setInterval(() => {
      if (blinkingCursorColorRef.current === "transparent") {
        blinkingCursorColorRef.current = props.color;
        setBlinkingCursorColor(props.color);
      } else {
        blinkingCursorColorRef.current = "transparent";
        setBlinkingCursorColor("transparent");
      }
    }, props.blinkingCursorAnimationDuration);
  };

  useEffect(() => {
    typingAnimation(props.text, false);
    blinkingCursorAnimation();
    return () => {
      clearTimeout(typingTimer);
      clearInterval(blinkingCursorTimer);
    };
  }, []);

  const styles = StyleSheet.create({
    textContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    animatingText: {
      color: props.color,
      fontSize: props.textSize,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.textContainer}>
      <Text style={styles.animatingText}>
        {animatingText}
        <Text style={{color: blinkingCursorColor}}>|</Text>
      </Text>
    </View>
  );
};

export default AnimatedTypingText;
