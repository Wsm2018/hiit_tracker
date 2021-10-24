import React, { useState } from "react";
import {
  Button,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Modal,
} from "react-native";
import { Header } from "react-native-elements";
import { Icon } from "react-native-elements";
import { Avatar } from "react-native-elements";

export default function Persona({ navigation }) {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

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
          text: "Persona",
          style: { color: "#000", fontWeight: "bold", fontSize: 20 },
        }}
      />

      <View style={{ margin: "5%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>Personas</Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri: "https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
          }}
          onPress={() => setModal1(true)}
        />
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>James Harding</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModal1(!modal1);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Avatar
              rounded
              size="medium"
              source={{
                uri: "https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
              }}
              onPress={() => setModal1(true)}
            />
            <View style={{ margin: "5%", flexDirection: "row" }}>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Name:</Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}> </Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  James Harding
                </Text>
              </View>
            </View>

            <View
              style={{ marginTop: "1%", marginLeft: "3%", marginBottom: "3%" }}
            >
              <Text style={{ fontSize: 18 }}>
                James Harding is a person who likes to workout. He is a person
                who can be categorized as "Over Exerciser". But More and more
                exercise isn’t better! If he keeps on doing more than 5 workouts in
                a week to see results, along with exercises, he need to take a serious look at other
                keys to weight loss e.g. food, nutrition, toning or sleep. He
                cannot exercise his way to great weight loss because he simply
                cannot burn enough calories for real results. At 3500 calories
                per 1 lb fat loss, it would take about 8 hours of exercise to
                lose just 1 lb a week! An especially bad form of over-exercising
                is two exercise sessions in the same day.
              </Text>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModal1(!modal1)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    height: "100%",
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "80%",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
