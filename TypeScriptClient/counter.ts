import { Provider, Wallet, Contract, BigNumberish, BN } from "fuels";
import abi from "../Counter/out/debug/counter-abi.json";

async function main() {

    const provider = await Provider.create('https://beta-5.fuel.network/graphql');
    const PRIVATE_KEY = process.env.PRIVATE_KEY!;
    const wallet = Wallet.fromPrivateKey(PRIVATE_KEY, provider);

    // console.log(wallet);

    const contractId = "0x53f14c86e9dc7f025aa54ba75a9d9da609b86e6c8cee56f55e17dd04763a9997";
    const counter = new Contract(contractId, abi, wallet);

    const { transactionId, value } = await counter.functions.inc_counter().call();
    console.log(transactionId);

}

main();
