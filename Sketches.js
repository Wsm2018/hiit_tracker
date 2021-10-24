import * as React from "react";
import {
  Button,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { Header } from "react-native-elements";
import { Icon } from "react-native-elements";
import Swiper from "react-native-swiper";

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

      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <View>
              <Image source={require("./assets/1.png")} />
            </View>
            <View style={{ margin: "10%", alignItems: "center" }}>
              <Text style={{ fontSize: 18 }}>
                The first screen of the application is where the users sees the
                timer. Users will be able to add exercises, set the timers, and
                start the timer to begin their exercise.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.slide1}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <View>
              <Image source={require("./assets/4.png")} />
            </View>
            <View style={{ margin: "10%", alignItems: "center" }}>
              <Text style={{ fontSize: 18 }}>
                The second screen of the application is where the users add the exercise they would like to do the present day.
                The application will provide a list of HIIT execises and users can select an exercise and add it to their list of exercises.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.slide2}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <View>
              <Image source={require("./assets/2.png")} />
            </View>
            <View style={{ margin: "10%", alignItems: "center" }}>
              <Text style={{ fontSize: 18 }}>
                The third screen of the application is where the users can
                pause their workout or even stop their workout completely if
                needed. As they are working out, a progress bar will be present
                under the timer to represent their workout sets that they have
                completed.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.slide3}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <View>
              <Image source={require("./assets/3.png")} />
            </View>
            <View style={{ margin: "10%", alignItems: "center" }}>
              <Text style={{ fontSize: 18 }}>
                The fourth screen of the application is where the users can
                see their daily goals that they hit for the particular day.
                It includes the total exercise time, number of exercise completed, and total number of calories shed.
              </Text>
            </View>
          </View>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //   backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
