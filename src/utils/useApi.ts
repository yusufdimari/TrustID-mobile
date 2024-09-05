import {
  initNear,
  nearConfig,
} from "../../TrustID-server/src/config/nearConfig";
import { Contract as NearContract } from "near-api-js";
import { DIDContractMethods } from "../types/types";
import axios from "axios";

type Contract = DIDContractMethods & NearContract;

export default function useApi() {
  async function createDID(publicKey: string, serviceEndpoint: string) {
    const { wallet, accountId } = await initNear();

    const contract = new NearContract(
      wallet.account(),
      nearConfig.contractName,
      {
        viewMethods: ["getDID"],
        changeMethods: ["createDID", "updateDID"],
        useLocalViewExecution: false,
      }
    ) as Contract;

    try {
      const res = await axios.post(`${nearConfig.contractName}/createDID`, {
        publicKey,
        serviceEndpoint,
      });
      return res.data;
    } catch (error) {
      console.error("Error calling createDID:", error);
      throw error;
    }
  }

  async function getDID(id: string) {
    const { wallet } = await initNear();

    const contract = new NearContract(
      wallet.account(),
      nearConfig.contractName,
      {
        viewMethods: ["getDID"],
        changeMethods: ["createDID", "updateDID"],
        useLocalViewExecution: false,
      }
    ) as Contract;

    try {
      const res = await axios.get(`${nearConfig.contractName}/getDID`, {
        params: { id },
      });
      return res.data;
    } catch (error) {
      console.error("Error calling getDID:", error);
      throw error;
    }
  }

  return { createDID, getDID };
}

// for node js servers
// try {
//   const res = await contract.createDID({ publicKey, serviceEndpoint });
//   return res;
// } catch (error) {
//   console.error("Error calling createDID:", error);
//   throw error;
// }
