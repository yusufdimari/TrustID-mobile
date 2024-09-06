import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import useApi from "../utils/useApi";
import { DIDDocument } from "../types/types";

export default function AddDoc({ setIsVisible }) {
  const dataToSend: DIDDocument = {
    firstName: "",
    middleName: "",
    lastName: "",
    publicKey: "",
    phone: "",
    email: "",
    serviceEndpoint: "",
  };
  const handleChange = (name: string, text: string) => {
    dataToSend[name] = text;
  };
  const { addDoc, isLoading } = useApi();

  const submit = async () => {
    const res = await addDoc(dataToSend);
    if (res.id) return setIsVisible(false);
    // setIsVisible(false);
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableOpacity
        onPress={() => setIsVisible(false)}
        style={styles.closeButton}
      >
        <Text>Done</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Create your Decentralized ID</Text>
      <TextInput
        placeholder="First Name"
        style={styles.textInputField}
        onChangeText={(t) => handleChange("firstName", t)}
      />
      <TextInput
        placeholder="Middle Name"
        style={styles.textInputField}
        onChangeText={(t) => handleChange("middleName", t)}
      />
      <TextInput
        placeholder="Last Name"
        style={styles.textInputField}
        onChangeText={(t) => handleChange("lastName", t)}
      />
      <TextInput
        placeholder="Phone Number"
        style={styles.textInputField}
        keyboardType="phone-pad"
        onChangeText={(t) => handleChange("phone", t)}
      />
      <TextInput
        placeholder="Email address"
        style={styles.textInputField}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(t) => handleChange("email", t)}
      />
      <Button onPress={submit} isLoading={isLoading} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  closeButton: {
    position: "absolute",
    top: 70,
    right: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 30,
  },
  textInputField: {
    width: "100%",
    padding: 10,
    backgroundColor: "#ededed",
    borderRadius: 10,
    height: 50,
  },
  button: {
    backgroundColor: "blue",
    height: 100,
  },
});
