import { Provider, ContractFactory, Wallet } from "fuels";
import { readFileSync } from 'fs';
import abi from "../counter/out/debug/counter-abi.json";

async function main() {

    const provider = await Provider.create('https://beta-5.fuel.network/graphql');
    const PRIVATE_KEY = process.env.PRIVATE_KEY!;
    const wallet = Wallet.fromPrivateKey(PRIVATE_KEY, provider);

    const bytecode = readFileSync("../counter/out/debug/counter.bin");

    const factory = new ContractFactory(bytecode, abi, wallet);
    const contract = await factory.deployContract();

    console.log(JSON.stringify(contract));



}

main();