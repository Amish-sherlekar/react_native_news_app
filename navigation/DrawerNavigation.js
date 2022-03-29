import BottomNavigation from "./BottomNavigation";
import RecentSearch from '../screens/RecentSearch';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={BottomNavigation} />
                <Drawer.Screen name="Recent Search" component={RecentSearch} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation