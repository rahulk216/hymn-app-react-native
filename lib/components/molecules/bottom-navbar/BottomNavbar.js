import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";

//screens
import Category from "../../Category/Category";
import HomePage from "../../Homepage/Homepage";
import Search from "../../Search/Search";
import SettingPage from "../../setting/Setting";

//icons
import CategoryIcon from "../../../assets/categoryIcon.js";
import Home from "../../../assets/home";
import SearchIcon from "../../../assets/search";
import Setting from '../../../assets/settingsIcon.js';

//constants
import { colors } from "../../../utils/constants";

const Tab = createBottomTabNavigator();

const BottomNavbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: colors.PRIMARY,
          color: "#fff",
          borderRadius: 30,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                marginTop: 30,
              }}
            >
              <SearchIcon />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                marginTop: 30,
              }}
            >
              <Home />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="category"
        component={Category}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                marginTop: 30,
              }}
            >
              <CategoryIcon />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="settings"
        component={SettingPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                marginTop: 30,
              }}
            >
              <Setting />
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavbar;

const styles = StyleSheet.create({
  navLink: {
    color: "#fff",
  },
  tabScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#7F5D50",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
