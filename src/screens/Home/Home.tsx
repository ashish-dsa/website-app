import AnimatedText from "components/AnimatedText";
import NavigationHeader from "components/NavigationHeader";
import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";

interface IHomeProps {}
const Home: React.FC<IHomeProps> = (props): ReactElement => {
  return (
    <View style={styles.container}>
      <NavigationHeader />
      <AnimatedText />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
