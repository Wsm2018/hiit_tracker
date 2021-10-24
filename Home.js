import * as React from "react";
import { Button, View, TouchableOpacity, Text, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import { Icon } from "react-native-elements";

export default function Home({ navigation }) {
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
          text: "HOME",
          style: { color: "#000", fontWeight: "bold", fontSize: 20 },
        }}
      />

      <ScrollView style={{ marginBottom: "3%" }}>
        <View style={{ margin: "5%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Goals</Text>
        </View>

        <View style={{ marginTop: "1%", marginLeft: "3%" }}>
          <Text style={{ fontSize: 18 }}>
            The main purpose of this application is to guide users and help them
            loose the weight they have always been wanting to. This would help
            to reduce the percentage of obesity and obesity related diseases and
            issues people face daily.
          </Text>
        </View>

        <View style={{ margin: "3%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Incentive</Text>
        </View>

        <View style={{ marginTop: "1%", marginLeft: "3%" }}>
          <Text style={{ fontSize: 18 }}>
            The objective of this application is to provide any individual going
            through a different time trying to loose weight. This application
            will help them to achieve their goal and track their daily
            activities.
          </Text>
        </View>

        <View style={{ margin: "3%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Tracking</Text>
        </View>

        <View style={{ marginTop: "1%", marginLeft: "3%" }}>
          <Text style={{ fontSize: 18 }}>
            Users will be able to track their daily calories loss and may
            motivate to push themseleves to loose that extra weight that they
            always wanted to loose.
          </Text>
        </View>

        <View style={{ margin: "3%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>Society</Text>
        </View>

        <View style={{ marginTop: "1%", marginLeft: "3%" }}>
          <Text style={{ fontSize: 18 }}>
            Users will have the ability to share their experiences in loosing
            weight and this may motivate others to go through the same process.
            Users can share their journey through an available form and this
            would be visible for anyone.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
