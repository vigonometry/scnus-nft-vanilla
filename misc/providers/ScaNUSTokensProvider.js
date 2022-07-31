import React, { useMemo } from "react";
import { createContext, useEffect, useState } from "react";
import { useMoralisQuery } from "react-moralis";

export const ScaNUSTokensContext = createContext()

export default function ScaNUSTokensProvider(props) {
	const { data: tokens } = useMoralisQuery('ScaNUSTokens')
	const { data: tiers } = useMoralisQuery('Tiers')
	const { data: merchants } = useMoralisQuery('Merchants')
	const [ownedTokenIds, setOwnedTokenIds] = useState([])
	const value = useMemo(() => ({ 
		tokens: JSON.parse(JSON.stringify(tokens)), 
		tiers: JSON.parse(JSON.stringify(tiers)), 
		merchants: JSON.parse(JSON.stringify(merchants)), 
		ownedTokenIds, 
		setOwnedTokenIds
	}), [tokens, ownedTokenIds])
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