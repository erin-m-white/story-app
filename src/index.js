import { AppRegistry } from "react-native";
import App from "./app.js";

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
