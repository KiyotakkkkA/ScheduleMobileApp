import { Tabs } from "expo-router";
import { Calendar, User } from "lucide-react-native";
import { View } from "react-native";

import "./global.css";

const tabs = [
  {
    name: "pages/home",
    title: "Главная",
    icon: {
      component: User,
      "active-color": "#E67E22",
      "inactive-color": "gray",
    },
  },
  {
    name: "pages/schedule",
    title: "Расписание",
    icon: {
      component: Calendar,
      "active-color": "#E67E22",
      "inactive-color": "gray",
    },
  },
];

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarItemStyle: {
          paddingTop: 12,
        },
        tabBarBackground: () => (
          <View
            className="bg-dark-primary-light"
            style={{ flex: 1 }}
          />
        ),
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, focused }) => (
              <View
                className={`items-center justify-center w-12 h-12 rounded-xl ${
                  focused ? "bg-dark-secondary/20" : ""
                }`}
              >
                <tab.icon.component color={color} size={28} />
              </View>
            ),
            tabBarActiveTintColor: tab.icon["active-color"],
            tabBarInactiveTintColor: tab.icon["inactive-color"],
          }}
        />
      ))}
    </Tabs>
  );
}
