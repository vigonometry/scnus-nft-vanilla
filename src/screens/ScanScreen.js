import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native"
import LinearGradient from "react-native-linear-gradient";
import { Image, SafeAreaView, StatusBar, TouchableOpacity, View } from "react-native"
import back from '../../assets/icons/back.png'
import MintModal from "../components/mint/MintModal"
import { SAMPLE_USER } from "../constants/sampleUser";
import QRCodeScanner from 'react-native-qrcode-scanner'

export default function ScanScreen() {
	const [tokenToMint, setTokenToMint] = useState(null)
	const navigation = useNavigation()
	const handleScan = ({ data }) => {
		const mapped = SAMPLE_USER.unownedTokens.find(t => t.hash === data)
		if (!tokenToMint && mapped) {
			setTokenToMint(mapped)
		}
	}
	return (
		<>
		<MintModal token={tokenToMint} close={() => setTokenToMint(null)}/>
		<StatusBar barStyle='light-content'/>
		<QRCodeScanner reactivate reactivateTimeout={1000} fadeIn={false} onRead={handleScan} cameraContainerStyle={{ width: '100%', height: '100%' }} cameraStyle={{ height: '100%' }}/>
		<LinearGradient style={{ position: 'absolute', width: '100%', height: '100%' }} colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)', 'rgba(255,255,255,0)', 'rgba(255,255,255,0)']}/>
		<SafeAreaView style={{ position: 'absolute' }}>
			<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 10 }}>
				<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()} style={{ backgroundColor: 'white', padding: 10, borderRadius: 100 }}>
					<Image source={back} style={{ width: 30, height: 30 }}/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
		</>
	)
}