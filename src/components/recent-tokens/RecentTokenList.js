import React from "react";
import { FlatList } from "react-native";
import useScaNUSTokens from "../../../misc/hooks/useScaNUSTokens";
import RecentTokenItem from "./RecentTokenItem";

export default function RecentTokenList() {
	const { ownedTokens } = useScaNUSTokens()
	return (
		<FlatList 
			contentContainerStyle={{ paddingHorizontal: 30, paddingVertical: 24, paddingBottom: 48 }} 
			horizontal 
			data={ownedTokens.slice(0, 3)} 
			renderItem={({ item }) => <RecentTokenItem token={item}/>}
			keyExtractor={i => i.tokenId}
			style={{ maxHeight: 210 }}
			showsHorizontalScrollIndicator={false}
		/>
	)
}