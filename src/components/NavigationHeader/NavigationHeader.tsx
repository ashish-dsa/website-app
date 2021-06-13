import {Theme, useNavigation} from "@react-navigation/native";
import NavigationButton from "components/NavigationButton";
import {ROUTES} from "navigation/constants";
import React, {ReactElement, useState} from "react";
import {Image, StyleSheet, View} from "react-native";
import {Switch, TouchableRipple} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {CombinedDarkTheme, CombinedDefaultTheme} from "services/theming";

interface INavigationHeaderProps {
  theme: Theme;
  setTheme: Function;
}
const PLAY_BUTTON_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/320px-Google_Play_Store_badge_EN.svg.png";

const NavigationHeader: React.FC<INavigationHeaderProps> = ({theme, setTheme}): ReactElement => {
  const navigation = useNavigation();
  const [darkTheme, setDarkTheme] = useState(theme === CombinedDarkTheme);

  const switchTheme = () => {
    if (darkTheme) {
      setTheme(CombinedDefaultTheme);
      setDarkTheme(false);
    } else {
      setTheme(CombinedDarkTheme);
      setDarkTheme(true);
    }
  };
  return (
    <View style={styles.container}>
      <NavigationButton selected={false} name={ROUTES.Home} navigation={navigation} />
      <NavigationButton selected={false} name={ROUTES.Skills} navigation={navigation} />
      <NavigationButton selected={false} name={ROUTES.Works} navigation={navigation} />
      <NavigationButton selected={false} name={ROUTES.About} navigation={navigation} />
      <NavigationButton selected={false} name={ROUTES.Testimonials} navigation={navigation} />
      <View style={styles.theme}>
        <Icon name="lightbulb-on-outline" size={22} color={theme.colors.text} />
        <Switch style={styles.switch} value={darkTheme} onValueChange={switchTheme} />
        <Icon name="lightbulb-off-outline" size={22} color={theme.colors.text} />
      </View>
      <TouchableRipple style={styles.image}>
        <Image
          style={styles.playButton}
          resizeMode={"cover"}
          source={{
            uri: PLAY_BUTTON_IMAGE,
          }}
        />
      </TouchableRipple>
    </View>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: "10%",
    marginRight: "35%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  theme: {
    paddingTop: "3%",
    paddingLeft: "4%",
    flexDirection: "row",
    alignItems: "center",
  },
  switch: {
    height: 15,
    marginHorizontal: 10,
  },
  playButton: {
    flex: 1,
    height: undefined,
    width: undefined,
    resizeMode: "contain",
  },
  image: {
    height: "80%",
    width: "20%",
    paddingLeft: "5%",
    marginTop: "3%",
  },
});
