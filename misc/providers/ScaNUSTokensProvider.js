import React, { useMemo } from "react";
import { createContext, useEffect, useState } from "react";
import { useMoralisQuery } from "react-moralis";

export const ScaNUSTokensContext = createContext()

export default function ScaNUSTokensProvider(props) {
	const { data } = useMoralisQuery('ScaNUSTokens')
	const [ownedTokenIds, setOwnedTokenIds] = useState([])
	const value = useMemo(() => ({ tokens: JSON.parse(JSON.stringify(data)), ownedTokenIds, setOwnedTokenIds }), [data, ownedTokenIds])
	useEffect(() => {
		// GET OWNED TOKEN IDS HERE SOMEHOW
		setOwnedTokenIds([
			'siBQKeroTs',
			'kbgTLRuzxH',
			'h5pc4IifaQ',
			'XzzoGAkv8i'
		])
	}, [])
	return (
		<ScaNUSTokensContext.Provider value={value}>
			{props.children}
		</ScaNUSTokensContext.Provider>
	)
}