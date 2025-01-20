# Web3Wall (WebApp)

Web3Wall is a sample WebApp acting as a forum (or Twitter lookalike) where posts are signed by a CryptoWallet and stored on the blockchain

>[!IMPORTANT]
>This repository is dedicated to the Web App of Web3Wall, to see the contract, please head to [the contract's repo](https://github.com/DigiPlush/web3Wall-contracts)


>[!CAUTION]
>As the contract is public, I am not responsible for posts made on the contract.

## Chain & Contract

The code is actually set up to use the following: 

- **Chain :** Amoy
- **Contract :** 0x9957A3b7f91357f5411Cf3E4e71a585344C5A6f9

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DigiPlush/web3Wall-app.git
   ```

2. Navigate to the project directory:

    ```bash
    cd web3Wall-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Configuration

Before starting the application, ensure you configure the required environment variables. Create a `.env` file in the project root and add the following variable: `NEXT_PUBLIC_TEMPLATE_CLIENT_ID=`

## Deployment

To create a production-ready build of the application:

```bash
npm run build
```

## Acknowledgements

- [ThirdWeb](https://thirdweb.com) for their web3 development platform, making it easier to deploy my contracts and interact with it on the app