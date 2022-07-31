import React, { useMemo } from "react";
import { createContext, useEffect, useState } from "react";
import { useMoralisQuery } from "react-moralis";

export const ScaNUSTokensContext = createContext()

export default function ScaNUSTokensProvider(props) {
	const { data: tokens } = useMoralisQuery('ScaNUSTokens')
	const [ownedTokenIds, setOwnedTokenIds] = useState([])
	const value = useMemo(() => ({ tokens, ownedTokenIds, setOwnedTokenIds }), [tokens, ownedTokenIds])
	useEffect(() => {
		// GET OWNED TOKEN IDS HERE SOMEHOW
	}, [])
	return (
		<ScaNUSTokensContext.Provider value={value}>
			{props.children}
		</ScaNUSTokensContext.Provider>
	)
}