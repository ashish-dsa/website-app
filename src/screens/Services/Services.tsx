import NavigationHeader from "components/NavigationHeader";
import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";

interface IServicesProps {}
const Services: React.FC<IServicesProps> = (props): ReactElement => {
  return (
    <View style={styles.container}>
      <NavigationHeader />
    </View>
  );
};

export default Services;
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
