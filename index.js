import {AppRegistry, Platform} from "react-native";
import App from "./src/App";

AppRegistry.registerComponent("myApp", () => App);
if (Platform.OS === "web") {
  AppRegistry.runApplication("myApp", {
    rootTag: document.getElementById("root"),
  });
}
