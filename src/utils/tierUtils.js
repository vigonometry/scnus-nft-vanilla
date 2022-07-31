export const getCurrentTier = (tokens, tiers) => {
	const numOwned = tokens.length
	const tiersPassed = tiers.filter(t => t.req <= numOwned)
	return tiersPassed[tiersPassed.length - 1]
}

export const getNextTier = (tokens, tiers) => {
	const numOwned = tokens.length
	const tiersUnpassed = tiers.filter(t => numOwned < t.req)
	return tiersUnpassed.length > 0 ? tiersUnpassed[0] : null
}