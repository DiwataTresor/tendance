import { NativeBaseProvider } from "native-base";
import Home from "./screens/Home";
import Onglet from "./screens/Onglet";
import {View} from "react-native";
const App = () => {
  return (
    <NativeBaseProvider>
      
        <Onglet />
     
    </NativeBaseProvider>
  );
};

export default App;
