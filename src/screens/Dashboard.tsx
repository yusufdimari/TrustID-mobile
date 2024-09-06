import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import useApi from "../utils/useApi";
import AddDoc from "./AddDoc";
import Button from "../components/Button";
import ViewDoc from "./ViewDoc";

export default function Dashboard() {
  const { getAllDocs, docs } = useApi();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [viewDIDs, setViewDIDs] = useState<boolean>(false);

  useEffect(() => {
    getAllDocs();
  }, [isVisible, viewDIDs]);

  //to add a new DID
  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        backgroundColor: "#e3e3e3",
      }}
    >
      <Text>Decentralized ID</Text>
      <Modal visible={isVisible} animationType="fade">
        <AddDoc setIsVisible={setIsVisible} />
      </Modal>
      <Modal visible={viewDIDs} animationType="fade">
        <ViewDoc setIsVisible={setViewDIDs} data={docs} />
      </Modal>
      <Button title="View DIDs" onPress={() => setViewDIDs(true)} />
      <Button title="Add New DID" onPress={toggleVisible} />
    </View>
  );
}

const styles = StyleSheet.create({});
