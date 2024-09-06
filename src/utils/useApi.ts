import { DIDDocument } from "../types/types";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

export default function useApi() {
  const [docs, setDocs] = useState<DIDDocument[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getAllDocs = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        "http://10.206.78.116:5005/TrustID/v1/documents/"
      );
      setDocs(data.data);
    } catch (error) {
      console.error(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  const getDoc = async (id: string): Promise<DIDDocument | null> => {
    setIsLoading(true);
    try {
      const { data }: { data: DIDDocument } = await axios.get(
        "http://10.206.78.116:5005/TrustID/v1/documents/"
      );
      return data;
    } catch (error) {
      console.error(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  const addDoc = async (fdata: DIDDocument): Promise<DIDDocument> => {
    const publicKey = "ed25519:4JZG85QAd98W1ZWBCDFf5uL1KpmjwQsH6eJQEtyTLn4E";
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "http://10.206.78.116:5005/TrustID/v1/documents/",
        {
          data: { ...fdata, publicKey: publicKey, serviceEndpoint: "NA" },
        }
      );
      await getAllDocs();
      return data.data;
    } catch (error) {
      console.error(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteDoc = async (id: string) => {
    setIsLoading(true);
    try {
      const { data } = await axios.delete(
        "http://10.206.78.116:5005/TrustID/v1/documents/",
        { params: { id: id } }
      );
      await getAllDocs();
      console.log("response", data);
    } catch (error) {
      console.error(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  const createAccount = async () => {
    const fdata = {
      creatorAccountId: "yusufdimari.testnet",
      newAccountId: "yusuftest.testnet",
    };
    axios
      .post("http://10.206.78.116:5005/TrustID/v1/accounts/create-account", {
        data: fdata,
      })
      .then((res: AxiosResponse) => console.log(res.data))
      .catch((err: AxiosError) => console.error(err.response.data));
    return fdata;
  };
  return {
    docs,
    createAccount,
    addDoc,
    getDoc,
    getAllDocs,
    deleteDoc,
    isLoading,
  };
}
