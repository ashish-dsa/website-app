import NavigationHeader from "components/NavigationHeader";
import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";

interface IPortfolioProps {}
const Portfolio: React.FC<IPortfolioProps> = (props): ReactElement => {
  return (
    <View style={styles.container}>
      <NavigationHeader />
    </View>
  );
};

export default Portfolio;
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
