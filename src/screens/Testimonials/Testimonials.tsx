import NavigationHeader from "components/NavigationHeader";
import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";

interface ITestimonialsProps {}
const Testimonials: React.FC<ITestimonialsProps> = (props): ReactElement => {
  return (
    <View style={styles.container}>
      <NavigationHeader />
    </View>
  );
};

export default Testimonials;
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
