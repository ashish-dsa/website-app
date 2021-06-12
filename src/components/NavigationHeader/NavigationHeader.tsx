import {useNavigation} from "@react-navigation/native";
import {ROUTES} from "navigation/constants";
import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";
import {Appbar} from "react-native-paper";

interface INavigationHeaderProps {}
const NavigationHeader: React.FC<INavigationHeaderProps> = (): ReactElement => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" subtitle="" onPress={() => navigation.navigate(ROUTES.Home)} />
        <Appbar.Content title="Portfolio" subtitle="" onPress={() => navigation.navigate(ROUTES.Portfolio)} />
        <Appbar.Content title="About" subtitle="" onPress={() => navigation.navigate(ROUTES.About)} />
        <Appbar.Content title="Services" subtitle="" onPress={() => navigation.navigate(ROUTES.Services)} />
        <Appbar.Content title="Skills" subtitle="" onPress={() => navigation.navigate(ROUTES.Skills)} />
        <Appbar.Content title="Testimonials" subtitle="" onPress={() => navigation.navigate(ROUTES.Testimonials)} />
      </Appbar.Header>
    </View>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  container: {},
});
