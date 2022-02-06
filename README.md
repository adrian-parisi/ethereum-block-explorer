# ethereum-block-explorer

## Installation

## Scripts

Install all dependencies using `npm i` or `yarn install`.

This repository has two entry points:

- `npm run start-server` Starts the server component, which interacts with the blockchain.
- `npm run start-client` Starts the client side server, which exposes html files and interacts with the server.

## Setting Up

Copy the `.env.example` and create a new file called `.env`
Set the following variables:
* NODE_URL = <ALCHEMY ENDPOINT - IT CAN BE MAINNET OR ANY ETHEREUM NODE YOU PREFER>
* SERVER_URL = <SERVER URL - BY DEFAULT `http://localhost:3000`>
