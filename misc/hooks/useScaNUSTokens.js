import { useContext, useEffect, useState } from "react"
import { ScaNUSTokensContext } from "../providers/ScaNUSTokensProvider"

export default function useScaNUSTokens() {
	const { 
		merchants,
		tiers,
		tokens, 
		ownedTokenIds, 
		setOwnedTokenIds 
	} = useContext(ScaNUSTokensContext)
	const [ownedTokens, setOwnedTokens] = useState([])
	useEffect(() => {
		setOwnedTokens(tokens.filter(t => ownedTokenIds.includes(t.tokenId)))
	}, [ownedTokenIds, tokens])
	return {
		merchants,
		tiers,
		tokens,
		ownedTokenIds,
		ownedTokens,
		addToken: (tokenId) => setOwnedTokenIds([tokenId, ...ownedTokenIds])
	}
}