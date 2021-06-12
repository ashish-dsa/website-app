import NavigationHeader from "components/NavigationHeader";
import React, {ReactElement, useEffect} from "react";
import {StyleSheet, View} from "react-native";

interface IAboutProps {}
const About: React.FC<IAboutProps> = (props): ReactElement => {
  useEffect(() => {
    console.log("About mounted");
    return () => {
      console.log("About unmounted");
    };
  }, []);

  return (
    <View style={styles.container}>
      <NavigationHeader />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
