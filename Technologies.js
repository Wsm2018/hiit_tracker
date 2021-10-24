import * as React from "react";
import { Button, View, TouchableOpacity, Text, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import { Icon } from "react-native-elements";

export default function Technologies({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header
        backgroundColor="transparent"
        leftComponent={
          <Icon
            name="menu"
            type="ionicon"
            color="#000"
            onPress={() => navigation.openDrawer()}
          />
        }
        centerComponent={{
          text: "Technologies",
          style: { color: "#000", fontWeight: "bold", fontSize: 20 },
        }}
      />

      <View style={{ margin: "5%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>React Native</Text>
      </View>

      <View style={{ marginTop: "1%", marginLeft: "5%" }}>
        <Text style={{ fontSize: 18 }}>
          My main framework that I will be using to develop the application is
          React Native. Using React Native, I will have access to multiple
          libraries, packages that is pre-built to implement the app the way I
          am planning.
        </Text>
      </View>

      <View style={{ margin: "5%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>Expo</Text>
      </View>

      <View style={{ marginTop: "1%", marginLeft: "5%" }}>
        <Text style={{ fontSize: 18 }}>
          Expo is another tool that I will be using to build the application.
          With React Native, appropriate operating system is required to build
          the native application. Using Expo, I will be able to make the
          application in both iOS and Android
        </Text>
      </View>

      <View style={{ margin: "5%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>
          Cloud Firestore
        </Text>
      </View>

      <View style={{ marginTop: "1%", marginLeft: "5%" }}>
        <Text style={{ fontSize: 18 }}>
          Cloud Firestore is a NoSQL database that pairs extremely well with
          developing mobile application as it includes many great
          functionalities such as putting a listener in the database to listen
          for changes. Having cronjob functionality and many more. This would
          help me to save all my data and retrieve whenever I would want to.
        </Text>
      </View>
    </View>
  );
}
