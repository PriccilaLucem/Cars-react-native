import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Home from "../page/home";
import Cars from "../page/cars";


const {Navigator, Screen} = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
        <Navigator>
            <Screen name="Home" component={Home}/>
            <Screen name="Cars" component={Cars}/>
        </Navigator>
        </NavigationContainer>
    )
}
export default Routes;