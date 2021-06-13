import React, {ReactElement, useEffect, useRef, useState} from "react";
import {StyleSheet, Text, View} from "react-native";

interface IAnimatedTypingTextProps {
  text: string[];
  color: string;
  textSize: number;
  typingAnimationDuration: number;
  blinkingCursorAnimationDuration: number;
  loop: boolean;
}
const AnimatedTypingText: React.FC<IAnimatedTypingTextProps> = (props): ReactElement => {
  let blinkingCursorTimer: any;
  const animatingTextRef = useRef("");
  const blinkingCursorColorRef = useRef("transparent");
  const [animatingText, setAnimatingText] = useState("");
  const [blinkingCursorColor, setBlinkingCursorColor] = useState("transparent");

  const typingAnimation = async (inputText: string[]): Promise<void> => {
    do {
      for (const text of inputText) {
        await typingForwardAnimation(text, 0);
        await new Promise(resolve => setTimeout(resolve, 1000));
        props.loop ? await typingBackwardsAnimation(text, text.length - 1) : null;
      }
    } while (props.loop);
  };
  const typingForwardAnimation = async (inputText: string, index: number): Promise<void> => {
    if (index < inputText.length) {
      const newText = animatingTextRef.current + inputText.charAt(index);
      animatingTextRef.current = newText;
      setAnimatingText(newText);
      await new Promise(resolve => setTimeout(resolve, props.typingAnimationDuration));
      await typingForwardAnimation(inputText, (index += 1));
    }
  };

  const typingBackwardsAnimation = async (inputText: string, index: number): Promise<void> => {
    if (index >= 0) {
      const newText = animatingTextRef.current.substring(0, animatingTextRef.current.length - 1);
      animatingTextRef.current = newText;
      setAnimatingText(newText);
      await new Promise(resolve => setTimeout(resolve, props.typingAnimationDuration));
      await typingBackwardsAnimation(inputText, (index -= 1));
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
    typingAnimation(props.text);
    blinkingCursorAnimation();
    return () => {
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
