import React, { useMemo } from "react";
import { createContext, useEffect, useState } from "react";
import { useMoralisQuery } from "react-moralis";
import { useNFTBalance } from "../hooks/useNFTBalance";

export const ScaNUSTokensContext = createContext()

export default function ScaNUSTokensProvider(props) {
	const { data: tokens } = useMoralisQuery('ScaNUSTokens')
	const { data: tiers } = useMoralisQuery('Tiers')
	const { data: merchants } = useMoralisQuery('Merchants')
	const { NFTBalance } = useNFTBalance()
	const [ownedTokenIds, setOwnedTokenIds] = useState([])
	const value = useMemo(() => ({ 
		tokens: JSON.parse(JSON.stringify(tokens)),
		tiers: JSON.parse(JSON.stringify(tiers)), 
		merchants: JSON.parse(JSON.stringify(merchants)),
		ownedTokenIds,
		setOwnedTokenIds
	}), [tokens, tiers, merchants, ownedTokenIds])
	useEffect(() => {
		const tokenIds = JSON.parse(JSON.stringify(tokens)).map(t => t.tokenId)
		const parsed = JSON.parse(JSON.stringify(NFTBalance))
		console.log(parsed)
		setOwnedTokenIds(parsed.map(p => p.token_id).filter(t => tokenIds.includes(t)))
	}, [NFTBalance, tokens])
	return (
		<ScaNUSTokensContext.Provider value={value}>
			{props.children}
		</ScaNUSTokensContext.Provider>
	)
}