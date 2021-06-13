import SkillCard from "components/SkillCard";
import React, {ReactElement} from "react";
import {Dimensions, StyleSheet, View} from "react-native";

interface ISkillsProps {}
const Skills: React.FC<ISkillsProps> = (props): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SkillCard name={"react"} percentage={100} imageColor={"#61DBFB"} />
        <SkillCard name={"language-javascript"} percentage={100} imageColor={"#f0db4f"} />
        <SkillCard name={"language-typescript"} percentage={100} imageColor={"#007acc"} />
      </View>
      <View style={styles.row}>
        <SkillCard name={"language-html5"} percentage={100} imageColor={"#F16529"} />
        <SkillCard name={"language-css3"} percentage={100} imageColor={"#2965f1"} />
        <SkillCard name={"language-python"} percentage={50} imageColor={"#306998"} />
      </View>
      <View style={styles.row}>
        <SkillCard name={"android"} percentage={100} imageColor={"#3DDC84"} />
        <SkillCard name={"apple"} percentage={100} imageColor={"#555555"} />
        <SkillCard name={"docker"} percentage={50} imageColor={"#0db7ed"} />
      </View>
    </View>
  );
};

export default Skills;
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    alignItems: "center",
    paddingTop: "5%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    marginVertical: "3%",
  },
});
