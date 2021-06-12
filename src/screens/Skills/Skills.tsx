import NavigationHeader from "components/NavigationHeader";
import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";

interface ISkillsProps {}
const Skills: React.FC<ISkillsProps> = (props): ReactElement => {
  return (
    <View style={styles.container}>
      <NavigationHeader />
    </View>
  );
};

export default Skills;
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
