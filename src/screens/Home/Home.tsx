import AnimatedText from "components/AnimatedText";
import React, {ReactElement} from "react";
import {Dimensions, StyleSheet, View} from "react-native";

interface IHomeProps {}
const Home: React.FC<IHomeProps> = (props): ReactElement => {
  return (
    <View style={styles.container}>
      <AnimatedText />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
});
