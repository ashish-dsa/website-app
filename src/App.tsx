// @ts-nocheck
import {BaseNavigator} from "navigation/BaseNavigator";
import React, {ReactElement, useState} from "react";
import {Platform, StatusBar} from "react-native";
import {Provider as PaperProvider} from "react-native-paper";
import iconFont from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";
import {CombinedDarkTheme} from "services/theming";

const App: React.FC = (): ReactElement => {
  const [theme, setTheme] = useState(CombinedDarkTheme);
  return (
    <PaperProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" />
      {Platform.OS === "web" ? (
        <style type="text/css">{`
        @font-face {
         src: url(${iconFont});
         font-family: MaterialCommunityIcons;
       }
      `}</style>
      ) : null}
      <BaseNavigator theme={theme} setTheme={setTheme} />
    </PaperProvider>
  );
};

export default App;
