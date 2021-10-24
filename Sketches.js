import * as React from "react";
import { Button, View, TouchableOpacity, Text, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import { Icon } from "react-native-elements";

export default function Sketches({ navigation }) {
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
          text: "Sketches",
          style: { color: "#000", fontWeight: "bold", fontSize: 20 },
        }}
      />
    </View>
  );
}
