import * as React from "react";
import { Button, View, TouchableOpacity, Text, Image } from "react-native";
import { Header } from "react-native-elements";
import { Icon } from "react-native-elements";

export default function Comparison({ navigation }) {
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
          text: "Comparison",
          style: { color: "#000", fontWeight: "bold", fontSize: 20 },
        }}
      />
      <View style={{ margin: "5%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>Comparison</Text>
      </View>

      <View style={{ marginTop: "1%", marginLeft: "3%" }}>
        <Text style={{ fontSize: 18 }}>
          This contains a comparison analysis between similar application and
          overviwing the features between the applications and the differences.
          This is to understand what similar applications offers users and how
          it helps them.
        </Text>
      </View>

      <View style={{ marginTop: "5%", marginLeft: "3%", alignItems: "center" }}>
        <Image source={require("./assets/comparison.png")} />
      </View>

      <View style={{ marginTop: "5%", marginLeft: "3%", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>
          Seconds Pro, is a mobile fitness application that is used by users to track their HIIT workout performance
          The application works with wearables devices which is an extremely plus point since most people in this time
          wears or has wearable devices such as Apple Watch, Samsung Galaxy watch, Fitbits, etc. 

        </Text>
      </View>
    </View>
  );
}
