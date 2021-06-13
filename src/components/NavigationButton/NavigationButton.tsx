import {NavigationProp, useTheme} from "@react-navigation/native";
import React, {ReactElement} from "react";
import {StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";

interface INavigationButtonProps {
  selected: boolean;
  name: string;
  navigation: NavigationProp<any>;
}
const NavigationButton: React.FC<INavigationButtonProps> = ({name, selected, navigation}): ReactElement => {
  const theme = useTheme();
  return (
    <View style={styles.button}>
      <Button
        onPress={() => {
          navigation.navigate(name);
        }}
        disabled={selected}
        mode={"text"}
        color={theme.colors.text}>
        {name}
      </Button>
    </View>
  );
};

export default NavigationButton;

const styles = StyleSheet.create({
  button: {
    width: "17%",
    height: "20%",
  },
});
