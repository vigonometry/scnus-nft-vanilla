import { useWeb3ExecuteFunction } from "react-moralis";
import { DAPP_ABI, DAPP_ADDRESS } from "./contractConfig";

export const callMint  = () => useWeb3ExecuteFunction({
    abi: DAPP_ABI,
    contractAddress: DAPP_ADDRESS,
    functionName: "mint",
    params: {
        _to: "0x92c7740E7357Ba8Faa30a7037Ff516D9A12E1511",
        _id: 101120479389273956157870592411599954667818567064152070158558278822748359753928n,
        _quantity: 1,
    }
})