import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";

interface IWorksProps {}
const Works: React.FC<IWorksProps> = (props): ReactElement => {
  return <View style={styles.container}></View>;
};

export default Works;
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
