import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Index from "../Screens/Index";
import Profile from "../Screens/Profile";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Index} />
      <Drawer.Screen name="Perfil" component={Profile} />
    </Drawer.Navigator>
  );
}

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
