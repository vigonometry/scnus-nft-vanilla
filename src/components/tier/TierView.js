import React from "react";
import { Text, View } from "react-native";
import TierCard from "./TierCard";

export default function TierView() {
	return (
		<View style={{ paddingHorizontal: 30, marginTop: 12, maxHeight: 40 }}>
			<Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>Your Tier</Text>
			<TierCard/>
		</View>
	)
}