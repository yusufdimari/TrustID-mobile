# TrustID Mobile App

## Overview

The TrustID mobile application is a React Native app built with TypeScript, designed to interact with the NEAR blockchain. This app allows users to manage Decentralized Identifiers (DIDs) on the NEAR network. With TrustID, users can create, update, and view their DID documents securely on their mobile devices.

## Features

- **Create DID Document:** Allows users to generate a new DID document associated with their NEAR account.
- **Update DID Document:** Enables users to update the details of their existing DID document.
- **View DID Document:** Lets users view the details of their DID document.

## Prerequisites

- **Node.js:** Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **React Native CLI:** Install the React Native CLI if not already installed. Use `npm install -g react-native-cli`.
- **NEAR Wallet:** Set up a NEAR account and obtain testnet credentials. You can create an account at [NEAR Wallet](https://wallet.testnet.near.org).

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repository/trustid-mobile-app.git
   cd trustid-mobile-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure NEAR API**

   Create a `.env` file in the root directory of the project and add your NEAR testnet configuration:

   ```plaintext
   NEAR_NETWORK_ID=testnet
   NEAR_NODE_URL=https://rpc.testnet.near.org
   NEAR_CONTRACT_NAME=your-contract-name.testnet
   ```

4. **Run the App**

   For iOS:

   ```bash
   npx react-native run-ios
   ```

   For Android:

   ```bash
   npx react-native run-android
   ```

## Usage

1. **Create a New DID**

   - Navigate to the Create DID screen.
   - Enter your public key and service endpoint.
   - Submit the form to create a new DID document on the NEAR blockchain.

2. **Update an Existing DID**

   - Navigate to the Update DID screen.
   - Enter the DID document ID, new public key, and service endpoint.
   - Submit the form to update the existing DID document.

3. **View a DID Document**

   - Navigate to the View DID screen.
   - Enter the DID document ID.
   - View the details of the DID document.

## Code Structure

- **`src/`** - Contains the source code for the app.
  - **`components/`** - Reusable React Native components.
  - **`screens/`** - React Native screens for different app functionalities.
  - **`services/`** - Contains NEAR API integration and other service-related code.
  - **`utils/`** - Utility functions and helpers.
  - **`App.tsx`** - Main application component.

## NEAR API Integration

The app uses the NEAR API to interact with the blockchain. The NEAR configuration and API calls are managed in the `services/nearService.ts` file. This file handles:

- **Connecting to NEAR Network:** Establishes a connection using the configuration from the `.env` file.
- **Creating a DID Document:** Sends a request to the NEAR contract to create a new DID.
- **Updating a DID Document:** Sends a request to update an existing DID on the blockchain.
- **Fetching a DID Document:** Retrieves the DID document details from the NEAR contract.

## Contributing

If you want to contribute to the development of this app, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact [dimarijnr@gmail.com](mailto:dimarijnr@gmail.com).

---
