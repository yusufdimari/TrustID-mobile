import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { DIDDocument } from "../types/types";
import axios, { Axios, AxiosError, AxiosResponse } from "axios";

export default function Dashboard() {
  const [did, setDid] = useState<DIDDocument | null>(null);
  //   const { getDID } = useApi();

  const getdids = async () => {
    axios
      .get("http://10.206.78.116:5005/TrustID/v1/documents")
      .then((res: AxiosResponse) => console.log(res.data))
      .catch((err: AxiosError) => console.error(err.response.data));
  };

  //   const handlePress = async () => {
  //     const fdata = {
  //       creatorAccountId: "yusufdimari.testnet",
  //       newAccountId: "yusuftest.testnet",
  //     };
  //     axios
  //       .post("http://10.206.78.116:5005/TrustID/v1/accounts/create-account", {
  //         data: fdata,
  //       })
  //       .then((res: AxiosResponse) => console.log(res.data))
  //       .catch((err: AxiosError) => console.error(err.response.data));
  //     return fdata;
  //   };
  const handlePress = async (
    fdata: DIDDocument = {
      publicKey: "ed25519:4JZG85QAd98W1ZWBCDFf5uL1KpmjwQsH6eJQEtyTLn4E",
      serviceEndpoint: "NA",
    }
  ): Promise<DIDDocument> => {
    axios
      .post("http://10.206.78.116:5005/TrustID/v1/documents/", {
        data: fdata,
      })
      .then((res: AxiosResponse) => console.log(res.data))
      .catch((err: AxiosError) => console.error(err.response.data));
    return fdata;
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello</Text>
      <Button title="Get DID" onPress={() => getdids()} />
      <Button title="Add DID" onPress={() => handlePress()} />
    </View>
  );
}

const styles = StyleSheet.create({});
