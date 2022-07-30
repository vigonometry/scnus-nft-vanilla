import { useWeb3ExecuteFunction } from "react-moralis";
import { DAPP_ABI, DAPP_ADDRESS } from "./contractConfig";

export const callStorage  = () => useWeb3ExecuteFunction({
    abi: DAPP_ABI,
    contractAddress: DAPP_ADDRESS,
    functionName: "createDocument",
    params: {
        _docuId: 5,
    }
})