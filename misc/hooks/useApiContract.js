import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";

export default function useApiContract({ functionName, address, abi, chain, params }, options) {
	const { native } = useMoralisWeb3Api()
	const payload = { abi, chain, function_name: functionName, address, params }
	const { fetch: runContractFunction, data, error, isFetching, isLoading } = useMoralisWeb3ApiCall(
		native.runContractFunction, payload, { autoFetch: options.autoFetch ?? false, ...options }
	)
	return { runContractFunction, data, error, isLoading, isFetching }
}