import {NavigationContainer, Theme} from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import NavigationHeader from "components/NavigationHeader";
import React, {ReactElement} from "react";
import About from "screens/About";
import Home from "screens/Home";
import Skills from "screens/Skills";
import Testimonials from "screens/Testimonials";
import Works from "screens/Works";
import {ROUTES} from "./constants";

interface IBaseNavigatorProps {
  theme: Theme;
  setTheme: Function;
}
export const BaseNavigator: React.FC<IBaseNavigatorProps> = ({theme, setTheme}): ReactElement => {
  const Stack = createStackNavigator();
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
  };
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          ...TransitionScreenOptions,
          headerShown: true,
          header: () => <NavigationHeader theme={theme} setTheme={setTheme} />,
        }}>
        <Stack.Screen name={ROUTES.Home} component={Home} />
        <Stack.Screen name={ROUTES.Skills} component={Skills} />
        <Stack.Screen name={ROUTES.Testimonials} component={Testimonials} />
        <Stack.Screen name={ROUTES.About} component={About} />
        <Stack.Screen name={ROUTES.Works} component={Works} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
