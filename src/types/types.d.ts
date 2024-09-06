export interface DIDContractMethods {
  getDID({ id }: { id: string }): Promise<DIDDocument | null>;
  getAllDIDs(): Promise<DIDDocument[] | null>;
  createDID(params: {
    publicKey: string;
    serviceEndpoint: string;
  }): Promise<DIDDocument>;
  updateDID(params: {
    publicKey: string;
    serviceEndpoint: string;
  }): Promise<DIDDocument>;
}

export interface DIDDocument {
  id?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  publicKey: string;
  phone: string;
  email: string;
  serviceEndpoint: string;
}
