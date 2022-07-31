import { useContext, useEffect } from "react"
import { ScaNUSTokensContext } from "../providers/ScaNUSTokensProvider"

export default function useScaNUSTokens() {
	const { 
		tokens, 
		ownedTokenIds, 
		setOwnedTokenIds 
	} = useContext(ScaNUSTokensContext)
	return {
		tokens,
		ownedTokenIds
	}
}