import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import Home from '../pages/Home';
import AddTask from '../pages/AddTask';
import AddFinance from '../pages/AddFinance';
import AddCompras from '../pages/AddCompras';
import AllTasks from '../pages/AllTasks/index.';
import UserCont from '../pages/UserCont/index.';
import Finance from '../pages/Finance';
import Compras from '../pages/Compras';

export default function AppRoutes(){
    
    const AppStack = createNativeStackNavigator();
    const AppTabs = createBottomTabNavigator();

    function Tabs(){
        return(
            <AppTabs.Navigator 
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle:{
                        position: 'absolute',
                        backgroundColor: '#121212',

                        borderTopWidth: 0,

                        //bottom: 14,
                        elevation: 0,
                        //borderRadius: 4,
                        height: 60,
                                    
                    }
                }}
            >
                <AppTabs.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <AntDesign name="home" size={24} color="#BA68C8" />
                        }
                            return <AntDesign name="home" size={24} color="#DDD" />
    
                        }
                    }}
                />

                <AppTabs.Screen
                    name='All Task'
                    component={AllTasks}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <AntDesign name="book" size={24} color="#BA68C8" />
                        }
                            return <AntDesign name="book" size={24} color="#DDD" />
    
                        }
                    }}
                />
                <AppTabs.Screen
                    name='Finance'
                    component={Finance}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <MaterialIcons name="attach-money" size={24} color="#BA68C8" />
                        }
                            return <MaterialIcons name="attach-money" size={24} color="#DDD" />
    
                        }
                    }}
                />
                <AppTabs.Screen
                    name='Compras'
                    component={Compras}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <MaterialIcons name="shopping-cart" size={24} color="#BA68C8" />
                        }
                            return <MaterialIcons name="shopping-cart" size={24} color="#DDD" />
    
                        }
                    }}
                />

                
                
                




            </AppTabs.Navigator>
        )
    }

    return(
        <AppStack.Navigator>
            <AppStack.Screen
                name='Home'
                component={Tabs}
                options={{
                    headerShown: false,
                }}
            />
            <AppStack.Screen
                name='AddTask'
                component={AddTask}
                options={{
                    headerShown: false,
                }}
            />
            <AppStack.Screen
                name='AddFinance'
                component={AddFinance}
                options={{
                    headerShown: false,
                }}
            />
            <AppStack.Screen
                name='User'
                component={UserCont}
                options={{
                    headerShown: false,
                }}
            />
            <AppStack.Screen
                name='AddCompras'
                component={AddCompras}
                options={{
                    headerShown: false,
                }}
            />
        </AppStack.Navigator>

    );
}