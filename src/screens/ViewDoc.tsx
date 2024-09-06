import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { DIDDocument } from "../types/types";
import useApi from "../utils/useApi";

export default function ViewDoc({
  setIsVisible,
  data = [],
}: {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data: DIDDocument[];
}) {
  const { deleteDoc, docs, isLoading } = useApi();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsVisible(false)}
        style={styles.closeButton}
      >
        <Text>Done</Text>
      </TouchableOpacity>
      <Text style={styles.title}>View your Decentralized ID's</Text>

      <FlatList
        style={{
          width: "100%",
          paddingHorizontal: 10,
          maxHeight: "90%",
        }}
        contentContainerStyle={{
          gap: 10,
          width: "100%",
          paddingVertical: 10,
        }}
        data={data}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item: { id, firstName, lastName, email, phone } }) => (
          <TouchableOpacity
            key={id}
            style={styles.doc}
            activeOpacity={0.6}
            onPress={() => deleteDoc(id)}
          >
            <Text style={styles.docTitle}>Public Identity</Text>
            {/* <View style={{ width: 50, backgroundColor: "grey" }} /> */}
            {/* <View> */}
            <Text>Full Name: {firstName + " " + lastName}</Text>
            <Text>Email: {email}</Text>
            <Text>Phone: {phone}</Text>
            {/* </View> */}
          </TouchableOpacity>
        )}
      />
      <Modal visible={isLoading} transparent>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
    backgroundColor: "#e3e3e3",
  },
  closeButton: {
    position: "absolute",
    top: 70,
    right: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
    marginTop: 35,
  },
  doc: {
    backgroundColor: "white",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    // flexDirection: "row",
    gap: 10,
  },
  docTitle: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
  },
});
